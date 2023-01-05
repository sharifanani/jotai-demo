import { usernameAtom } from "./state";
import { useAtom } from "jotai";
import React from "react";


export const ChildLogin = () => {
    const [username, setUsername] = useAtom(usernameAtom)
    return <input value={username} onChange={(e)=>{setUsername(e.currentTarget.value)}}></input>
}