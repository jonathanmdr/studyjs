var listElement = document.querySelector('#ex2 ul');

function addElement(repositoryName) {
    var repoElement = document.createElement('li');
    var repoText = document.createTextNode(repositoryName);
    
    repoElement.appendChild(repoText);
    listElement.appendChild(repoElement);
}  

axios.get('https://api.github.com/users/jonathanmdr/repos')
        .then((response) => {
            response.data.map((repositorio) => {
                addElement(repositorio.name);
            });            
        })
        .catch((err) => {
          console.log(err);
        });      