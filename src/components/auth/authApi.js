export const login = user => {
        
    return fetch('https://5f1804b87c06c900160dc844.mockapi.io/sbsc/v1/login', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
};


export const authenticate = (data, next) => {
    if(data.verification_status === true){
        next();
    }
}