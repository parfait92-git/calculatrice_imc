import { createContext, useReducer }  from 'react';
import reducers from './Reducers';

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const initialState = { notify: {}, indice: {}, imc: {}};
    const [state, dispatch] = useReducer(reducers, initialState)
    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;