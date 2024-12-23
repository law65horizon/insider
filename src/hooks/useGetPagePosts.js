import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
// import useUserProfileStore from '../store/userProfileStore'
import { collection, doc, endAt, endBefore, getDoc, getDocs, limit, limitToLast, orderBy, query, startAfter, startAt, where } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'
import { useLocation } from 'react-router-dom'

const useGetPagePosts = (currentPage, firstPostIndex, lastPostIndex) => {
  const [isLoading, setIsLoading] = useState(true)
  const [lastPost, setLastPost] = useState(null)
  const [firstPost, setFirstPost] = useState(null)
  const [post_num, setPost_num] = useState()
  const {pathname} = useLocation()
  // const count = 21
  const {posts, setPosts} = usePostStore()
  const showToast = useShowToast()
  console.log(pathname)
  useEffect(() => {
    const getPosts = async() => {
        setIsLoading(true)
        setPosts([])
        try {
          const countRef = doc(firestore, 'counter', 'count')
          const docSnap = await getDoc(countRef)
          let counter = docSnap.data().count_number
          let q = query(collection(firestore, 'posts'),orderBy('createdAt', 'asc'),where('counter', '<=', counter - firstPostIndex), where('counter', '>', counter - lastPostIndex))
          const querySnapShot = await getDocs(q)
          const posts = []
          querySnapShot.forEach((doc) => {
              posts.push({...doc.data(), id:doc.id})
          })
          posts.sort((a,b) => b.counter - a.counter)
          setPosts(posts)
          setPost_num(counter)
          // console.log(posts)


          
          // if(next) {
          //   console.log('nod')
          //   const q = query(collection(firestore, 'posts'), orderBy('createdAt', 'desc'), startAfter(lastPost.data().createdAt), limit(10))
          //   // const q = query(collection(firestore, 'posts'), orderBy('createdAt'), limit(10))
          //   const querySnapShot = await getDocs(q)
          //   setLastPost(querySnapShot.docs[querySnapShot.docs.length -1])
          //   setFirstPost(querySnapShot.docs[querySnapShot.docs.length - querySnapShot.docs.length])
          //   // const next = query(collection(firestore, 'posts'), orderBy('createdAt', 'desc'), startAfter(last.data().createdAt), limit(10))
          //   // const nextshot = await getDocs(next)
          //   const posts = []
          //   querySnapShot.forEach((doc) => {
          //     posts.push({...doc.data(), id:doc.id})
          //   })
          //   // posts.sort((a,b) => b.createdAt - a.createdAt)
          //   setPosts(posts)
          //   console.log(posts)
          // }else if(prev) {
          //   console.log('pod')
          //   const q = query(collection(firestore, 'posts'), orderBy('createdAt', 'desc'), endAt(firstPost.data().createdAt), limitToLast(10))
          //   // const q = query(collection(firestore, 'posts'), orderBy('createdAt'), limit(10))
          //   const querySnapShot = await getDocs(q)
          //   setLastPost(querySnapShot.docs[querySnapShot.docs.length -1])
          //   setFirstPost(querySnapShot.docs[querySnapShot.docs.length - querySnapShot.docs.length])
          //   // const next = query(collection(firestore, 'posts'), orderBy('createdAt', 'desc'), startAfter(last.data().createdAt), limit(10))
          //   // const nextshot = await getDocs(next)
          //   const posts = []
          //   querySnapShot.forEach((doc) => {
          //     posts.push({...doc.data(), id:doc.id})
          //   })
          //   // posts.sort((a,b) => b.createdAt - a.createdAt)
          //   setPosts(posts)
          //   console.log(posts)
          // }else {
          //   console.log('fod')
          //   // const q = query(collection(firestore, 'posts'), orderBy('createdAt', 'desc'), limit(10))
          //   const q = query(collection(firestore, 'posts'), orderBy('createdAt', 'desc'), limitToLast(10), )
          //   // const q = query(collection(firestore, 'posts'), orderBy('createdAt'), limit(10))
          //   const querySnapShot = await getDocs(q)
          //   setLastPost(querySnapShot.docs[querySnapShot.docs.length -1])
          //   setFirstPost(querySnapShot.docs[querySnapShot.docs.length - querySnapShot.docs.length])
          //   // const next = query(collection(firestore, 'posts'), orderBy('createdAt', 'desc'), startAfter(last.data().createdAt), limit(10))
          //   // const nextshot = await getDocs(next)
          //   // console.log(firstPost.key)
          //   const posts = []
          //   querySnapShot.forEach((doc) => {
          //     posts.push({...doc.data(), id:doc.id})
          //   })
          //   // posts.sort((a,b) => b.createdAt - a.createdAt)
          //   setPosts(posts)
          //   console.log(posts)
          // }

        } catch (error) {
            console.log('error')
            console.error(error.message)
            showToast('Error', error.message,'error')
            setPosts([])
        }finally {
            // console.log('end')
            setIsLoading(false)
        }
    }
    getPosts()
    window.addEventListener('online', getPosts)
  },  [setPosts, showToast, currentPage, pathname])
  return {isLoading, posts,post_num}
}



export default useGetPagePosts