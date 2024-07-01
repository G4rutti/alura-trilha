import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Navegacao = styled.nav`
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 3rem;

    .link {
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: var(--cor-fonte-principal);
    }

    .linkDestacado{
        text-decoration: underline;
    }

    
    @media (max-width: 744px) {
        height: 72px;
    }
`

const NavBar = () => {

    return (
        <header>
            <Navegacao>
                <NavLink to="/"
                    className={({ isActive }) => isActive ? "link linkDestacado" : "link"}
                >Início
                </NavLink>

                <NavLink to="/sobremim"
                    className={({ isActive }) => isActive ? "link linkDestacado" : "link"}
                >Sobre Mim
                </NavLink>
            </Navegacao>
        </header>
    )
}

export default NavBar
