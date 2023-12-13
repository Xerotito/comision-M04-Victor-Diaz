/**
 * Estado global que contiene todos los posts que se muestran en la pagina principal, también guarda
 * el id del post a editar o eliminar, (esto es util ya que elementos html como dialog no se por que no soporta props)
 */

import { create } from 'zustand'

const postStore = create((set) => ({
    posts           : null,
    currentPost     : null,
    postID          : null,
    thisCommentID   : null,
    statusComment   : '',                                                              // crate | edit | delete
    setPosts        : (payload) => set((state) => ({ posts: payload })),
    setCurrentPost  : (payload) => set((state) => ({ currentPost: payload })),
    setPostID       : (idPost) => set((state) => ({ postID: idPost })),
    setThisCommentID: (idComment) => set((state) => ({ thisCommentID: idComment })),
    resetPostID     : () => set((state) => ({ postID: null })),
    setStatusComment: (status) => set((state) => ({ statusComment: status })),
}))

export default postStore