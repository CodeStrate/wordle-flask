

const apiURL: string = import.meta.env.VITE_URL;

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