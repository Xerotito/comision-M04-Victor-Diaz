export default function Comments({user}) {

    return (
        <div className='flex p-4 items-center'>
            <div className="avatar mr-2 hidden md:block">
                <div className="w-20 rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <form action="" className='grid w-full'>
                <textarea name='comment' className="textarea textarea-accent w-full mb-2" placeholder="Escribe un comentario..."></textarea>
                <button className="btn btn-sm btn-outline btn-info sm:w-fit justify-self-end">Enviar comentario</button>
            </form>
        </div>
    )
}