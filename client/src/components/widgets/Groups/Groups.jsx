import './style.css';
import HP from "C:/Users/ea/Desktop/HP.png";
import Books from "C:/Users/ea/Desktop/Books.png";


function Groups(){
    return(
        <div className='FContainer3'>
            <aside>
                <img src={Books} alt='Image not found' className='img3'/>
            </aside><br/>
            <div className='FB3'>
                <div className='GG'>
                    <img src={HP} alt='Image not found'  className='img2'/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className='GG'>
                    <img src={HP} alt='Image not found'  className='img2'/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className='GG'>
                    <img src={HP} alt='Image not found'  className='img2'/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className='GG'>
                    <img src={HP} alt='Image not found'  className='img2'/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </div>
    )
}

export default Groups