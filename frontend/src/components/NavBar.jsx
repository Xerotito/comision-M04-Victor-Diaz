import { Avatar } from './buttons';

export default function NavBar({ user }) {
    let { username, avatarURL } = user
    if (!avatarURL) avatarURL = 'default_avatar.png'

    return (
        <nav className='navbar flex justify-center'>
            <div className='nav-container w-[98%] border border-gray-400 rounded-md shadow-lg relative'>
                <Avatar avatar={avatarURL} />
                <div className='flex items-center w-full'>
                    <h2 className='hidden sm:btn sm:btn-ghost text-base sm:text-xl ml-14 pointer-events-none '>{username}</h2>
                    <ul className='
                    menu menu-xs md:menu-md menu-horizontal 
                    w-full bg-base-200 rounded-box font-medium
                    flex justify-center
                    '>
                        <li><a>Posts</a></li>
                        <li><a>Mis posts</a></li>
                        <li><a>Comentarios</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


{/*                 <h2 className='btn btn-ghost text-xl pointer-events-none'>Bienvenido</h2>*/}