
export const get = async (url, jwt = false) => {
    try{
        const fetchOptions = {};
        if(jwt){
            fetchOptions.headers = {
                Authorization: localStorage.getItem("token")
            }
        }
        const rawResponse = await fetch(url , fetchOptions);
        const response = await rawResponse.json();
        if(response.result){
            return response.result;
        }
        throw response.message;
    }
    catch (err){
        throw err;
    }
}

export const post = (url, payload, jwt = false) => {
    const fetchOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    };
    if(jwt){
        fetchOptions.headers = {
            Authorization: localStorage.getItem("token")
        }
    }

    return fetch(url, fetchOptions).then(async response => {
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        if(!jsonResponse.result){
            throw jsonResponse;
        }
        return jsonResponse;
    }).catch(error => {
        throw error;
    })
}

