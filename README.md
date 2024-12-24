# Nutrix: Nutrition Data Viewer

**Nutrix** is a lightweight **React-Native** cross-platform application focused on mobile devices that fetch and display nutrition data using the Nutritionix API. It also integrates navigation using **Expo Router**, global state management via **Context API**, and data fetching with **Axios**.

---


## Table of Contents

- [Features](#features)  
- [Installation](#installation)  
- [API Integration](#api-integration)  
- [Screens](#screens)  
- [Contributing](#contributing)  
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
    expo start
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

### 1. **Login Page**  
Securely logs users in using validated credentials.  

### 2. **Registration Page**  
Enables new user registration with real-time form validation for name, email, and password fields.  

### 3. **Home Page**  
Fetches and displays real-time nutrition data from the Nutritionix API in an easy-to-read format.

---

## Contributing

We welcome contributions to Nutrix! Here's how you can contribute:  

1. **Fork** the repository.  
2. Create a **new branch** for your feature:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Commit** your changes:
    ```bash
    git commit -m "Add your-feature-name"
    ```
4. **Push** to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a **pull request**, detailing your changes and improvements.

---


## License

This project is licensed under the [MIT License](LICENSE). 
