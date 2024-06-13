# Módulo 5 - HTML e CSS mobile First:

## Header e Flexbox:
### Passo a passo de como fazer um navbar mobile:
1. Utilizar tags semanticas para o Header:
`<header></header>`
2. Utilizar um input para abrir e fechar informações no menu:
```
        <div class="container">
            <input type="checkbox" id="menu" class="container__botao">
            <label for="menu">
                <span class="cabecalho__menu-hamburguer container__imagem"></span>
            </label>
            <ul class="lista-menu">
                <li class="lista-menu__titulo">Categorias</li>
                <li class="lista-menu__item">
                    <a href="#" class="lista-menu__link">Programação</a>
                </li>
                <li class="lista-menu__item">
                    <a href="#" class="lista-menu__link">Front-end</a>
                </li>
                <li class="lista-menu__item">
                    <a href="#" class="lista-menu__link">Infraestrutura</a>
                </li>
                <li class="lista-menu__item">
                    <a href="#" class="lista-menu__link">Business</a>
                </li>
                <li class="lista-menu__item">
                    <a href="#" class="lista-menu__link">Design & UX</a>
                </li>
            </ul>
            <img src="assets/img/Logo.svg" alt="Logo da AluraBooks" class="container__imagem">
        </div>
```
3. Acrescentar isso no CSS:
```
        .lista-menu{
            display: none;
            position: absolute;
            top: 100%;
            width: 60vw;
        }

        .container__botao:checked ~ .lista-menu{
            display: block;
        }
```
## Integrando o Carrossel com Swiper JS: