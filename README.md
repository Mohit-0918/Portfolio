# Portfolio

## Description
This is a personal portfolio project built with React. It showcases various skills, projects, and contact information. The project is designed to be easily customizable, allowing users to update content, styles, and functionality as needed.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To run the project, use the following command:
```bash
npm start
```
This will start the development server and open the application in your default web browser.

## Project Structure
The project is organized into the following key directories and files:

- **`src/components`**: Contains React components for different sections of the portfolio (e.g., `NavBar`, `Banner`, `Skills`, `Projects`, `Contact`).
- **`src/CSS`**: Contains CSS files for styling different components.
- **`src/data`**: Contains text files (`toRotate.txt`, `description.txt`) used for dynamic content in the `Banner` component.
- **`public`**: Contains static assets like images and the `index.html` file.
- **`Server.js`**: A Node.js server for handling contact form submissions using `nodemailer`.

## Customization
### 1. **Updating Content**
   - **Skills**: Update the `Skills.js` file in `src/components` to add or modify skill categories and items.
   - **Projects**: Update the `Projects.js` file in `src/components` to add or modify project details.
   - **Banner**: Modify the `toRotate.txt` and `description.txt` files in the `src/data` folder to update the rotating text and description in the banner.

### 2. **Styling**
   - Modify CSS files in the `src/CSS` folder to customize the appearance of different components.
   - For global styles, update the `App.css` file.

### 3. **Contact Form**
   - The contact form is configured to send emails using `nodemailer`. Update the `.env` file with your email credentials:
     ```
     EMAIL_USER=your-email@example.com
     EMAIL_PASS=your-email-password
     ```
   - Ensure the backend server (`Server.js`) is running on port 3000.

### 4. **Assets**
   - Replace images in the `public/assets` folder to update logos, profile pictures, or project images.

### 5. **Deployment**
   - Build the project using:
     ```bash
     npm run build
     ```
   - Deploy the `build` folder to your preferred hosting platform (e.g., Firebase, Netlify, Vercel).

## Key Features
- **Responsive Design**: The portfolio is fully responsive and adapts to different screen sizes.
- **Dynamic Content**: The `Banner` component dynamically fetches text from files for easy updates.
- **Contact Form**: A functional contact form with email integration using `nodemailer`.

## Dependencies
This project uses the following key dependencies:
- React
- Bootstrap
- React Multi Carousel
- Nodemailer (for backend email functionality)

## Testing
Run the following command to execute tests:
```bash
npm test
```

## Contributing
Feel free to fork this repository and submit pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.


