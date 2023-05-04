import './Footer.css'
import leaf from '../../pictures/leaf-img.png'
import ig from '../../pictures/Insta.png'
import fb from '../../pictures/facebook.png'
import twitter from '../../pictures/twitter.png'
import pinterest from '../../pictures/pinterest.png'

export default function Footer() {
    return (
       <footer>
    <div className="Fbox-1">
       <h3> Contact Us</h3>
       <h5>Email</h5>
       <p>needhelp@Organia.com</p>
       <h5>Phone</h5>
       <p className="nums">666888888</p>
       <h5 className="address">Address</h5>
       <p>88 road, borklyn street, USA</p>
    </div>
    <div className="after"></div>
    <div className="Fbox-2">
        <img src={ leaf} alt="foorer-leaf-img"  className='leaf'/>
      <h3>Organick</h3>
      <p>Simply dummy text of the printing and typesetting industry. <span>Lorem Ipsum simply dummy text of the printing</span></p>
      <div className="footer-links">
        <a href="https://www.instagram.com/" target='_blank'><img src={ig} alt="instagram-logo" /></a>  
        <a href="https://www.facebook.com/" target='_blank' ><img src={fb} alt="facebook-logo" /></a>
        <a href="https://twitter.com/?tw_p=twt" target='_blank'><img src={twitter} alt="twitter-logo" /></a> 
        <a href="https://www.pinterest.com/" target="_blank"><img src={pinterest} alt="pinterest-logo" /></a> 
      </div>
    </div>
    <div className="Fbox-3">
      <h3>Utility Pages</h3>
      <p>Style Guide</p>
      <p>404 Not Found</p>
      <p>Password Protected</p>
      <p>Licenses</p>
      <p>Changelog</p>
    </div>
  </footer>
    )
}