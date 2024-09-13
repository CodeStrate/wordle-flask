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

export const checkWordList = async (data: {[key: string]: string }): Promise<boolean | undefined> => {

        
    try {
        let response = await fetch(`${apiURL}/check`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });

    let result = await response.json();

    let check = result['is_in_word_list'];

    return check;

    } catch(error) {
        console.error("Error Encountered: ", error);
    }
}