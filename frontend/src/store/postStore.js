/**
 * Estado global almacena los datos y CRUD de los posteos, esto ayuda a no mostrar directamente información de la BD, a no realizar peticiones de mas,
 * y a poder utilizar esta info de cualquier lugar si la aplicación escala
 * Almacena los post generales y un lastPost y nextPosts para mostrar en las tarjetas del index
 */
import { create } from 'zustand'

const postStore = create((set) => ({
    allPosts: null,
    posts   : null,
    setPosts: (data) => set((state) => ({ allPosts: data, posts:{ lastPost: data.pop(), nextPosts: data.reverse() } })),
}))

export default postStore