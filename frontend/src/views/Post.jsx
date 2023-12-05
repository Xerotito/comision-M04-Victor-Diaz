import { useParams } from 'react-router-dom';

export default function Post() {

    const { postId } = useParams();

  return (
    <h2>Soy un post por id:{postId}</h2>
  )
}