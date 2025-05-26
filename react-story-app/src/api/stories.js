import axios from 'axios';

const API_BASE_URL = 'https://mxpertztestapi.onrender.com/api/sciencefiction';

export const fetchStories = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching stories:', error);
    throw error;
  }
};

export const fetchStoryById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching story with ID ${id}:`, error);
    throw error;
  }
};