import { Link } from "react-router-dom";
import styled from "styled-components";

const PostEstilizado = styled.div`
    text-align: center;
    width: 282px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-bottom: 1.5rem;
    transition: transform .2s;

    &:hover{
        transform: translate(0, -1rem);
    }

    img{
        width: 100%;
    }

    h2{
        font-family: var(--fonte-secundaria);
        font-size: 1.25rem;
        color: var(--azul-escuro);
        line-height: 1.75rem;
        margin: 1.5rem 0 1.75rem;
    }

    button{
        display: inline-block;
        border-radius: 24px;
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
        line-height: 1.125rem;
        background-color: var(--azul-medio);
        color: var(--branco);
        border: 3px solid var(--azul-medio);
        cursor: pointer;
        transition: 0.2s
    }
    button:hover{
        border: 3px solid var(--azul-escuro);
    }

    @media (max-width: 1100px) {
        width: 336px;
        h2 {
        font-weight: 600;
        }
        button {
        padding: 0.6875rem 1.5rem;
        font-size: 1.375rem;
    }
}
`

interface Post {
    id: number;
    titulo: string;
    texto: string;
}

const PostCard = ({ post }: { post: Post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <PostEstilizado>
                <img src={`../../../public/${post.id}/capa.png`} alt="" />
                <h2>{post.titulo}</h2>
                <button>Ler</button>
            </PostEstilizado>
        </Link>
    )
}

export default PostCard