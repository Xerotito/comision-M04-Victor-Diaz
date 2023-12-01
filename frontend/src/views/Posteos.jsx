import { useEffect, useState } from 'react';
import {LastPost,Post} from '../components/posts/';
import { alertStore } from '../store';
import { Alert } from '../components/alerts';
import requestApi from '../api/requestApi';


//No se puede realizar una llamada async directamente en un useEffect,esta es una de las  maneras de hacerlo

export default function Posteos() {
    const [posts, setPosts] = useState([])
    const [lastPost, setLastPost] = useState([])

    //Manejo del componente alert
    const {alert, message} = alertStore()

    //TODO: Meter esta lógica en un customHook o función
    //Obtenemos los post cortamos el último para mostrar en la tarjeta principal
    const getAllPost = async () => {
        try {
            const { data } = await requestApi.get('/post/getAll')
            setLastPost(data.pop())
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {getAllPost()}, [])

    return (
        <section className='grid bg-base-200 '>
            <div className='alert-container w-[80%] justify-self-center absolute z-10'>
                {alert && <Alert message={message}/>}
            </div>
            <div className='posts sub-container grid'>
                <div className='justify-self-center'>
                    <LastPost lastPost={lastPost}/>
                </div>
                <div className='
                grid grid-cols-1 md:grid-cols-2 justify-self-center
                mt-10 gap-2
                '>
                    {posts.map(post => <Post key={post._id} post={post}/>)}
                </div>
            </div>
        </section>
    )
}
