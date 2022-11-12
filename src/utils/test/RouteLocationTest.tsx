import {useLocation} from "react-router-dom";

const  RouteLocationTest = () =>{
    const {pathname} = useLocation()
    return <div data-testid='pathname'>{pathname}</div>
}

export default RouteLocationTest