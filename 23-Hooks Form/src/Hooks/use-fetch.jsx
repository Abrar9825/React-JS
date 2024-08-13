import { useEffect } from "react"
import { useState } from "react"

export default function UseFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData()
    }, [url])

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            if (result) {
                setData(result);
                setError(null);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }

    return (
        {
            data,
            loading,
            error
        }
    )
}