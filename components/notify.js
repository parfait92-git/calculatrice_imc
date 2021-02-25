import { useContext } from 'react';
import { DataContext } from '../pages/state/GlobalState';
import Loading from './loading';
import Toast from './toast';
import '../styles/Home.module.css'

const Notify = () => {
    const [state, dispatch] = useContext(DataContext);
    const {notify} = state;
    
    return (
        <>
            {notify.loading && <Loading color="success"/>}
            {notify.error && <Toast color="danger" content={notify.error} title='Opps erreur!'/>}
            {notify.success && <Toast color="success" content={"votre taille est de "+parseFloat(notify.success.taille).toFixed(2)+" m et votre poids est de "+parseFloat(notify.success.poids).toFixed(2)+" kg. votre Indice de Masse Corporelle est de "+ parseFloat(notify.success.imc).toFixed(2)+"."+ notify.success.remarque} title={"Succès de l\'opération!"}  />}
        </>
    )
}

export default Notify;