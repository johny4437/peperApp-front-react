import React from 'react'
import './FormPrice.css'

export default function FormPrice() {
    return (
        <div className="container">
            <div className="pricebox">
                <form>
                    <p>Preço</p>
                     <input type="number" step="0.01" min="0.00"/>
                     <input type='button' value="adicionar"/>
                </form>
            </div>
        </div>
    )
}
