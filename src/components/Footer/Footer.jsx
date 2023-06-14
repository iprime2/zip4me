import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            Welcome to zip4me

We aim to offer our customers a variety of the latest and Stylish Wearables. zip4me is The place to find the best Stylish Wearables for every taste and occasion. We thoroughly check the quality of our goods so that you only receive the best quality products. We offer all of this while providing excellent customer service and friendly support.

We at Wear.Style believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.

That is why we have satisfied customers all over the world. The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
           Zip4me

eMail : piyushguptabrj@gmail.com
Phone: +977-9845188342

Customer Care :

Please Allow 24 to 72 Hours Response Time
Call us on +977-9845188342
11am-5pm (Monday-Friday)
Click To Connect on WhatsApp
11am-5pm (Monday-Friday)
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>zip4me</span>
          <span className='copyright'>
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className='right'>
          <img src='/img/payment.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer
