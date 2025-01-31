# Investment Calculator in React
This project is an interactive investment calculator built using React. It allows users to input their financial data and calculates the future value of their investments, including yearly interest and total interest earned over time.

## Features
- **Investment Calculation**: Calculates the future value of investments based on initial investment, annual contributions, expected return, and duration.
- **Dynamic Results**: Displays yearly investment growth, interest earned, and total interest in a table format.
- **Currency Formatting**: Formats numbers as currency for better readability.

## Concepts Practiced
This project reinforces key React concepts, including:
- **State Management**: Handling user inputs and dynamically updating the results.
- **Props Usage**: Passing data between components to maintain a clean and organized structure.
- **Event Handling**: Managing user interactions such as input changes.
- **Conditional Rendering**: Displaying results only when all required inputs are provided.

## How to Use
1. Open the application in your browser.
2. Enter the following details:
   - **Initial Investment**: The starting amount of money.
   - **Annual Investment**: The amount added to the investment each year.
   - **Expected Return**: The annual rate of return (in percentage).
   - **Duration**: The number of years for the investment.
3. The table will display the yearly investment growth, interest earned, and total interest.

## Project Structure
The project is organized into the following components:
- **App**: The main component that manages the state and renders the user interface.
- **UserInput**: Handles user inputs and updates the state.
- **calculateInvestmentResults**: Utility function that performs the investment calculations.
- **formatter**: Utility function to format numbers as currency.

## Installation
To run the project locally:  
1. Clone the repository:  
   `git clone https://github.com/manjot-ghatora/investment-calculator.git`  
2. Navigate to the project directory:  
   `cd investment-calculator`  
3. Install the dependencies:  
   `npm install`  
4. Start the development server:  
   `npm start`  
5. Open your browser and go to `http://localhost:5173` to use the calculator.

## License
This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as per the license terms.
