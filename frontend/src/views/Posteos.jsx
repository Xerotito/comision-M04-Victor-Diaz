import { Alert } from '../components/alerts'
import { alertStore } from '../store'
import { Loader } from '../components'
import { LastPost } from '../components/posts'
import { useGetPosts } from '../hooks'


//No se puede realizar una llamada async directamente en un useEffect,esta es una de las  maneras de hacerlo

export default function Posteos() {

    //Manejo del componente alert
    const {alert, message} = alertStore()
////////////////////////////////////////////////////////////////////////////////////

    const { posts } = useGetPosts()



    return (
        <section className='grid bg-base-200 '>
            <div className='alert-container w-[80%] justify-self-center absolute z-10'>
                {alert && <Alert message={message} />}
            </div>
            { posts === null ? <Loader /> : <Posts posts={posts} /> }
        </section>
    )
}

export const Posts = ({posts}) => {
    const {lastPost} = posts

    return (
        <>
            <div className='posts sub-container grid'>
                <div className='justify-self-center mt-2'>
                    <LastPost lastPost={lastPost} />
                </div>
                <div className='
                grid grid-cols-1 md:grid-cols-2 justify-self-center
                mt-10 gap-2
                '
                >
                    {/* {posts.map(post => <Post key={post._id} post={post}/>)} */}
                </div>
            </div>
        </>
    )
}