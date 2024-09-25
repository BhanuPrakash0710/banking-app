import React from 'react'
import "./Main.css"
const Main = () => {
  return (
    <div>
      <div class="body">
      <div class="wel">
        <h1 className='header'>Sparks Bank</h1><br/>
        
        <p className='hero'>Sparks Bank offers different type of accounts to
          meet your financial goals <br/>and secure your future.
           
          Choose from our wide range of deposit products<br/> that are
           specifically designed to keep your unique requirements in mind.</p>
           <h3 className='service'>Our best services</h3>
          <ul className='list'>
            <li>
              Excellent Security
            </li>
            <li>
              Net Banking facilities
            </li>
            <li>
              Loans with less interest rates
            </li>
          </ul>
           <button className='btn'>Read More</button>
      </div>
      <div className="imgCont">
        <img src='https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-savings-public-finance_516790-1210.jpg?w=2000' alt=""/>
      </div>

      </div>
    </div>
  )
}

export default Main
