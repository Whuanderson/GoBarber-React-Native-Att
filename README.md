# GoBarber • Mobile

<p align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/GoBarber-React-Native-Att/refs/heads/main/src/assets/logo%402x.png" alt="GoBarber logo" height="120">
</p>

<p align="center">
  <img alt="Top language" src="https://img.shields.io/github/languages/top/Whuanderson/GoBarber-React-Native-Att">
  <a href="https://www.linkedin.com/in/whuanderson-de-sousa-porto-marinho-a07204216/" target="_blank">
    <img alt="Made by Whuanderson" src="https://img.shields.io/badge/Made%20by-Whuanderson-blue">
  </a>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-blue">
</p>

---

App em **React Native** (TypeScript) que permite aos clientes agendar serviços com barbeiros. Inspirado no projeto **GoBarber** do Bootcamp Rocketseat.

## 📸 Preview

<div align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/GoBarber-React-Native-Att/refs/heads/main/.github/capa.png" alt="Capa do app" />
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/GoBarber-React-Native-Att/refs/heads/main/.github/2.jpg" alt="Tela 2" />
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/GoBarber-React-Native-Att/refs/heads/main/.github/1.jpg" alt="Tela 1" />
</div>



## ✨ Funcionalidades

- **Cadastro e autenticação** de usuários  
- **Listagem de prestadores** (barbeiros)  
- **Seleção de dia e horário** disponíveis  
- **Agendamento** de serviços  
- **Visualização** de compromissos futuros  
- **Atualização de perfil** (nome e avatar)  
- **Persistência** da sessão com *AsyncStorage*  

## 🛠️ Stack & Principais Dependências

- React Native 0.63 / Expo 42  
- TypeScript  
- Styled‑Components  
- React Navigation 5 (stack & tabs)  
- React Hook Form + Yup  
- Axios  
- Async‑Storage  
- React Native Reanimated & Gesture Handler  

## 🚀 Executando localmente

```bash
# clone o repositório
git clone https://github.com/Whuanderson/GoBarber-React-Native-Att.git
cd GoBarber-React-Native-Att

# instale as dependências
yarn          # ou npm install
```

### Android

```bash
yarn android
```

### iOS

```bash
yarn ios
```

### Expo

```bash
# navegação web
yarn web
# abre o Expo DevTools
expo start
```

> A aplicação consome a **API GoBarber**.  
> Defina a variável `API_URL` em `src/services/api.ts` ou em um arquivo `.env`.

## 📁 Estrutura de Pastas (resumida)

```
src
 ├─ assets          # ícones, fontes, imagens
 ├─ components      # componentes reutilizáveis
 ├─ hooks           # contextos (auth, theme…)
 ├─ routes          # navegação
 ├─ screens         # telas
 └─ services        # configuração de API
```

## 🤝 Contribuindo

1. Faça um **fork** do projeto  
2. Crie sua _branch_: `git checkout -b minha-feature`  
3. Commit: `git commit -m 'feat: Minha nova feature'`  
4. Push: `git push origin minha-feature`  
5. Abra um **Pull Request**  

## 📄 Licença

Distribuído sob licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para detalhes.

---

<p align="center">
  Feito por <a href="https://github.com/Whuanderson">Whuanderson Marinho</a>
</p>
