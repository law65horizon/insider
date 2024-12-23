import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
// import useUserProfileStore from '../store/userProfileStore'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'

const useGetBRNPosts = () => {
    const [isLoadingDoc, setIsLoadingDoc] = useState()
    // const [error, setError] = useState(true)
    const {bRNews, setbRNews, error, setError} = usePostStore()
    const isOnline = navigator.onLine
    const showToast = useShowToast()
  //   const userProfile = useUserProfileStore((state) => state.userProfile)
//   console.log(bRNews)
    useEffect(() => {
      const getPosts = async() => {
          // if(!userProfile) return
          setIsLoadingDoc(true)
          setError(false)
          setbRNews([])
        
          try {
              const q = query(collection(firestore, 'posts'),where('relevant', '==', true))
              const querySnapShot = await getDocs(q)
              const posts = []
              querySnapShot.forEach((doc) => {
                  posts.push({...doc.data(), id:doc.id})
              })
              posts.sort((a,b) => b.createdAt - a.createdAt)
              setbRNews(posts)
          } catch (error) {
              setError(true)
              console.log(error)
              showToast('Error', error.message,'error')
              setbRNews([])
          }finally {
              setIsLoadingDoc(false)
          }
      }
      getPosts()
      window.addEventListener('online', getPosts)
    },  [setbRNews, showToast,isOnline])
    return {isLoadingDoc, error, bRNews}
  }
  
  export default useGetBRNPosts