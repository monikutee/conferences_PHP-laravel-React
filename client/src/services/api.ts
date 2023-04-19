const apiFetch = async (url: string, options = {}) => {
    const token = localStorage.getItem("access_token");

    const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        alert(response.statusText);
    }

    return await response.json();
};

export default apiFetch;
