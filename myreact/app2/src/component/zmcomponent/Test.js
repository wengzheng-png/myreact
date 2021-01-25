import { useEffect, useState } from "react"
import axios from "axios";


export default function Test() {
    let [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        console.log("effect");
        if(!userInfo) {
            axios(`http://192.168.2.113:7001/user/?username=18482048081`)
            .then(resp=> {
               console.log(resp);
               setUserInfo(resp.data[0].userInfo);
           }).catch(err => {
               console.log(err);
           })
        }
        
    })

    return(<div>
        <h1>{userInfo}</h1>
    </div>)
}