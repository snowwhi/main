# https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/pkr.json
## first step made a custom hook which use react usestate hook to set data comming from Api
### use { } as initial value so that app donot crash in case empty data retrun and things remain irrteratble
## use fetch and then method for api handling
## second step setting up the background
## imported lottie in json format 
## resize using div do nothing
## use React.cloneElement(lottie,{style:{ all the styles}})
## background set
## making inputbox Component
## using different variables like amount ,label,onamountchange etc for different purpose
## using Currencydisabled=false,amountdisable=false these kind of varaibles are used for production sites for optimization
## callback around 100% return strings so use Number()
## onChange={(e)=>{OnamountChange && OnamountChange(Number(e.target.value))}
## if varaible retrun nothing app won't crash because of the typesafety
## using .map(()=>()) for showing list of currency option
## using key={uniquely identified, id or index}
## for better optimization of irrteration of object
##  {CurrencyOptions.map((currency)=> (
                        <option
                        key={currency} 
                        value={currency}>
                        {currency}
                        </option>
                    ))}
## for this key currency is used as it is always different
## step3 
##  making a export file for all the component so there is no need to import each seperately
