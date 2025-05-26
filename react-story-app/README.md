# React Story App

## Overview
The React Story App is a simple application that fetches and displays science fiction stories from an external API. Users can view a list of stories on the home page and click on individual stories to see detailed information on a separate page.

## Features
- Fetches stories from the API: `https://mxpertztestapi.onrender.com/api/sciencefiction`
- Displays stories in a card format with images and titles.
- Implements pagination to navigate through the list of stories.
- Provides a detailed view of each story using a separate API endpoint: `https://mxpertztestapi.onrender.com/api/sciencefiction/{id}`.

## Project Structure
```
react-story-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── StoryCard.jsx
│   │   └── StoryDetail.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Detail.jsx
│   ├── App.jsx
│   ├── api
│   │   └── stories.js
│   ├── styles
│   │   └── main.css
│   └── index.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-story-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Components
- **StoryCard**: Displays individual story cards with an image and title.
- **StoryDetail**: Fetches and displays detailed information about a specific story.
- **Home**: Fetches the list of stories and implements pagination.
- **Detail**: Displays the detailed view of a selected story.

## API
- **List of Stories**: `GET https://mxpertztestapi.onrender.com/api/sciencefiction`
- **Story Details**: `GET https://mxpertztestapi.onrender.com/api/sciencefiction/{id}`

## Styling
All styles are defined in `src/styles/main.css`. Customize the styles as needed to enhance the appearance of the application.

## License
This project is licensed under the MIT License.