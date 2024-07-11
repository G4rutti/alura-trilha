# Otimizando performance:

## 1. React.memo:
a função memo faz a renderização do componente apenas quando precisar;
`export default React.memo(Item)`

### Usos recomendados: 
1. Renderizar lista;
2. Navegação condicional entre telas;

## 2. useMemo:
Este hook tem a lógica igual ao `useEffect`, porem tem a mesma funcionalidade do Memo, porem dentro do código;