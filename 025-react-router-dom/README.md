# React-Router-DOM

## 1. Estrutura básica do React Router: 
```
<BrowserRouter>
    <Routes>
        <Route path='/' element={}/>
    </Routes>
</BrowserRouter>
```

## 2. Página de 404:

```
<Route path='*' element={<div>Página não encontrada</div>}/>
```

##  3. Atributo Link:
```
<Link to="/" className="link">Início</Link>
```

Ele substitui a tag <a> porque ela atualiza o site, já o Link, não.

## 4. useLocation():

Serve para saber os dados da url, como por exemplo o caminho e etc.

## 5. Atributo NavLink:

```
<NavLink to="/"
        className={({ isActive }) => isActive ? "link linkDestacado" : "link"}
    >Início
</NavLink>
```

Mesma coisa que o Link, porém é específico para NavBar, e tem atributos como o isActive, que fazem com que os useLocation e Link fiquem inutilizados no NavBar.

## 6. Rotas Aninhadas: 

Serve para integrar varios elementos em comuns em certas páginas.

### App.tsx:
```
<Route path='/' element={<PaginaPadrao/>}>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
</Route>
```

### PaginaPadrao.tsx:
```
    <>
        <Banner />
        <Outlet />
    </>
```

A tag <Outlet /> serve para diferenciar o conteudo das diferentes rotas, ou seja, vai ter a tag banner em comum, e o outlet é o que vai mudar de cada página.


## 7. Rotas dinâmicas: 

`<Route path='posts/:id' element={<Post/>}/>`
:id serve para captar o dado que ta vindo para dinamizar o processo de visualização de dados;
o método `useParams()` serve para fazer isso.

## 8. useNavigate():

Serve para navegar durante a página, um exemplo abaixo du um botao que usa o `useNavigate()` para voltar para a página anterior:
```
    const navegar = useNavigate();
    <div onClick={() => navegar(-1)}>
        <button>Voltar</button>
    </div>
```