import React from 'react';
import Image from "next/image";
import img1 from "../public/images/404_2.jpg"
import {useRouter} from "next/router";

const error = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div className="error">
            <h1>Ooooops la boulette !</h1>

            <Image
                layout="responsive"
                src={img1}
                placeholder="blur"
                width="300"
                height="300"
                alt="erreur 404"/>
        </div>
    );
};

export default error;