import React from 'react';
import {useRouter} from "next/router";

const article = () => {
    const router = useRouter()
    const nomDeUrl = router.query.slug

    console.log(router)
    console.log(router.route)
    console.log(router.asPath)
    console.log(nomDeUrl)

    const pushToHome = () => {
        router.push('/')
    }

    return (
        <div style={{marginLeft: "5px"}}>
            <h1>Nom de l'URL : </h1>
            <h2>{nomDeUrl}</h2>
            <button onClick={pushToHome}>Go to Accueil</button>
        </div>
    );
};

export default article;