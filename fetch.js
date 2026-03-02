const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const loadComment = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((res) => res.json())
    .then((comments) => console.log(comments));
};

const allUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((allUsers) => console.log(allUsers));
};


