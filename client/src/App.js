import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/appRouter";
import NavBar from "./components/navBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";



const App = observer(() => {
    const {user} = useContext(context)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            check().then( data => {
                user.setUser(data)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        }, 1000)
    }, [])

    if (loading){
        return <Spinner animation={"grow"} />
    }

  return (
    <BrowserRouter>
        <NavBar/>
<AppRouter/>
    </BrowserRouter>
  );
})

export default App;
