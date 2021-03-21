import React, {useState, useEffect} from 'react';
import {Line, LineChart, Tooltip} from 'recharts';

const LeGraph = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [items, setItems] = useState([]);

    const data = [];
    const apiURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=GJQR24KKEH7SX3R6";

    useEffect(() => {
        fetch(apiURL)
        .then(res => res.json())
        .then (
            (result) => {
                for (var instance in result["Weekly Time Series"] ) {
                    var mydata = (result["Weekly Time Series"][instance])
                    mydata.date = instance
                    data.push(mydata)
                }
                setItems(data.reverse())
            },
            (error) => {
                setIsLoading(true);
                setError(error);
            }
        )
    },[])

    return (
        <div>
           <LineChart width={700} height={250} margin={{ top: 150, right: 30,
              left: 20, bottom: 5 }} data={items}>
               <Line dot={false} type="monotone" dataKey="1. open" 
                 stroke="rgb(0,200,5)" yAxisId="100" />
            </LineChart>
        </div>
    )
}

export default LeGraph
