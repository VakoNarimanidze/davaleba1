import './Mid.css'
import lemons from '../../pictures/Photolemons.png'
import carrots from '../../pictures/Photocarrots.png'
import leaves from '../../pictures/Photoleaves.png'
import potatoes from '../../pictures/Photopotatoes.png'
import raspberries from '../../pictures/Photoraspberries.png'
import oranges from '../../pictures/photooranges.png'

export default function Mid() {
  return (
    <div className="mid-grid">
      <div className="first-box">
        <img src={lemons} alt="" />
        <h4>Green & Tasty Lemon</h4>
        <h6>Fruits</h6>
      </div>
      <div className="second-box">
        <img src={carrots} alt="" />
        <h4>Organic Carrot</h4>
        <h6>Fruits</h6>
      </div>
      <div className="third-box">
        <img src={leaves} alt="" />
        <h4>Organic Betel Leaf</h4>
        <h6>Fruits</h6>
      </div>
      <div className="forth-box">
        <img src={potatoes} alt="" />
        <h4>Natural Tommato</h4>
        <h6>Fruits</h6>
      </div>
      <div className="fifth-box">
        <img src={raspberries} alt="" />
        <h4>Black Raspberry</h4>
        <h6>Fruits</h6>
      </div>
      <div className="sixth-box">
        <img src={oranges} alt="" />
        <h4>Honey Orange</h4>
        <h6>Fruits</h6>
      </div>
    </div>
  );
} 

     
// export default Mid