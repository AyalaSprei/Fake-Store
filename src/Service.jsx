// productService.js

const API_BASE_URL = 'https://fakestoreapi.com/products/category';

const productService = {
  // Method to fetch jewelry products
  getJewelry: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/jewelery`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching jewelry products:", error);
      throw error;
    }
  },

  // Method to fetch electronics products
  getElectronics: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/electronics`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching electronics products:", error);
      throw error;
    }
  }
};

export default productService;
