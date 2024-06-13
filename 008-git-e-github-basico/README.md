# Módulo 8 - Git e GitHub

## Parte 1 - Compartilhando projetos: 
### 1. Iniciando o git em um repositório existente:
1. `git init`;
### 2. Conectar arquivo local com repositório GitHub:
1. `git add .` - O "." serve para adicionar todos os arquivos existente na pasta que você deu o `git init`;
2. `git commit -m "Mensagem do commit"`;
3. `git branch -M main`;
4. `git remote add origin LinkProjeto`;
5. `git push -u origin main`

## Parte 2 - Colaborando em projetos: 
### 1. Clonando um repositório: 
1. `git clone UrlDoProjeto`;
### 2. Realizando um commit:
. `git status` = Serve para ver o que você mudou no código em relação ao código clonado.
1. `git add .`;
2. `git commit -m "Mensagem do commit"`;
. `git log` = Serve para ver os commits que os usuários fizeram.
### 3. Enviando o commit:
. `git remote` = Serve para listar os repositórios existentes;
1. `git push <repositorio> <branch>`;
### 4. Atualizando o código:
1. `git pull <repositório que desejo atualizar> <branch>`;

## Parte 3 - Git e GitHub na IDE
Aqui foi utilizado apenas na IDE, logo, não tem código explicito.

## Parte 4 - Voltando no tempo:
### 1. Desfazendo um commit: 
1. `git log`;
2. `git revert <id do commit>`;
3. `git pull <repositório que desejo atualizar> <branch>`;

### 2. Resetar(apagar) um commit:
1. `git log`;
2. `git reset --hard <id do commit DA VERSÃO QUE QUEREMOS VOLTAR>`;

### 3. Alterando dados do último commit:
1. `git log`;
2. `git commit --amend -m "<Nova mensagem>"`;

.**Revert**: 
basicamente um ctrl+z, imagina que você fez o commit X e percebeu que quebrou a aplicação, na maior urgência você precisa voltar como estava antes, você faz um revert do commit X, porém as vezes que usei, ele deixa isso explicito, gerando um novo commit quanto a esse revert, portanto ele constará em seu histórico.
.**Reset**:
A ideia dele é exatamente essa, retornar para um estado anterior, porém diferente do revert, ele não gera commit, ele desfaz tudo mesmo, nunca usei ele enviando para o servidor (nem sei se rola), mas as vezes que commitei na master por engano, fiz o reset informando o último commit válido da master, com isso ele restaurou a master e simplesmente eliminou meus commits incorretos


## Parte 5 - Mais recursos:
### 1. README.md do repositório: 
Serve para documentar o projeto.
### 2. .gitignore:
Serve para descartar arquivos que estão na pasta para não ir para o repositório github.
