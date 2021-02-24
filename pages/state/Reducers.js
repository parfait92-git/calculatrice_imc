
export default function reducers(state, action) {
    switch(action.type) {
        case "NOTIFY": 
            return {
                ...state, 
                notify: action.payload
            };
        case "SAVE_INDICE": 
            return {
                ...state,
                indice: action.payload
            };
            case "UPDATE_IMC": 
            return {
                ...state,
                imc: action.payload
            };
        default: 
            return state;
    }
}
