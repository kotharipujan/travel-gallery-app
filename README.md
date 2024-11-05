# TravelGallery

This project is an Angular single-page application that displays a gallery of travel destinations. It was built using [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

The gallery displays images, titles, and descriptions of travel destinations, with data retrieved dynamically from an AWS Lambda function, served via an API Gateway. The UI leverages Angular Material to enhance user experience, including loading spinners and a responsive gallery design.

## Features

- **Single-Page Application**: Built using Angular and designed to provide a responsive, engaging gallery experience.
- **Dynamic Data Fetching**: Data for travel destinations (including image, title, and description) is fetched via an AWS Lambda function triggered by an API Gateway.
- **Angular Services**: Uses Angular services to manage API requests to the Lambda function.
- **Angular Material Integration**: Loading spinners from Angular Material are used to provide a better user experience while data is being fetched.
- **Modern Gallery Layout**: Displays travel destinations in a gallery format using CSS Grid for responsiveness and hover animations for user interaction.
- **Hosted on AWS Amplify**: Hosted on AWS Amplify with both production and development environments.

## Development server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Setup and Architecture

### Folder Structure
- **src/assets/images/**: Stores the images used in the gallery (e.g., `newyork.jpg`, `paris.jpg`, `tokyo.jpg`). This folder is served as a static resource.
- **src/app/**: Contains all components, services, and configuration files used in the application.
- **src/app/travel-gallery/**: Contains the main gallery component (`travel-gallery.component`) that is responsible for displaying travel destinations.
- **src/app/get-travel-destination.service.ts**: Angular service used to make HTTP requests to the AWS API Gateway, which triggers the Lambda function to get the data.

### AWS Lambda and API Gateway
- **AWS Lambda**: A Lambda function is set up to return static JSON data about travel destinations.
- **API Gateway**: Used to publicly expose the Lambda function as a REST API endpoint.
- **JSON Data Example**:
  ```json
  [
    {"title": "Paris", "description": "The City of Light", "image": "paris.jpg"},
    {"title": "Tokyo", "description": "The heart of Japan", "image": "tokyo.jpg"},
    {"title": "New York", "description": "The Big Apple", "image": "newyork.jpg"}
  ]
  ```

### Angular Service for Data Fetching
- **GetTravelDestinationService**: An Angular service (`get-travel-destination.service.ts`) that uses the `HttpClient` to make GET requests to the AWS API Gateway.
- **Usage**: The service is injected into the `TravelGalleryComponent` to fetch travel destination data when the component initializes (`ngOnInit`).

### Angular Material Integration
- **MatProgressSpinner**: Used to show a loading spinner while travel destinations are being fetched from the API.
  - To install Angular Material, run:
    ```bash
    ng add @angular/material
    ```
  - Import `MatProgressSpinnerModule` in your component to use the spinner.

### Styling and Responsiveness
- **Gallery Layout**: The gallery is implemented using CSS Grid to ensure a responsive design that looks great on different screen sizes.
- **Hover Effects**: Each gallery card has hover effects to provide an interactive user experience.

## Hosting on AWS Amplify
- **Two Versions Hosted**: The application is hosted on AWS Amplify with two branches:
  - **Production**: Reflects the stable version of the app.
  - **Development**: Used to test new features and updates.
- **AWS Setup**:
  - Use AWS Amplify to connect to your Git repository and create hosting environments.

## Deployment Instructions
- **Push Code to Git Repository**: Ensure that the code is committed and pushed to a Git repository (e.g., GitHub).
- **Connect AWS Amplify**:
  - Go to AWS Amplify, and connect your Git repository.
  - Select the appropriate branch (development or production) to deploy.

## Image Handling
- **Images Directory**: All images used in the gallery are stored under `src/assets/images/`.
- **Dynamic Binding**: The images are dynamically loaded in the `travel-gallery.component.html` using Angular's `[src]` binding:
  ```html
  <img [src]="'assets/images/' + destination.image" alt="{{ destination.title }}" class="gallery-image">
  ```
- **Troubleshooting Image Issues**: Make sure the `assets` folder is correctly configured in `angular.json` and that the images are named correctly (case-sensitive).



## Known Issues
- **CORS Issue**: If you encounter CORS errors when fetching data from the AWS API Gateway, ensure that the correct CORS headers are configured for the API.
- **Image Not Loading**: Ensure that the image files are placed correctly under `src/assets/images/` and that the paths match exactly (including case sensitivity).

## Contact and Contributions
Feel free to contribute to this project by submitting pull requests. For any questions, please open an issue on the GitHub repository.

