// main.js

function getUserDetails(username = "alok722") {
  const apiURL = `https://api.github.com/users/${username}`;

  return fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Call createUserCard with the fetched data
      createUserCard(data);
      return data; // Return the fetched data
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
}

// Function to create and update user card
function createUserCard(data) {
  // Update card content with GitHub data
  console.log(data);
  document.getElementById("card-image").src = data.avatar_url;
  document.getElementById("card-username").textContent = data.name;
  document.getElementById("card-bio").textContent = data.bio;
  document.getElementById("followers").innerHTML = `Followers: ${data.followers}`;
  document.getElementById("following").innerHTML = `&nbsp Following: ${data.following}`;
  document.getElementById("repos").innerHTML = `Repos: ${data.public_repos}`;
  document.getElementById("twitter").innerHTML = `Twitter: ${data.twitter_username}`;
  document.getElementById("location").innerHTML = `Location: ${data.location}`;
}

export { getUserDetails, createUserCard };
