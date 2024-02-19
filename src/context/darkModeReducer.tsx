const darkModeReducer = (state: { darkMode: boolean }, action: { type: string }): { darkMode: boolean } => {
    switch(action.type){
        case "LIGHT":{
            return {
                darkMode: false
            };
        }
        case "DARK":{
            return {
                darkMode: true
            };
        }
        case "TOGGLE":{
            return {
                darkMode: !state.darkMode,
            };
        }
        default:
            return state;
    }
};

export default darkModeReducer;
