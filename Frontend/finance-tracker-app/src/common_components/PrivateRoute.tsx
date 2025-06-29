import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from '../store/index'

export const PrivateRoute = () => {
    const user = useSelector((state: RootState)=> state.auth.user) ;
    return user ? <Outlet /> : <Navigate to='/login' />;
}
