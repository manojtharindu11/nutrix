import axios from "axios";
const API_URL = process.env.EXPO_PUBLIC_API_URL || "https://trackapi.nutritionix.com/v2/search/instant";
const API_HEADERS = {
  "Content-Type": "application/json",
  "x-app-id": process.env.EXPO_PUBLIC_X_APP_ID,
  "x-app-key": process.env.EXPO_PUBLIC_X_APP_KEY,
};

export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL, { headers: API_HEADERS });
    // console.log(response);
    return response.data.branded;
  } catch (error) {
    throw error;
  }
};
