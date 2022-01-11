const API_URL = "https://ramdom-numbers-app.herokuapp.com/";

export const fetchRandom = (state) => (dispatch) => {
    dispatch({ type: "view-loading" });

    return fetch(`${API_URL}/random`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({list: state})
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}

export const fetchRandomNumbers = (state) => (dispatch) => {
    dispatch({ type: "view-loading" });
    
    return fetch(`${API_URL}/random/number`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({number1: state.num1, number2: state.num2})
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}