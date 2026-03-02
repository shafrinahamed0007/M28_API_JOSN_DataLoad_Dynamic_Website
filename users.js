const loadUsers = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((users) => displayUser(users));
};

const displayUser = (users) => {
  const usersContainer = document.getElementById("usersContainer");
//   usersContainer.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.innerHTML = `
      <div class = "userCard">
        <h4>Name: ${user?.name}</h4>
        <h5>Email: ${user?.email}</h5>
        <p>Address: Street ${user?.address?.street}, Suite ${user?.address?.suite}, City: ${user?.address?.city}, ZIP: ${user?.address?.zipcode} </p>
        <br>
        <p>Phone: ${user?.phone}</>
        <p>Company Details: Name: ${user?.company?.name}</p>
      
      </div>
    
    `;
    usersContainer.append(userCard)
  });

  
};

loadUsers();
