import {LastPost,Post} from '../components/posts/';

export default function Posteos() {
    return (
        <section className='grid bg-base-200 '>
            <div className='posts sub-container grid'>
                <div className='justify-self-center'>
                    <LastPost />
                </div>
                <div className='
                grid grid-cols-1 md:grid-cols-2 justify-self-center
                mt-10 gap-2
                '>
                    <Post />
                    <Post />
                </div>
            </div>
        </section>
    )
}
