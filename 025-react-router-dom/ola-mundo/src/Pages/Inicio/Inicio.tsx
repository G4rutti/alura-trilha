import styled from "styled-components"

import posts from "../../json/posts.json"
import PostCard from "../../Components/PostCard/PostCard"

const ListaEstilizada = styled.ul`
    padding: 0 6vw 3.625rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 1100px) {
        margin-top: 0;
        padding: 2rem 1.5rem 3.625rem;
    }

    @media (max-width: 744px) {
        padding: 2rem 1rem 3rem;
    }    
`

const Inicio = () => {
    return (
        <>
            <ListaEstilizada>
                {posts && posts?.map((post) => (
                    <PostCard 
                        post = {post}
                    />
                ))}
            </ListaEstilizada>
        </>
    )
}

export default Inicio