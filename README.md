# 🍰 Adoce

Sistema web de uma loja de doces desenvolvido em React, onde o cliente pode escolher produtos, adicionar ao carrinho e finalizar o pedido diretamente pelo WhatsApp.

<p align="center">
  <img src="./public/torti_cala.png" width="700" />
</p>

---

## 🚀 Funcionalidades

- 🧁 Listagem de produtos (doces)  
- ➕ Adição de itens ao carrinho  
- 🔢 Controle de quantidade (pequeno e grande)  
- 💰 Cálculo automático do valor total  
- 🛒 Persistência do carrinho com `localStorage`  
- 📲 Envio do pedido direto para o WhatsApp  
- 🎯 Aplicação de desconto automático (compras acima de 50 unidades)  

---

## 🖥️ Demonstração

O usuário pode:

- Escolher um doce  
- Selecionar a quantidade (Pequeno ou Grande)  
- Adicionar ao carrinho  
- Visualizar o resumo do pedido  
- Enviar o pedido via WhatsApp  

---

## 🛠️ Tecnologias Utilizadas

- React (Next.js)  
- Tailwind CSS  
- JavaScript / TypeScript  
- LocalStorage (persistência de dados)  

---

## 📦 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta
cd seu-repositorio

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

A aplicação estará disponível em:  
`http://localhost:3000`

---

## 📲 Fluxo do Pedido

1. O cliente monta o pedido no site  
2. O sistema gera automaticamente uma mensagem formatada  
3. O usuário é redirecionado para o WhatsApp da loja  
4. O cliente finaliza informando:
   - 📍 Endereço  
   - 💳 Forma de pagamento  

---

## 💡 Regras de Negócio

- Tortilete pequena: **R$ 1,00**  
- Tortilete grande: **R$ 3,00**  

**Desconto automático:**
- Compras com **50 ou mais unidades pequenas → R$ 0,90 cada**

---

## 📁 Estrutura do Projeto

```bash
src/
 ├── app/
 │   ├── page.tsx
 │   ├── pedido/
 │   ├── carrinho/
 │
 ├── components/
 │   ├── ProdutoCard
 │   ├── EnviarPedido
 │   ├── App.tsx
 │   ├── Footer.tsx
```

---

## 🎯 Objetivo do Projeto

Esse projeto foi desenvolvido com o objetivo de simular um sistema simples de pedidos online para pequenas lojas, facilitando o contato direto com o cliente via WhatsApp.

---

## 📌 Melhorias Futuras

- 🔐 Integração com banco de dados  
- 📊 Painel administrativo  
- 💳 Integração com pagamentos online  
- 📱 Melhorias na responsividade mobile  
- 🧾 Histórico de pedidos  

---

## 👨‍💻 Autor

Desenvolvido por **Vitor Hugo**