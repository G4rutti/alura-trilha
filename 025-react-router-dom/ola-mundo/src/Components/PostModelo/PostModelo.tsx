import styled from "styled-components";

const PostModeloContainer = styled.article`
    color: var(--cor-fonte-post);
    position: relative;

    h2, .fotoCapa{
        height: 204px;
    }

    .fotoCapa{
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.3;
        position: absolute;
        top: 0;
        z-index: -1;
    }

    h2{
        font-family: var(--fonte-secundaria);
        padding: 0 7.5rem;
        font-size: 4rem;
        display: flex;
        align-items: center;
    }

    .postConteudoContainer {
    padding: 2.5rem 7.5rem 4.5rem;
    }

    @media (max-width: 744px) {
        .postConteudoContainer {
            padding: 2rem 1.5rem 1.5rem;
        }
    }

    @media (max-width: 744px) {

        .fotoCapa,
        h2 {
            height: 104px;
        }

        h2 {
            padding: 0 1rem;
            font-size: 2rem;
        }

        .postConteudoContainer {
            padding: 2rem 1rem 1.5rem;
        }
    }
`

interface PostModelo {
    FotoCapa: string;
    titulo: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
}

const PostModelo = ({titulo, children, FotoCapa}: PostModelo) => {
  return (
    <PostModeloContainer>
      <div className="fotoCapa" style={{backgroundImage: `url(${FotoCapa})`}} />
      <h2>{titulo}</h2>
      <div className='postConteudoContainer '>{children}</div>
    </PostModeloContainer>
  )
}

export default PostModelo