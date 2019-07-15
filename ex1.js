var checaIdade = (idade) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idade >= 18) {
                resolve('Maior que 18');
            } else {
                reject('Menor que 18');
            } 
        }, 2000);                      
    });
}

checaIdade(10)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });