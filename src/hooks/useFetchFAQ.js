import {useEffect, useState} from 'react';

const useFetchFAQ = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchFAQ = async () => {
            try {
                let response =  await fetch("http://localhost:5000/faq");
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchFAQ();
    }, []);

    return {
        data,
        loading,
    };
};

export default useFetchFAQ;