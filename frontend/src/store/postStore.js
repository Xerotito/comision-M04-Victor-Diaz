/**
 * Estado global que contiene el id del post cuando es seleccionado con el botón de eliminar o editar, ya que con
 * algunos elementos como el dialog del modal no sirve pasar por props
 */

import { create } from 'zustand'

const postStore = create((set) => ({
    postID     : null,
    isDeletePost : false,
    setPostID  : (idPost) => set(state => ({ postID: idPost })),
    resetPostID: (idPost) => set(state => ({ postID: null })),
    setDelete  : () => set(state => ({ isDeletePost: true })),

}))

export default postStore