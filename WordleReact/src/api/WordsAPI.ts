import { useEffect, useState } from "react";

const apiURL: string = import.meta.env.VITE_URL;

export const useWords = () => {
    const [data, setData] = useState<string>("");
    useEffect(() => {
        fetch(`${apiURL}/word_api`, {
            'method' : 'GET',
            'headers' : {
                'Content-Type' : 'application/json'
            }
        })
        .then((res) => res.json()
        .then((data) => setData(data.word)))
        .catch(error => console.log(error))

    }, []);

    return data;
}