/**
 * CustomHooks que toma el id del post por params, hace el request al backend y  retorna la data en 
 *  un estado para su renderizado
 */

import { useEffect, useState } from 'react'
import requestApi from '../api/requestApi'


//POST POR ID
export function useGetPostID(postID) {
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await requestApi.get(`/post/${postID}`)
                setPost(data)
            } catch (error) {
                console.error('Error fetching post:', error)
            }
        }
        fetchData()
    }, [postID])

    return { post }
}

//TODOS LOS POSTS
export function useGetAllPost(){
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await requestApi.get('/post/getAll')
                setPosts({
                    lastPost : data.pop(),
                    nextPosts: data.reverse(),
                })
            } catch (err) {
                console.error('Error fetching post:', error)
            }
        }
        fetchData()
    }, [])



    return { posts }
}