import MyHeader from "./header";
import MyFooter from './footer';
import Notify from "./notify";
export default function Layout({ children, page }) {
    return (
        <div>
            <div className="bg-blue-100 pt-5 text-center min-h-screen">
            <MyHeader page={page}></MyHeader>
            <Notify/>
            <div className="pt-4 mx-20" >{children}</div>
        </div>
        <MyFooter></MyFooter>
        </div>
    )
}