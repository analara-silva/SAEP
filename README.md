# 🧪 SAEP — Sistema de Avaliação e Exibição de Produtos Químicos

> 🚀 Projeto prático criado para testar meus conhecimentos em **EJS**, **Express** e **MySQL2**.  
> O objetivo é exibir produtos químicos em uma interface simples e organizada.

---

## 💡 Sobre o projeto

O **SAEP** é um projeto de teste prático, onde a tela inicial exibe uma tabela com produtos químicos cadastrados. Cada produto contém:

- **Nome**
- **Composição Química**
- **Fragrância**
- **Volume** (valor + unidade)
- **Data de Validade**
- **Lote de Fabricação**

A tabela é renderizada dinamicamente usando **EJS**, com dados provenientes do **MySQL2**, processados pelo **Express**.

---

## 🗄️ Banco de dados

O banco de dados do projeto contém duas tabelas principais:

### Tabela `funcionarios`
| Coluna         | Tipo        | Observações                  |
|----------------|------------|-----------------------------|
| `id_funcionario` | INT       | Chave primária, auto-increment |
| `nome`           | VARCHAR   | Nome do funcionário         |
| `senha`          | VARCHAR   | Senha do funcionário        |

### Tabela `produtos`
| Coluna               | Tipo        | Observações                     |
|---------------------|------------|--------------------------------|
| `id_produto`         | INT       | Chave primária, auto-increment |
| `nome`               | VARCHAR   | Nome do produto químico        |
| `composicao_quimica` | VARCHAR   | Composição química             |
| `fragrancia`         | VARCHAR   | Fragrância do produto          |
| `volume_valor`       | DECIMAL   | Valor do volume                |
| `volume_unidade`     | VARCHAR   | Unidade do volume (ml, L, etc.) |
| `data_validade`      | DATE      | Data de validade               |
| `lote_fabricacao`    | VARCHAR   | Número do lote de fabricação   |

---

## 🧰 Tecnologias utilizadas

<p align="center">
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
<img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black" />
</p>

---

## 🧠 Funcionalidades

✅ Conexão com banco de dados **MySQL2**  
✅ Renderização dinâmica de dados com **EJS**  
✅ Estrutura organizada com **Express.js**  
✅ Tabela de produtos químicos interativa  
✅ Base para testes práticos e aprendizado

---

## ⚙️ Como executar

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/saep.git
