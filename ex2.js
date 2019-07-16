var listElement = document.querySelector('#ex2 ul');
var inputElement = document.querySelector('#ex2 input');

function renderRepositories(repositories) {
    listElement.innerHTML = '';    

    for (repo of repositories) {
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repo.name);
        
        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
} 

function findRepositories() {
    var userName = inputElement.value;    

    axios.get('https://api.github.com/users/'+userName+'/repos')
            .then((response) => {
                renderRepositories(response.data);           
            })
            .catch((error) => {
                console.log(error);
            });      
} 