import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import 'semantic-ui-css/semantic.min.css';
import {DataProvider} from './state/GlobalState';
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
