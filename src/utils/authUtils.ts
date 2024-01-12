export const isTokenExpired = (token: string): boolean => {
    try {
      // Split the token into header, payload, and signature
      const [encodedHeader, encodedPayload] = token.split('.');
  
      // Decode the header and payload
      const decodedHeader = JSON.parse(atob(encodedHeader));
      const decodedPayload = JSON.parse(atob(encodedPayload));
  
      if (!decodedPayload || !decodedPayload.exp) {
        // Invalid token or missing expiration claim
        return true;
      }
  
      // Check if the token has expired
      const expirationTime = decodedPayload.exp * 1000; // Convert seconds to milliseconds
      return Date.now() >= expirationTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  };
  