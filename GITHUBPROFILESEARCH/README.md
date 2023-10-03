# GitHub Profiles Web App 

This README provides an overview of the HTML and JavaScript code for the "GitHub Profiles" web application. This application allows users to search for GitHub user profiles and view their details. Below, you'll find explanations of the HTML structure, external resources, and JavaScript functionality.

## HTML Structure
The HTML code for the GitHub Profiles web app is structured as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta information, title, and external resources -->
</head>
<body>
  <form id="form">
    <!-- User input field for GitHub username -->
  </form>
  <main id="main">
    <!-- Card to display GitHub user details -->
  </main>
  <script src="main.js"></script>
  <!-- Bootstrap JavaScript library -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="..." crossorigin="anonymous"></script>
  <!-- JavaScript module to handle user input and API requests -->
  <script type="module">
    // JavaScript imports and event handling
  </script>
</body>
</html>
```

- `<!DOCTYPE html>`: Defines the document type as HTML5.
- `<html lang="en">`: Specifies the document language as English.
- `<head>`: Contains metadata, title, and links to external resources.
- `<body>`: The main body of the web page.
- `<form id="form">`: Form element for user input.
- `<main id="main">`: Main content area for displaying user details.
- `<script src="main.js"></script>`: Links the JavaScript file for app functionality.
- Bootstrap: Includes the Bootstrap 5.3.2 JavaScript library for enhanced UI components.

## JavaScript Functionality
The JavaScript code in `main.js` is responsible for handling user input and making API requests to fetch and display GitHub user profiles. Here's an overview of the key functionality:

- User Input Handling: The script listens for the Enter key press event in the input field and triggers the `getUserDetails` function when the Enter key is pressed.

- `getUserDetails` Function: This function sends an API request to GitHub to fetch user data based on the provided username. It populates the card in the main content area with the user's profile image, username, bio, follower count, following count, repository count, Twitter handle (if available), and location.

## External Resources
- Bootstrap: The application uses the Bootstrap 5.3.2 library for styling and UI components.

## How to Use
1. Enter a GitHub username in the input field.
2. Press the Enter key.
3. The user's profile details, including their avatar, username, bio, follower count, following count, repository count, Twitter handle (if available), and location, will be displayed in the card.

Feel free to customize and integrate this GitHub Profiles web application into your projects for a convenient way to search and view GitHub user profiles.
