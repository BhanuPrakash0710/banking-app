import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    
    <div className="footer">
  
    <div className='barnch'>
      <h3>Our branches</h3>
      Hyderabad<br/>
      Mumbai<br/>
      Bengaluru<br/>
    </div>

    <div className="loans">
      <h3>Loans</h3>
      House Loan <br/>
      Education Loan<br/>
      Farming Loan <br/>
      Land Loan<br/>
    </div>

    <div className="contact">
      <h3>Contact Us</h3>
        <p>Phone: +91654230157</p>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"><p>Email: vashakadaru@gmail.com</p></a>
      
    </div>
    <div className="follow">
    <h3>Follow us on</h3>
      <a href="https://www.instagram.com/varsha_kadaru"><i class="fa fa-instagram" style={{fontSize:"28px",color:"rgb(218, 211, 211)"}}></i></a>
      <a href="https://www.twitter.com/Varsha_kadaru"><i class="fa fa-twitter" style={{fontSize:"28px",color:"rgb(221, 219, 219)"}}></i></a>
      <a href="https://www.youtube.com/Filmymoji"><i class="fa fa-youtube-play" style={{fontSize:"28px",color:"rgb(219, 207, 207)"}}></i></a>

    </div>
</div>
</>
  )
}

export default Footer
