# 🧪 SAEP — Sistema de Avaliação e Exibição de Produtos Químicos

> 🚀 Projeto prático desenvolvido para testar meus conhecimentos em **EJS**, **Express** e **MySQL2**, criando uma aplicação que lista produtos químicos em uma tabela dinâmica.

---

## 💡 Sobre o projeto

O **SAEP** foi criado como um **teste prático** para consolidar meus aprendizados em **Node.js**, **EJS**, **Express** e **MySQL2**.  
O objetivo é exibir informações de produtos químicos cadastrados no banco de dados em uma interface organizada.

Na tela principal, os produtos são listados com as seguintes informações:

- **Nome**
- **Composição Química**
- **Fragrância**
- **Volume** (valor + unidade)
- **Data de Validade**
- **Lote de Fabricação**

Esses dados são renderizados dinamicamente usando **EJS** e alimentados pelo **MySQL2** via **Express**.

---

## 🗄️ Banco de dados

O projeto utiliza o MySQL e criará duas tabelas principais:

### Tabela `funcionarios`
| Coluna         | Tipo        | Observações                |
|----------------|------------|---------------------------|
| `id_funcionario` | INT       | Chave primária, auto-increment |
| `nome`           | VARCHAR   | Nome do funcionário       |
| `senha`          | VARCHAR   | Senha do funcionário      |

### Tabela `produtos`
| Coluna               | Tipo        | Observações                |
|---------------------|------------|---------------------------|
| `id_produto`         | INT       | Chave primária, auto-increment |
| `nome`               | VARCHAR   | Nome do produto químico   |
| `composicao_quimica` | VARCHAR   | Composição química        |
| `fragrancia`         | VARCHAR   | Fragrância do produto     |
| `volume_valor`       | DECIMAL   | Valor do volume           |
| `volume_unidade`     | VARCHAR   | Unidade do volume (ml, L, etc.) |
| `data_validade`      | DATE      | Data de validade          |
| `lote_fabricacao`    | VARCHAR   | Número do lote de fabricação |

> Esses campos correspondem diretamente à tabela exibida na interface EJS.

---

## 🧰 Tecnologias utilizadas

| Tecnologia | Ícone |
|-------------|--------|
| **Node.js** | ![Node.js](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg) |
| **Express** | ![Express](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg) |
| **EJS** | ![EJS](https://upload.wikimedia.org/wikipedia/commons/8/85/Ejs_logo.png) |
| **MySQL2** | ![MySQL](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg) |

---

## ⚙️ Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/saep.git
