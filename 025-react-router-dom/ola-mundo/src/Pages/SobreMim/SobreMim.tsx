import styled from "styled-components"
import PostModelo from "../../Components/PostModelo/PostModelo"
import fotoCapa from "../../assets/sobre_mim_capa.png"
import fotoSobreMim from "../../assets/sobre_mim_foto.png"

const DivEstilizada = styled.div`
  img {
    margin-bottom: .5rem;
    margin-left: 1.5rem;
    width: 40vw;
    float: right;
}

h3 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

p {
    text-align: justify;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
}

@media (max-width: 1100px) {
    img {
        float: none;
        display: block;
        margin: 0 auto 2rem;
        width: 70vw;
    }

    p {
        margin-bottom: 2rem;
    }
}

@media (max-width: 744px) {
    img {
        width: 100%;
    }

    h3 {
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 1.5rem;
    }

    .paragrafo {
        font-size: 1rem;
        line-height: 1.75rem;
    }
}
`


const SobreMim = () => {
  return (
    <PostModelo
      FotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <DivEstilizada>
        <h3 >
          Olá, eu sou o Antônio!
        </h3>

        <img
          src={fotoSobreMim}
          alt="Foto do Antônio Evaldo sorrindo"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores rerum consequuntur. Perspiciatis, officiis. Tempora, odio. Quis inventore maxime cum facilis, aspernatur eveniet, neque exercitationem odio modi tempora tempore esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident eligendi perspiciatis est at sunt excepturi. Accusantium unde omnis consequatur minima, ad hic illum perferendis suscipit eligendi, ipsum voluptatum. Reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsam deserunt aperiam ab laboriosam nesciunt odio ipsum temporibus ratione officia aliquid ut tempora alias hic atque illo, quasi ad sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe nobis quis nisi ipsam dolorum ab rerum numquam obcaecati velit unde quod, odio ullam? Obcaecati facere voluptatem nulla voluptatibus eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat facere magni? Error eos vero voluptates? Porro eum ducimus enim dolor voluptatibus consequuntur perferendis voluptatem, magni voluptate possimus quas maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae fugit magnam incidunt, quod commodi laudantium ab illum quasi maiores a provident? Illum voluptatum obcaecati, quam explicabo repudiandae perspiciatis expedita.
        </p>
      </DivEstilizada>


    </PostModelo>
  )
}

export default SobreMim