export const useApiSubmit = () => {
  const apiSubmit = async (path, data) => {
    try {
      const response = await fetch(`http://localhost:8080/${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error("API submission error", error);
      throw error;
    }
  };

  return apiSubmit;
};
