import React from 'react';

export function FetchFunctionsBTC(url, action) {
    fetch(url).then((res) => res.json()).then(data => {
        return action(data.EUR.last)})
}

export function FetchFunctionsETH(url, action) {
    fetch(url).then((res) => res.json()).then(data => {
        return action(data.rates.eth.value)})
}

export function FetchFunctionsBNB(url, action) {
    fetch(url).then((res) => res.json()).then(data => {
        return action(data.rates.bnb.value)})
}



