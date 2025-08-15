import { useEffect,useState } from "react";
function useCurrencyinfo(currency) {
    const [data, setdata] = useState({});
    // {is initialized so that app not explide in case no data retrun fron the api }
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=>{setdata(response[currency])})
         console.log(data)
    },[currency,data])
    console.log(data)
    console.log('this functions run')
    return data
}
export default useCurrencyinfo