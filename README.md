<h1 align="center"> BUSCA CEP </h1>

<p align="center">
    Trata-se de um projeto destinado a estudos simples de utilização de API.<br>
    Onde em um ambiente de pesquisa pode ser fornecido:<br>
    * Um endereço através de um CEP informado<br>
    * Um CEP..., de um endereço
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Layout" src=".github/preview.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- Git e Github
- API

## 💻 Projeto

<p>
    1° - através de input será tratada a as informações e retorno dos dados<br>
    2° - há um formulário para preenchimento de endereço:<br>
    .. se o usuário souber o CEP, bastará preenche-lo para retornar o endereço, faltando apenas complementos.<br>
    .. e se o usuário não souber, com o preenchimento do endereço, o cep será preenchido automaticamente.
</p>

<p>
    **EX URL API:<br>
    1° -> https://viacep.com.br/ws/28633470/json/ <br>

    2° -> https://viacep.com.br/ws/rj/nova%20friburgo/natividade%20c%C3%A2ndida%20da%20silva/json
<p>
<p>
    No 1° exemplo basta informar a numeração do cep.<br>
    No 2° é informado, o UF, nome da cidade e nome da rua separados por '/'.<br>
    *Observado que dentro da URL o dados foram colocados com espaço manualmente, e foram manipulados para a correta informação
</p>

<p>
    ** Retorno da API:<br>

1° pesquisando endereço pelo CEP
    {
        "cep": "28633-470",
        "logradouro": "Rua Natividade Cândida da Silva",
        "complemento": "",
        "bairro": "Conselheiro Paulino",
        "localidade": "Nova Friburgo",
        "uf": "RJ",
        "ibge": "3303401",
        "gia": "",
        "ddd": "22",
        "siafi": "5867"
    }

2° pesquisando CEP pelo endereço 
    > aqui o conteudo vem dentro de um array(data[0].cep)
     [
        {
            "cep": "28633-470",
            "logradouro": "Rua Natividade Cândida da Silva",
            "complemento": "",
            "bairro": "Conselheiro Paulino",
            "localidade": "Nova Friburgo",
            "uf": "RJ",
            "ibge": "3303401",
            "gia": "",
            "ddd": "22",
            "siafi": "5867"
        }
    ]
</p>

[Visite o projeto online](https://celo-gomes.github.io/buscacep)

## 🔖 Layout

O Layout do projeto é de deselvolvimento próprio, usando de simplicidade, visando a mecânica e utilização.<br>

## :memo: Considerações

Esse projeto está sob a licença MIT.<br>

---

Feito com ♥ by M. Gomes :wave: [Visite-nos no Github](https://github.com/celo-gomes)
