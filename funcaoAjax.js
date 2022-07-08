document.querySelectorAll('a').forEach(link =>{
  link.onclick = function(e){
    e.preventDefault()

    const conteudo = document.getElementById('conteudo')
    fetch(link.href)
      .then(resp => resp.text())
      .then(html => conteudo.innerHTML = html)
  }
})