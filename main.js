function setBlogger() {
    document.querySelector('#demo').innerHTML = 'Carregando, tenha calma';
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function(resultado){
            return resultado.json()
        })
        .then(function(json){
            openBlog(json)
        })
        .catch(function(error){
            console.log('Vixe, deu ruim. Volta e analiza o código')
        })
}

function openBlog(lista) {
    let html = '';

    for(let i in lista) {
        html += '<h2>'+lista[i].title+'</h2>';
        html += lista[i].body+ '<br/>';
        html += '<hr/>'
    }

    document.querySelector('#demo').innerHTML = html;
}