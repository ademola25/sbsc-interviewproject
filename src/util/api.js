export const playInfo = info => {
        
    return fetch('https://5f1804b87c06c900160dc844.mockapi.io/sbsc/v1/dashboard', {
        method: "GET",
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
};
