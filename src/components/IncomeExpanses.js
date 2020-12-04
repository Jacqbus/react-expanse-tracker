import React, {useContext} from 'react'
import {GlobalContext} from './../context/GlobalState'

export const IncomeExpanses = () => {
  const {transactions} = useContext(GlobalContext);
  const totalIncome = transactions.reduce((prevVal, item) => prevVal += (item.amount > 0) ? item.amount : 0, 0);
  const totalExpanses = transactions.reduce((prevVal, item) => prevVal += (item.amount < 0) ? item.amount : 0, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">${totalIncome.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expanse</h4>
        <p id="money-minus" className="money minus">{totalExpanses < 0 ? '-' : ''}${Math.abs(totalExpanses).toFixed(2)}</p>
      </div>
    </div>
  )
}
