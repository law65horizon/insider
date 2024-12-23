import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import NewsPage from "./pages/NewsPage/NewsPage"
import SinglePost from "./pages/Posts/SinglePost"
import SignUp from "./dashboard/SignUp"
import { auth } from "./FireBase/FireBase"
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "./dashboard/Dashboard"
import useAuthStore from "./store/useAuthStore"
import Category from "./pages/NewsPage/Category"
import Test from "./pages/AuthPage/Test"
import CreatePost from "./dashboard/CreatePost"


function App() {
  const authUser = useAuthStore(state => state.user)
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tech" element={<Test/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path="/news/pages/:nu" element={<NewsPage/>}/>
        <Route path="/:uid" element={<SinglePost/>}/>
        <Route path='/cat/:cat' element={<Category/>}/>
        <Route path='/cat/:cat/pages/:nu' element={<Category/>}/>
        <Route path='/dashboard/editpost' element={<CreatePost/>}/>
        <Route path="/auth" element={!authUser ? <AuthPage/> : <Navigate to={'/dashboard'} />}  />
        <Route path="/dashboard" element={!authUser? <Dashboard /> : <Navigate to={'/auth'} />}  />
      </Routes>
    </PageLayout>
  )
}

export default App
