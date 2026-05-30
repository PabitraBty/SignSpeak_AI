// API Integration layer for SignSpeak AI
// This is structured to easily swap in the future Python REST API.

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Predicts the sign language gesture from an image frame.
 * @param {string} imageBase64 - The base64 encoded image frame from the webcam.
 * @returns {Promise<Object>} - The prediction result (prediction, confidence, timestamp).
 */
export const predictSign = async (imageBase64) => {
  // TODO: Replace with actual API call when Python backend is ready.
  // Example of future implementation:
  /*
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageBase64 }),
    });
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error connecting to AI API:", error);
    throw error;
  }
  */

  // Mock implementation for current UI development phase
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockSigns = ['Hello', 'Namaste', 'Thank You', 'Yes', 'No', 'Please'];
      const randomSign = mockSigns[Math.floor(Math.random() * mockSigns.length)];
      const randomConfidence = (Math.random() * (99 - 85) + 85).toFixed(1); // 85% to 99%
      
      resolve({
        prediction: randomSign,
        confidence: parseFloat(randomConfidence),
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
      });
    }, 800); // Simulate network latency and model inference time
  });
};
