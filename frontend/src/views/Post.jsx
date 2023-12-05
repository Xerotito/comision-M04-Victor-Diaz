import { useParams } from 'react-router-dom';


export default function Post() {

    const { postID } = useParams()    



  return (
    <h2>Soy un post por id</h2>
  )
}