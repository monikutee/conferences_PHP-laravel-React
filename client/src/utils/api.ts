const API_BASE_URL = "http://localhost:8000/api"; // Replace with the domain where your Laravel API is running

const apiFetch = async (url: string, options = {}) => {
    const token = localStorage.getItem("access_token");

    const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error("Error fetching data");
    }

    return await response.json();
};

export default apiFetch;
