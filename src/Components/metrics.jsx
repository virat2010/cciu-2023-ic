"use client"
import { useState, useEffect } from "react";

export default function Metrics() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{JSON.parse(fetch("http://localhost:8080")).then(res => res.json()).then(data=>{setData(data);setLoading(false);}).catch(error=>{console.error(error);setLoading(false);});},[]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Mean: {data[0].mean}</p>
                    <p>Median: {data[0].median}</p>
                    <p>Mode: {data[0].mode}</p>
                </div>
            )}
        </div>
    );
}