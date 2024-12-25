# Nutrix: Nutrition Data Viewer

**Nutrix** is a lightweight **React-Native** cross-platform application focused on mobile devices that fetch and display nutrition data using the Nutritionix API. It also integrates navigation using **Expo Router**, global state management via **Context API**, and data fetching with **Axios**.

---


## Table of Contents

- [Features](#features)  
- [Installation](#installation)  
- [API Integration](#api-integration)  
- [Screens](#screens)  
- [License](#license)  

---


## Features

- **API Integration**: Fetch nutrition data from [Nutritionix API](https://trackapi.nutritionix.com/v2/search/instant/?query=nutritions).
- **Three Core Pages**:
  - **Login**: User authentication with form validation.
  - **Register**: New user registration with secure form validation.
  - **Home**: Displays nutrition data fetched from the API.
- **Global State Management**: Use Context API for managing the app state.
- **Axios Integration**: Fetch data from the Nutritionix API using Axios.
- **Expo Router**: Navigation between different pages.

---


## Installation

### Prerequisites:
- Ensure **Node.js** and **npm** are installed.
- Install **Expo CLI** globally:
    ```bash
    npm install -g expo-cli
    ```

### Steps:
1. Clone the repository:
    ```bash
    git clone https://github.com/manojtharindu11/nutrix.git
    ```

2. Navigate to the project directory:
    ```bash
    cd nutrix
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npx expo start
    ```

5. Use the **Expo Go app** or an emulator to view the app:
   - **Scan the QR Code**: Open Expo Go and scan the QR code displayed in the terminal.
   - **Run on Emulator**: Follow Expo's setup instructions for iOS or Android simulators.

---

## API Integration

The app integrates with the Nutritionix API to fetch nutritional data.  

### API Endpoint:  
[https://trackapi.nutritionix.com/v2/search/instant/?query=nutritions](https://trackapi.nutritionix.com/v2/search/instant/?query=nutritions)  

### API Keys Configuration:
Include your credentials in a `.env` file:  

```env
EXPO_PUBLIC_API_URL=https://trackapi.nutritionix.com/v2/search/instant/?query=nutritions
EXPO_PUBLIC_X_APP_ID=your-app-id-get-from-nutritionix
EXPO_PUBLIC_X_APP_KEY=your-app-key-get-from-nutritionix
```

An `.env.example` file is provided to guide the structure of the `.env` file.

---


## Screens

### 1. **Registration Page**  
Enables new user registration with real-time form validation for name, email, and password fields. 

### 2. **Login Page**  
Securely logs users in using validated credentials.

### 3. **Home Page**  
Fetches and displays real-time nutrition data from the Nutritionix API in an easy-to-read format.
<p align="center">
  <img src="https://github.com/user-attachments/assets/295358f5-2c2a-4f63-9d8f-ff252179d3e7" alt="Screenshot 2" width="200"/>
  <img src="https://github.com/user-attachments/assets/2c4ed805-d3ee-48b1-9ddf-3cd37a7479b7" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/507dcfbe-6be3-4371-8d93-61689517a86d" alt="Screenshot 1" width="200"/>
  <img src="https://github.com/user-attachments/assets/51979de1-2b3a-493b-b218-f7c7176af5d8" alt="Screenshot 3" width="200"/>
</p>

---

## License

This project is licensed under the [MIT License](LICENSE). 
