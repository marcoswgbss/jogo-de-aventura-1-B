const avanca = document.querySelectorAll('.btn-próximo');

avanca.forEach(button -> {
    button.AddEventListener('click', function(){
        const atual = document.querySelectorAll('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})