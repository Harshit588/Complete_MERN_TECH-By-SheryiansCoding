async function fetchApi() {
  console.log("Hiiii");

  const response = await fetch("https://api.github.com/users");
  const data = await response.json(); // Yeh real user data dega
  console.log(data); // Array of user objects

  console.log("Bye");
}

fetchApi();
