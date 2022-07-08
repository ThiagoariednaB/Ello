const items = [
  {
    id: 0,
    nome: 'CAIXA DE SOM JBL GO2',
    preco: '23,90',
    img: '/img/JBL1.jpg',
    quantidade: 0
  },
  {
    id: 1,
    nome: 'MOUSE SEM FIO HMASTON E-1700',
    preco: '23,90',
    img: '/img/MOUSE1.jpg',
    quantidade: 0
  },
  {
    id: 2,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 3,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 4,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 5,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 6,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 7,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 8,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 9,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 10,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 11,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 12,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 13,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 12,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 14,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  },
  {
    id: 15,
    nome: 'FONE DE OUVIDO JBL TUNE 510BT',
    preco: '23,90',
    img: '/img/FONE1.jpg',
    quantidade: 0
  }
]

inicializarLoja = () => {
  let containerProdutos = document.getElementById('produtos')
  items.map(val => {
    containerProdutos.innerHTML +=
      `
      <div class="produto-single">
      <img src="` + val.img + `" />
      <p>` + val.nome + `</p>
      <p id="preco"> R$  ` + val.preco + `</p>
      <a key="` + val.id + `" href="#" id="adicionar">Adicionar ao Carrinho!</a>
      <r key="` + val.id + `" href="#" id="remover">Remover do Carrinho!</r>
      </div>
    `
  })
}

inicializarLoja()

atualizarCarrinho = () => {
  let containerCarrinho = document.getElementById('itens')
  containerCarrinho.innerHTML = ''
  items.map(val => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
      <p>` +
        val.nome +
        ` | quantidade: ` +
        val.quantidade +
        ` | R$: ` +
        val.preco +
        `</p>
      <hr>
      
      `
    }
  })
}

let link = document.getElementsByTagName('a')

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    items[key].quantidade++
    atualizarCarrinho()
    return false
  })
}

let linkr = document.getElementsByTagName('r')

for (let i = 0; i < linkr.length; i++) {
  linkr[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    items[key]
    if (items[key].quantidade <= 0) {
      return false
    } else {
      items[key].quantidade--
      atualizarCarrinho()
      alert('Item removido')
    }
  })
}
