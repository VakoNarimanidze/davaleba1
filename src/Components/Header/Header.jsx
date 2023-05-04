import './Header.css'
import logo1 from '../../pictures/Photo.png'
import logo2 from '../../pictures/Photo-1.png'

export default function Header() {
    return (
        <div className="container">
             <div>
            <h1>Portfolio Standard</h1>
            <img src={logo1} className='logo1' alt="" />
            <img src={logo2} className='logo2' alt="" />
        </div>
        </div>
       
    )
}

