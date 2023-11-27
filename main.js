document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const nome = document.querySelector('#nome');
    const usuario = document.querySelector('#usuario');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/lumiotto')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        nome.innerText = json.name;
        usuario.innerText = json.login;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.following;
        seguindo.innerText = json.followers;
        link.href = json.html_url;
    })
})