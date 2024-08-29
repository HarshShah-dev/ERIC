
# ERIC Web App

A React-based web application designed to monitor and control home environment conditions.

## Features

- **Thrive Score**: Visual gauge indicating the overall comfort of the home environment and wellbeing of the residents.
- **Environmental Overview**: Overview of environmental metrics like motion, temperature, and comfort score displayed using charts.
- **Thermostat Control**: Adjust the temperature with a simple up/down interface.
- **Door Camera Feed**: This is real-time live feed of the doorbell camera.
- **Sidebar Navigation**: Simple and intuitive sidebar for easy navigation across different sections.
- **Detailed Data**: This is real-time sensor data presented in an easy-to-understand format through charts.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager) or yarn

### Installation and Run 

1. **Clone the repository**:
   
- `git clone https://github.com/yourusername/home-comfort-dashboard.git`
- `cd home-comfort-dashboard`
   

2. **Install dependencies**:
   `npm install`
   or
   `yarn install`

3. **Start the application**:
   `npm start`
   or
   `yarn start`

   The application will be available at `http://localhost:3000`.

## Project Structure

- **App.js**: The main component that houses the sidebar and dashboard.
- **App.css**: The styling for the website is managed here.
- **Dashboard.js**: Contains various dashboard items like Thermostat, ComfortScore, Overview, and charts.
- **Sidebar.js**: Navigation component for easy access to different sections.
- **ComfortScore.js**: Displays the comfort score using a circular progress bar.
- **Thermostat.js**: Allows users to control the home temperature.
- **EntryChart.js**: Bar chart showing motion activity throughout the week.
- **TemperatureChart.js**: Bar chart displaying daily temperature.
- **Overview.js**: Line chart summarizing Thrive scores over the week.
- **StatusBars.jsx**: Component to display status bars.

## Acknowledgements

- [Recharts](https://recharts.org/en-US/) for charting.
- [React Icons](https://react-icons.github.io/react-icons/) for icons.
- [React Circular Progressbar](https://github.com/kevinsqi/react-circular-progressbar) for the circular progress bar.
