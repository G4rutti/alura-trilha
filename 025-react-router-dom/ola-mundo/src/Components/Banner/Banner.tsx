import styled from "styled-components"
import CirculoColorido from "../../assets/circulo_colorido.png"
import MinhaFoto from "../../assets/minha_foto.png"

const BannerEstilizado = styled.div`
    padding: 3rem 7.5rem 6.25rem;
    background-color: var(--azul-escuro);
    color: var(--branco);
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1100px) {    
        .banner {
            padding: 3.5rem 1.5rem;
        }
    }

    @media (max-width: 744px) {
        padding: 2rem 1rem;
        display: block;
    }
`

const Apresentacao = styled.div`
    h1{
        font-family: var(--fonte-secundaria);
        font-size: 4rem;
        margin-top: 4.875rem;
        margin-bottom: 2rem;
        @media (max-width: 1100px) {    
            margin-top: 0;
            margin-bottom: 1.5rem;
        }
        @media (max-width: 744px) {
            margin-bottom: 2rem;

        }
        
    }

    p{
        font-family: var(--fonte-secundaria);
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 2rem;
        @media (max-width: 1100px) {    
            margin-bottom: 1.5rem;
        }
        @media (max-width: 744px) {
            margin-bottom: 2rem;

        }
        
    }

`

const Imagens = styled.div`
    position: relative;
    height: 406px;

    @media (max-width: 1100px) {    
        height: 338px;
    }
    @media (max-width: 744px) {
        height: 307px;

    }

    .circuloColorido {
        position: absolute;
        right: 7vw;
        bottom: 2.2vw;
        width: 25vw;
        @media (max-width: 1100px) {    
            width: 25vw;
        }
        @media (max-width: 744px) {
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 240px;
            transform: translate(-1.5rem, 0px);
        }
    }

    .minhaFoto {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 18vw;
        border-radius: 50%;
        @media (max-width: 1100px) {    
            right: 10vw;
            width: 35vw; 
               
        }
        @media (max-width: 744px) {
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 170px;
            transform: translate(5rem, 0px);
        }
    }

`


const Banner = () => {
    return (
        <BannerEstilizado>
            <Apresentacao>
                <h1>Olá, mundo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, commodi ullam temporibus doloremque voluptatem nemo fugiat incidunt sit accusantium. Nam perferendis sit autem facere eum architecto laudantium placeat nemo natus.</p>
            </Apresentacao>
            <Imagens>
                <img className="circuloColorido" src={CirculoColorido}/>
                <img className="minhaFoto" src={MinhaFoto}/>
            </Imagens>
        </BannerEstilizado>
    )
}

export default Banner