'use client'
import { useState } from "react"
export default function cart() {
    const [count,setCount]=useState("0")
    const [sub,setSub]=useState("0")
    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content m-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Elderly Tracking Device</h2>
                    <p>Track your elderly family.</p>
                    <div className="card-actions justify-end">
                        <input type="number" placeholder="Quantity" onChange={count=>setCount(count.target.value)} className="input" min="0" max="10" />
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-neutral text-neutral-content m-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Subscription</h2>
                    <p>Provide service to your product. Life-time purchase.</p>
                    <div className="card-actions justify-end">
                        <input type="number" placeholder="Quantity" onChange={sub => setSub(sub.target.value)} className="input" min="0" max="10" />
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Cost of Items:</h2>
                    <p id="price">${((11.99) * count + (sub*10)).toFixed(2)}</p>
                    <h2 className="card-title">Tax:</h2>
                    <p id="price">${(((11.99) * count) * 0.04).toFixed(2)}</p>
                    <h2 className="card-title">Total Price:</h2>
                    <p id="price">${(((11.99) * count) * 1.04).toFixed(2)}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    )
}