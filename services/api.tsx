import axios from "axios";
// Define the API URL and headers
const API_URL =
  "https://trackapi.nutritionix.com/v2/search/instant/?query=nutritions";
const API_HEADERS = {
  "Content-Type": "application/json",
  "x-app-id": "85b396ce", // Replace with your Nutritionix App ID
  "x-app-key": "487539663ce6295a479d179846643e43", // Replace with your Nutritionix App Key
};

// Function to fetch items from the Nutritionix API
export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL, { headers: API_HEADERS });
    // console.log(response);
    return response.data.branded;
  } catch (error) {
    throw error;
  }
};
