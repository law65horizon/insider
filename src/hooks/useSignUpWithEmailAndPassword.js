import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth, firestore } from '../FireBase/FireBase'
import {setDoc, doc, collection, query, where, getDocs} from 'firebase/firestore'
import useShowToast from './useShowToast'
import useAuthStore from '../store/useAuthStore'

const useSignUpWithEmailAndPassword = () => {
  const [
    createUserWithEmailAndPassword, ,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)

  const showToast = useShowToast()
  const loginUser = useAuthStore(state => state.login)
//   const logoutUser = useAuthStore(state => state.logout)

  const signUp = async (inputs) => {
    if(!inputs.email || !inputs.password || !inputs.username) {
        showToast('Error', 'please fiil all the fields', 'error')
        return
    }
    
    const usersRef = collection(firestore, 'users')
    const q = query(usersRef, where('username', '==', inputs.username))
    const querySnapShot = await getDocs(q)

    if(!querySnapShot.empty) {
      showToast('Error', 'username already exists', 'error')
      console.log(querySnapShot)
      return;
    }

    try {
        const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
        if(!newUser && error) {
          showToast('Error', error.message, 'error')
          return
        }
        if(newUser) {
            const userDoc = {
                uid: newUser.user.uid,
                email:inputs.email,
                username: inputs.username,
                posts: [],
                createdAt: Date.now()
            }
            await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc)
            localStorage.setItem('user-info', JSON.stringify(userDoc))
            loginUser(userDoc)
            console.log('successful')
        }
    } catch (error) {
      // showToast('Error', error.message, 'error')
      console.log(error.message)
    }
  }

  return (
    {loading, error, signUp}
  )
}

export default useSignUpWithEmailAndPassword