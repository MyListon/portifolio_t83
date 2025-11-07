// Selecionar a Seção About
const sobre = document.querySelector('#about')

// Selecionar o formulári
const formulario = document.querySelector('#formulario')

// Expressão Regular para validação de e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Função para buscar os dados no GitHub
async function getApiGithub() {
    try {
    
        // PASSO 1: Fazer uma Requisição GET para a API do GitHub
        const dadosPerfil = await fetch(
        'https://api.github.com/users/MyListon'
        );

        //PASSO 2: Converter a Resposta da API para JSON
        const perfilJson = await dadosPerfil.json();

        // PASSO 3: Criar o HTML/CSS com os dados do Perfil


        let = conteudo = ` 
        
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do Perfil do GitHub - ${perfilJson.name}"
                    animation class="float-animation"
                >
            </figure>

            <article class="about_content">
                <h2>Sobre Mim</h2>
                <p>Sou Myriam Perdiza, uma desenvolvedora Full Stack apaixonada por criar soluções digitais inovadoras. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos impactantes.</p>
                <p>Minha missão é transformar ideias em realidade através do código, entregando produtos de alta qualidade que atendam às necessidades dos usuários.</p>
                
                <div class="stats-wrapper">
                <div class="about_stats">
                    <a href="${perfilJson.html_url}" class="botao" target="_blank">Ver GitHub</a>
                    <div class="stat_item">
                        <p class="stat_number">${perfilJson.followers}</p>
                        <p class="stat_label">Seguidores</p>
                    </div>
                    <div class="stat_item">
                        <p class="stat_number">${perfilJson.public_repos}</p>
                        <p class="stat_label">Repositórios</p>
                    </div>
                </div>
            </article>
        `
        
        //PASSO 4: Adicionar o HTML dentro da Seção About

        about.innerHTML += conteudo;

    } catch (error) {
        console.error(error)
    
    }

}

// Função de envio e validação do formulário
formulario.addEventListener('submit', function(event) {

    // Impedir o envio automático do formulário
    event.preventDefault();

    // Validação do campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');

    // Nome precisa ter no mínimo 3 caracteres
    if(campoNome.value.length < 3) {
        txtNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = '';
    }

    // Validação do campo e-mail
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    // Verifica se o e-mail é válido 
    if(!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'Digite um e-mail válido.';
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = '';
    }

    // Validação do campo assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');

    // Assunto precisa ter no mínimo 5 caracteres
    if(campoAssunto.value.length < 5) {
        txtAssunto.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.';
        campoAssunto.focus();
        return;
    } else {
        txtAssunto.innerHTML = '';
    }

    // Se passou por todas as validações, enviar o formulário
    formulario.submit();
});

// Chamar a função geApiGithub()

getApiGithub();
