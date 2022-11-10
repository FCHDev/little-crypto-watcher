import React, {useEffect, useRef, useState} from 'react';
import styles from "../styles/Home.module.css";
import {FetchFunctionsBNB, FetchFunctionsBTC, FetchFunctionsETH} from "../functions/fetchFunctions";
import {bitcoinLogo, ethLogo, binanceLogo} from "../assets/svg/svgLogos"

const Contact = () => {
    const url = 'https://blockchain.info/ticker'
    const urlCrypto = "https://api.coingecko.com/api/v3/exchange_rates"
    const [bitcoin, setBitcoin] = useState(0)
    const [eth, setEth] = useState(0)
    const [binance, setBinance] = useState(0)
    const [invest, setInvest] = useState(0)
    const [investEth, setInvestEth] = useState(0)
    const [investBinance, setInvestBinance] = useState(0)
    const investRef = useRef()


    useEffect(() => {
        FetchFunctionsBTC(url, setBitcoin)
        FetchFunctionsETH(urlCrypto, setEth)
        FetchFunctionsBNB(urlCrypto, setBinance)
    }, [])

    const handleInvestCalculator = () => {
        const total = investRef.current.value/bitcoin
        const totalEth = investRef.current.value/eth
        const totalBinance = investRef.current.value/binance
        setInvest(total)
        setInvestEth(totalEth)
        setInvestBinance(totalBinance)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Live Converter</h1>
            <div className={styles.mobileConvert}>

            <form className={styles.formInvest}>
                <input type="text" placeholder="Saisissez un montant" ref={investRef} onChange={handleInvestCalculator}/>
            </form>

            <div className={styles.currencyTitle}>{bitcoinLogo}
                 <span style={{color:"#21897E"}}>{invest.toFixed(2)}</span> </div>

            <div className={styles.currencyTitle}>{binanceLogo}
                 <span style={{color:"#750D37"}}>{investBinance.toFixed(2)}</span> </div>

            <div className={styles.currencyTitle}>{ethLogo}
                 <span style={{color:"#0070f3"}}>{investEth.toFixed(2)}</span> </div>
            </div>

            <span style={{marginTop: "30px"}}>Cours du Bitcoin : <strong>{bitcoin.toLocaleString("fr-FR")}€</strong></span>
        </div>
    );
};

export default Contact;