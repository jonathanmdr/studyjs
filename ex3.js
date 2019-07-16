var listElement = document.querySelector('#ex3 ul');
var inputElement = document.querySelector('#ex3 input');

function clearListElement() {
    listElement.innerHTML = '';
}

function addElement(value) {
    var liElement = document.createElement('li');    
    var repoText = document.createTextNode(value);
    
    liElement.appendChild(repoText);
    listElement.appendChild(liElement);
}

function renderLoading() {
    clearListElement();
    addElement('Carregando...');
}

function renderError() {
    clearListElement();
    addElement('404 - Usuário não existe!');
} 

function renderRepositories(repositories) {
    clearListElement();  

    for (repo of repositories) {
        addElement(repo.name);
    }
}

function findRepositories() {
    var userName = inputElement.value;

    if (!userName) return;

    renderLoading();

    axios.get('https://api.github.com/users/'+userName+'/repos')
            .then((response) => {
                renderRepositories(response.data);           
            })
            .catch((err) => {
                renderError();
            });      
}  