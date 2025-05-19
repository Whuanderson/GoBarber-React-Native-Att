
<h1 align="center"> 
  GoBarber • Mobile   
</h1>

<div align="center">
<img src="https://raw.githubusercontent.com/Whuanderson/GoBarber-React-Native-Att/refs/heads/main/src/assets/logo%402x.png">
</div>

---

<div align="center">
  <img alt="Top language" src="https://img.shields.io/github/languages/top/Whuanderson/GoBarber-React-Native-Att">
  <a href="https://www.linkedin.com/in/whuanderson-de-sousa-porto-marinho-a07204216/">
    <img alt="Made by" src="https://img.shields.io/badge/Made%20by-Whuanderson-blue">
  </a>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-blue">
</div>

<p align="center">
  App mobile em React&nbsp;Native (TypeScript) que permite aos clientes agendar serviços com barbeiros disponíveis, inspirado no projeto GoBarber do Bootcamp Rocketseat.
</p>

## 📸 Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/GoBarber-React-Native-Att/refs/heads/main/.github/capa.png" width="850"> 
  <img src="https://raw.githubusercontent.com/Whuanderson/GoBarber-React-Native-Att/refs/heads/main/.github/2.jpg" width="850"> 
  <img src="https://raw.githubusercontent.com/Whuanderson/GoBarber-React-Native-Att/refs/heads/main/.github/1.jpg" width="850"> 
</p>

## ✨ Funcionalidades

- Criação e autenticação de conta
- Listagem de prestadores (barbeiros)
- Seleção de dia e horário disponíveis
- Agendamento de serviço
- Exibição de compromissos futuros
- Atualização de perfil e avatar
- Armazenamento offline de sessão com AsyncStorage

## 🛠️ Stack & Principais Dependências

- **React Native 0.63 / Expo 42**
- **TypeScript**
- **Styled‑Components** para estilização
- **React Navigation 5** (stack & tabs)
- **React Hook Form + Yup** para formulários/validação
- **Axios** para comunicação HTTP
- **Async‑Storage** para persistência local
- **React Native Reanimated & Gesture Handler** para animações e gestos

## 🚀 Executando localmente

> Estes comandos assumem yarn, mas você pode usar npm se preferir.

```bash
# clone o repositório
git clone https://github.com/Whuanderson/GoBarber-React-Native-Att.git
cd GoBarber-React-Native-Att

# instale as dependências
yarn

# Android
yarn android

# iOS
yarn ios

# ou, caso esteja usando Expo
yarn web           # para testar no navegador
expo start         # abre o Expo DevTools
```

Lembre‑se de que a aplicação consome a **API GoBarber**. Configure a URL base em `src/services/api.ts` ou crie um arquivo `.env` com `API_URL` apontando para sua instância backend.

## 📁 Estrutura de Pastas (resumida)

```
src
 ├─ components      # componentes reutilizáveis
 ├─ screens         # telas (pages)
 ├─ routes          # navegação
 ├─ hooks           # contextos (auth, theme …)
 ├─ services        # configuração de API
 └─ assets          # ícones, fontes, imagens
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie sua branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: Minha nova feature'`
4. Push na branch: `git push origin minha-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Feito por <a href="https://github.com/Whuanderson">Whuanderson</a>
</div>
