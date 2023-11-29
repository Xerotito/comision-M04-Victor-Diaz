export default function Avatar({ avatar}) {
    
    return (
        <>
            <button className='avatar absolute left-[-1rem]'>
                <div className='w-14 sm:w-20 rounded-full border-2'>
                    <img src={avatar}  />
                </div>
            </button>
        </>
    )
}
