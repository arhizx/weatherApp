export const city = city => {
    //Return an action
    return {
        type: "CITY",
        payload: {
            city
        }
    };
};


export const weather = weather => {
    //Return an action
    return {
        type: "WEATHER",
        payload: {
            weather
        }
    };
};
