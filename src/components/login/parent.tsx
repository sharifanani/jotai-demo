import { usernameAtom } from "./state";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { ChildLogin } from "./child";


export const ParentLogin = () => {
    const [username,] = useAtom(usernameAtom)
    useEffect(()=>{
        if(username.length > 10) {
            alert('long username!')
        }

    }, [username])
    return <div>
        <p>The username is: {username}</p>
        <ChildLogin/>
    </div>
}