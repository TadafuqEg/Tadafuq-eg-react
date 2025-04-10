import img1 from "../../puplic/assets/footer-logo.png"
import img2 from "../../puplic/assets/facebook.png"
import img3 from "../../puplic/assets/x.png"
import img4 from "../../puplic/assets/linkedin.png"

const Footer = () => {
  return (
    <div className='footer'>
          <div className='footer-top flex'>
            <img src={img1} />
            <div className='footer-information flex'>
                <div className='address'>
                    <h5>Address</h5>
                    <p>Al Mina Rd.– Silver wave tower<br /> Office 701 - Abu Dhabi, UAE</p>
                </div>
                <div className='phone'>
                    <h5>Phone</h5>
                    <p>+971 2 447 2900</p>
                </div>
                <div className='email'>
                    <h5>E-mail</h5>
                    <p> info@tadafuq.ae</p>
                </div>
            </div>
          </div>
          <div className='footer-bottom flex justify-between'>
             <div className='footer-social'>
                <p>Follow Us</p>
                <div className='social-links flex'>
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                </div>
             </div>
             <div className='footer-copy'>
                <p>Copyright © 2025 Tadafuq Information Technology</p>
             </div>
          </div>
    </div>    
  );
};

export default Footer;