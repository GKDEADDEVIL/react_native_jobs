import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '708930d2admsh8051b98f9c02221p198591jsn10d5a823aab5',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }, 
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        }catch (error) {
            setError(error);
            alert('Error: ' + error.message);
        }finally {
            setIsLoading(false);

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};

}

export default useFetch;