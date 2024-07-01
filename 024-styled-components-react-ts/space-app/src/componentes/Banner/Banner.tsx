import styled from "styled-components"

import imageBanner from "../../assets/banner.png"
import Titulo from "./Titulo/Titulo"

const BannerEstilizado = styled.figure`

    background-image: url(${imageBanner});
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;

`


const Banner = () => {
    return (
        <BannerEstilizado>
            <Titulo />
        </BannerEstilizado>
    )
}

export default Banner