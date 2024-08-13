import { useEffect, useState } from "react";

export default function UseFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize as true
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [url]);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null);
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error }; // Return an object
}
