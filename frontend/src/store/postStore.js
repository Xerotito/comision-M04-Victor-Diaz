/**
 * Estado global que contiene todos los posts que se muestran en la pagina principal, también guarda
 * el id del post a editar o eliminar, (esto es util ya que elementos html como dialog no se por que no soporta props)
 */

import { create } from 'zustand'

const postStore = create((set) => ({
    posts      : null,
    postID     : null,
    setPosts   : (payload) => set(state => ({ posts: payload })),
    setPostID  : (idPost) => set(state => ({ postID: idPost })),
    resetPostID: (idPost) => set(state => ({ postID: null })),
}))

export default postStore