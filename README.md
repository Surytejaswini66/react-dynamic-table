# Dynamic Table with Features

## Project Overview

The **Dynamic Table with Features** is a React-based application that enables users to interact with a dynamic table containing a set of features like single and multi-select dropdowns, row addition, deletion, inline editing, theme switching, and more. This project aims to showcase the use of React for managing dynamic data and handling UI interactions.

### Features Implemented:
- **Single Select Dropdown**: The first column has a dropdown that allows the user to select a single option from a predefined list.
- **Multi Select Dropdown**: The second column allows the user to select multiple options, with the ability to add new options to the list.
- **Add New Row**: Users can add rows dynamically to the table.
- **Reset Table**: Reset the table to its initial state.
- **Inline Editing**: Users can edit selected options in Label 2 directly in the table.
- **Theme Toggle**: Toggle between light and dark mode for the table’s display.
- **Row Duplication**: Duplicate an entire row, including all the selected values.
- **Mobile Responsiveness**: The application is designed to be responsive across different device sizes.
- **Hover Effects**: Improved hover effects for options, dropdowns, and rows.

## Technologies Used
- **React**: For building the dynamic user interface.
- **CSS**: For styling the components and implementing the theme functionality.
- **JavaScript**: For logic and event handling in the application.

## Project Setup

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/dynamic-table.git
### 2.Install Dependencies
Navigate to the project directory and install the required dependencies:
cd dynamic-table
npm install
## 3. Run the Development Server
To start the development server, run the following command:
npm start

This will start the React app in development mode. Open your browser and navigate to http://localhost:3000 to see the application in action.

## 4. Build the Project
To build the project for production, use:
npm run build

This will create an optimized production build of the app in the build folder.

Usage
Single Select Dropdown: Select an option from the dropdown in the first column. Once an option is selected, it is disabled for other rows.
Multi Select Dropdown: Select multiple options in the second column. You can add new options by typing in the input field at the bottom of the dropdown list.
Add New Row: Add a new row by clicking the "Add New Row" button. This will create a new row with empty dropdowns.
Reset Table: Click the "Reset Table" button to clear all rows and restore the table to its original state.
Inline Editing: You can edit selected options directly within the table by clicking the "edit" icon next to an option.
Row Duplication: Duplicate any row by clicking the "Duplicate" button in the respective row.

License
This project is open-source and available under the MIT License.
