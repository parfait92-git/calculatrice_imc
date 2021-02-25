import Layout from "../components/layout";
import Resultat from "../components/resultat";
import { useState, useContext } from 'react';
import { postData } from '../utils/fetchData';
import valid from '../utils/valid';
import { DataContext } from './state/GlobalState';

export default function Formulaire() {
    const initialState = { taille: '', poids: '' };
    const [userData, setUserData] = useState(initialState);
    const { taille, poids } = userData;
    const [state, dispatch] = useContext(DataContext);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errMsg = valid(taille, poids);
        if (errMsg) {
            dispatch({ type: 'NOTIFY', payload: { error: errMsg } });
        }
        if (!errMsg) {
            dispatch({ type: 'NOTIFY', payload: { loading: true } });
            const obj_imc = await postData('imc', userData);
            if (obj_imc.err) {
                dispatch({ type: 'NOTIFY', payload: { error: obj_imc.err } });
            }
            console.log('test test ', obj_imc);
            dispatch({ type: 'NOTIFY', payload: { success: obj_imc } });
            return dispatch({ type: 'UPDATE_IMC', payload: {payload: obj_imc} });
        }
        console.log(userData);

    }

    return (
        <Layout page={'formulaire'} >
            <div className="flex flex-col bg-gray-50">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <Resultat></Resultat>
                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                <div className="rounded-md shadow-sm -space-y-px" >
                                    <input type="number" name="taille" value={taille}
                                        pattern="^\d*(\.\d{0,2})?$" step="0.01"
                                        placeholder="Entrer votre taille"
                                        id="taille" label="Entrer votre taille (m)" className="appearance-none 
                                rounded-none relative block w-full px-3 py-2 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 
                                rounded-t-md focus:outline-none focus:ring-indigo-500 
                                focus:border-blue-500 focus:z-10 sm:text-sm" onChange={handleChange} />
                                </div>
                                <div className="rounded-md shadow-sm -space-y-px" >
                                    <input type="number" name="poids" step="0.01" pattern="^\d*(\.\d{0,2})?$" value={poids} placeholder="Entrer votre poids (Kg)"
                                        id="poids" label="Entrer votre poids" className="appearance-none 
                                rounded-none relative block w-full px-3 py-2 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 
                                rounded-t-md focus:outline-none focus:ring-indigo-500 
                                focus:border-blue-500 focus:z-10 sm:text-sm" onChange={handleChange} />
                                </div>
                                <div>
                                    <button className="group relative w-full flex 
                                justify-center py-2 px-4 border-2 text-sm
                                font-medium rounded-md bg-blue-300 hover:border-blue-300 
                                border-blue-400 text-blue-900 focus:bg-blue-400 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 
                                focus:ring-blue-500" type="submit">
                                        Calculer
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


