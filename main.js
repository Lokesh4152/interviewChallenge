// main.js

function fetchGitHubData(username="alok722") {
    
    const apiURL = `https://api.github.com/users/${username}`;
  
    return fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the data here
        // Update card content with GitHub data
        console.log(data);
        document.getElementById('card-image').src = data.avatar_url;
        document.getElementById('card-username').textContent = data.name;
        document.getElementById('card-bio').textContent = data.bio;
        // document.getElementById('card-profile-link').href = data.html_url;
        document.getElementById('followers').innerHTML =`Followers: ${data.followers}`;
        document.getElementById('following').innerHTML =`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following: ${data.following}`;
        document.getElementById('repos').innerHTML =`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repos: ${data.public_repos}`;
        document.getElementById('twitter').innerHTML =`Twitter: ${data.twitter_username}`;
        document.getElementById('location').innerHTML =`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location: ${data.location}`;
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
        throw error;
      });
  }
  
  export{fetchGitHubData}