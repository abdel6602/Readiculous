import './style.css';
import HP from "C:/Users/ea/Desktop/HP.png";

function FavouriteBooks(){
    return(
        <div className='FContainer'>
            <div className='FB'>
                <img src={HP} className='img' alt='Image not found'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
            <div className='FB'>
                <img src={HP} className='img' alt='Image not found'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
            <div className='FB'>
                <img src={HP} className='img' alt='Image not found'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
        </div>
    )
}

export default FavouriteBooks