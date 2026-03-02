const loadComment = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((comments) => displayComments(comments));
};

const displayComments = (allComments) => {
  allComments.forEach((comment) => {
    const commentContainer = document.getElementById("commentsContainer");

    const commetCard = document.createElement("div");
    commetCard.innerHTML = `
         <div class="commentCard">
            <h2>${comment.name}</h2>
            <h3>Email: ${comment.email}</h3>
            <p>Message: ${comment.body}<p/>
        </div>
        
        `;

    commentContainer.appendChild(commetCard);
  });
};

loadComment();

