const pageBody = document.querySelector(".container");

// Populando a tela com os dados da API
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then(result => {
    result.forEach(e => {
        let postContainer = document.createElement("div");
        postContainer.setAttribute("class", "postContainer");

        let postTitle = document.createElement("h2");
        postTitle.setAttribute("class", "postTitle");
        
        let postText = document.createElement("div");
        postText.setAttribute("class", "postText");

        postContainer.appendChild(postTitle);
        postContainer.appendChild(postText);

        pageBody.appendChild(postContainer);

        postTitle.innerText = e.title;
        postText.innerText = e.body;
    });
})
.catch((erro) => {
    pageBody.innerText = "Algo deu errado, tente novamente em alguns minutos: " + erro;
})