import { error } from "jquery";
import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    createPost: (post) => set(state => ({posts: [post, ...state.posts]})),
    //deletePost
    //addcomment
    setPosts: (posts) => set( {posts} ),
    bRNews: [],
    error: false,
    setError: (error) => set({error}),
    setbRNews: (bRNews) => set({bRNews})
}))

export default usePostStore