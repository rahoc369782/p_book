import { Routes, Route, Navigate, useLocation, useParams, useNavigate } from "react-router-dom";
import { pointers_routes } from "./pointersroutes";
import { is_authenticated } from "../utility/security/session";

const ManagedRoutes = () => {
    let location = useLocation();
    let navigate = useNavigate();
    console.log(is_authenticated())
    return (
        <Routes>
            {
                pointers_routes.map(({ status, component: Component, path, restricted }) => {
                    if (status) {
                        return (
                            <Route key={path} path={path} element={is_authenticated() ? <Component location={location} /> : <Navigate to="/login" location={location} navigate={navigate} state={{ from: location.pathname }} />} />
                        )
                    } else {
                        return (
                            <Route key={path} path={path} element={is_authenticated() && restricted ? <Navigate to="/" /> : <Component navigate={navigate} location={location} />} />
                        )
                    }

                })
            }
        </Routes>
    )

}

export { ManagedRoutes }