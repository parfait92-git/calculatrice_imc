import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';

export default function MyHeader(props) {
    return (
        <div >
            <Head>
                <title>
                    {props.page}
                </title>
            </Head>
            <header className="container-lg">
                <h2 className="text-3xl mb-2 text-blue-600 hover:text-blue-900">Indice De Masse Corporelle</h2>
                <div className="inline-grid grid-cols-2 gep-x-10 p-4">
                    <Link href="/">
                        <button className="bg-blue-200 p-3 m-3 rounded-3xl focus:rounded-2xl text-blue-900 focus:border-blue-300
                         hover:shadow-md focus:text-red-900 border-2 border-blue-300 ">
                            Accueil
                         </button>
                    </Link>
                    <Link href="/formulaire">
                        <button className="bg-blue-300 p-3 m-3 rounded-3xl 
                         hover:shadow-md hover:bg-blue-200 border-2 focus:rounded-2xl text-blue-900 focus:border-blue-300 focus:text-red-900 hover:border-blue-300 border-blue-400 ">
                            Calculer
                         </button>
                    </Link>
                </div>
            </header>
        </div>

    )
}