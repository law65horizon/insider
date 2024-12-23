import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
// import useUserProfileStore from '../store/userProfileStore'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'

const useGetAllPosts = (num) => {
  const [isLoading, setIsLoading] = useState(true)
  const {posts, setPosts} = usePostStore()
  const showToast = useShowToast()
//   const userProfile = useUserProfileStore((state) => state.userProfile)
// console.log(posts)
  useEffect(() => {
    const getPosts = async() => {
        // if(!userProfile) return
        setIsLoading(true)
        setPosts([])
        try {
            const q = query(collection(firestore, 'posts'), limit(num))
            const querySnapShot = await getDocs(q)
            const posts = []
            querySnapShot.forEach((doc) => {
                posts.push({...doc.data(), id:doc.id})
            })
            posts.sort((a,b) => b.createdAt - a.createdAt)
            setPosts(posts)
        } catch (error) {
          console.error(error.message)
            showToast('Error', error.message,'error')
            setPosts([])
        }finally {
            setIsLoading(false)
        }
    }
    getPosts()
    window.addEventListener('online', getPosts)
  },  [setPosts, showToast])
  return {isLoading, posts}
}



export default useGetAllPosts