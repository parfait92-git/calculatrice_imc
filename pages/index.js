import Layout from './components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Layout page={'calcul de imc'} >
         <h4 className="text-2xl mb-2 text-blue-600 hover:text-blue-900">Connaitre votre Indice de Masse Corporelle est très inportant. Appuyez sur Calculer pour commencer!</h4>
        <Image src="/main.jpg" alt="footer-pic" className="rounded-3xl object-cover" quality={100} width="700" height="400"/>
      </Layout>
    </div>
  )
}

