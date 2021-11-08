export const addCategory = (data) => {

    return (dispatch) => {
        fetch("http://localhost:3000/api/v2/categories", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(response => {
            dispatch({type: "ADD_CATEGORY", payload: response.data})
        })
    }
}