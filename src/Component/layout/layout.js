import { Outlet } from "react-router-dom";
import { ReactComponent as BurgerMenu } from '../leftBar/icons/burger.svg';

const Layout = ({menuHandler}) => {
    return(
        <>
            <div
            onClick={() => menuHandler(true)}
            className='menu_burger'>
                <BurgerMenu/>
            </div>
        <Outlet />
        </>
    )
}
export default Layout