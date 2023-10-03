# interviewChallenge
1. # QR Code Component 

This README provides an overview and explanation of the HTML and CSS code for the "QR code component." This component is designed to display a QR code that users can scan to visit Frontend Mentor and improve their front-end development skills. Below, you'll find details on the structure of the HTML and CSS used in this component.

## HTML Structure
The HTML code for the QR code component is structured as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta information and title -->
</head>
<body class="container py-5">
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 col-lg-4 qr-container">
      <!-- QR code image and content -->
    </div>
  </div>
</body>
</html>
```

- `<!DOCTYPE html>`: Defines the document type as HTML5.
- `<html lang="en">`: Specifies the document language as English.
- `<head>`: Contains metadata and links to external resources.
- `<body class="container py-5">`: Sets up the main body of the webpage with Bootstrap classes for container padding.
- `<div class="row justify-content-center">`: A row for centering the content horizontally.
- `<div class="col-12 col-md-6 col-lg-4 qr-container">`: A container for the QR code component.

## CSS Styles
The CSS code defines styles for various elements within the QR code component:

- `body`: Sets the font-family and background color.

- `.qr-container`: Styles the main container for the QR code component, setting borders, border-radius, and background color.

- `.qr-box`: Styles the inner container for the QR code, with padding and border-radius.

- `.qr-description`: Styles the description text for the QR code.

- `h3`: Styles the heading text for the component.

- `#qrcode`: Styles the QR code image, controlling its maximum width, height, and border-radius.

- Media Queries: Adjusts container and box border-radius for mobile screens (max-width: 576px).

## External Resources
- Google Fonts: The component includes the "Outfit" font from Google Fonts for text styling.

- Favicon: Sets the favicon for the webpage, linking to a 32x32 PNG image.

- Bootstrap CSS: Includes the Bootstrap 4.5.2 CSS library to apply Bootstrap styles and responsive design.

## Component Purpose
The purpose of this component is to present a QR code that users can scan to access Frontend Mentor, a platform for improving front-end development skills through practical projects. The component includes descriptive text and styling to make it visually appealing and user-friendly.

Feel free to customize and integrate this QR code component into your web projects for a convenient way to promote Frontend Mentor and enhance your users' front-end development skills.
