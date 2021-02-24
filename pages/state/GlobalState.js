import { createContext, useReducer }  from 'react';
export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const initialState = { notify: {}, indice: {}, imc: {}};
    const [state, dispatch] = useReducer(Reducers, initialState)
    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    )
}

 function Reducers(state, action) {
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

export default DataProvider;