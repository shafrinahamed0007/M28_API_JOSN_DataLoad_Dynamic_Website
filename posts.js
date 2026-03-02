// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => displayPost(data));
// };

// const displayPost = (posts) => {
//   // for(let i = 0; i<posts.length; i++){
//   //     console.log(posts[i])
//   // }

//   //   for (let post of posts) {
//   //     console.log(post);
//   //   }

//   //   1. get the container
//   const postContaier = document.getElementById("post-container");
//   postContaier.innerHTML = "";

//   posts.forEach((post) => {
//     // console.log(post.title);

//     // 2. create HTML element
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     // console.log(li)

//     // 3. add li into container
//     postContaier.appendChild(li);
//   });
// };

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
};

const displayPost = (posts) => {
  //   1. get the container and empty the container
  const postsContainer = document.getElementById("postContainer");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    //    2. create element

    const postCard = document.createElement("div");
    postCard.innerHTML = `
      <div class="postCard">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    
    `;

    // 3. add to the container
    postsContainer.append(postCard);
  });
};

loadPost();
