import { useState } from 'react'

export const Home = () => {

    const [user, setUser] = useState(localStorage.getItem("username"))
    
    return ( 
        <h1>{`Witaj w mojej aplikacji ${JSON.parse(user)}`}</h1>
     );
}
 
