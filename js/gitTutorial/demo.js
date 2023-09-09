// main.js

// Select the form and the users list
const myForm = document.getElementById("my-form");
const userList = document.getElementById("users");

// Add an event listener to the form for submission
myForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the values entered by the user
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Check if the name and email are not empty
  if (name.trim() === "" || email.trim() === "") {
    // Display an error message
    showMessage("Please fill in all fields.", "error");
  } else {
    // Create an object to represent the user
    const user = {
      name: name,
      email: email,
    };

    // Store the user object in local storage
    storeUserInLocalStorage(user);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    // Display a success message
    showMessage("User added successfully!", "success");
  }
});

// Function to store a user object in local storage
function storeUserInLocalStorage(user) {
  let users;
  if (localStorage.getItem("users") === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to display messages
function showMessage(message, className) {
  const div = document.createElement("div");
  div.className = className;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector(".container");
  const form = document.getElementById("my-form");

  container.insertBefore(div, form);

  // Remove the message after 3 seconds
  setTimeout(function () {
    document.querySelector(`.${className}`).remove();
  }, 3000);
}

