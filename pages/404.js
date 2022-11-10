import React from 'react';
import Image from "next/image";
import img1 from "../public/images/404_2.jpg"

const error = () => {
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