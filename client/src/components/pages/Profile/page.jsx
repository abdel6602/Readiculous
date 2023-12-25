import './style.css';
import HP from "C:/Users/ea/Desktop/HP.png";
import HPP from "C:/Users/ea/Desktop/HPPpng.png";
import Books from "C:/Users/ea/Desktop/Books.png";
import DonutChart from './DonutChart';

function Page(){
    const percentage = 55; 
    return(
        <div className='all'>
            <div className='container'>
                <div className='Header1'> 
                    <p>
                        Profile
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" class="bi bi-person-fill" 
                        viewBox="0 2 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </p>
                </div>
                <div className='Header2'>
                    <p>Progress</p>
                </div>
            </div>
            <div className='container'>
                <div className='FirstItem'>
                    <div>
                        <img src={HPP} className='img1'/>
                        <br/><br/><br/>
                        <input type='text' placeholder='Full Name' className='form'/><br/><br/><br/>
                        <input type='text' placeholder='Full Name' className='form'/><br/><br/><br/>
                        <input type='text' placeholder='Full Name' className='form'/>
                    </div><br/>
                    <div className='SContainer'>
                        <div className='SChild'>
                            <button className='rate'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F0CE65" class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 
                                    1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498
                                    4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 
                                    5s1 .672 1 1.5S10.552 8 10 8"/>
                                </svg>
                            </button>
                        </div>
                        <div className='SChild'>
                            <button className='rate'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F0CE65" class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 
                                    1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498
                                    4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 
                                    5s1 .672 1 1.5S10.552 8 10 8"/>
                                </svg>
                            </button>
                        </div>
                        <div className='SChild'>
                            <button className='rate'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F0CE65" class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 
                                    1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498
                                    4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 
                                    5s1 .672 1 1.5S10.552 8 10 8"/>
                                </svg>
                            </button>
                        </div>
                        <div className='SChild'>
                            <button className='rate'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F0CE65" class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 
                                    1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498
                                    4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 
                                    5s1 .672 1 1.5S10.552 8 10 8"/>
                                </svg>
                            </button>
                        </div>
                        <div className='SChild'>
                            <button className='rate'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F0CE65" class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 
                                    1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498
                                    4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 
                                    5s1 .672 1 1.5S10.552 8 10 8"/>
                                </svg>
                            </button>
                        </div>
                        <div className='SChild'>
                            <button className='rate'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F0CE65" class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 
                                    1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498
                                    4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 
                                    5s1 .672 1 1.5S10.552 8 10 8"/>
                                </svg>
                            </button>
                        </div>
                        <div className='SChild'>
                            <button className='rate'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F0CE65" class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 
                                    1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498
                                    4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 
                                    5s1 .672 1 1.5S10.552 8 10 8"/>
                                </svg>
                            </button>
                        </div>
                        <div className='SChild'>
                            <button className='rate'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F0CE65" class="bi bi-emoji-smile-fill"
                                viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 
                                    1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498
                                    4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 
                                    5s1 .672 1 1.5S10.552 8 10 8"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='TContainer'>
                        <div className='c1'>
                            <input type='text' placeholder="User's Role" className='form2'/><br/><br/><br/>
                            <input type='text' placeholder='Member Since' className='form2'/>
                        </div>
                        <div className='bag'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Gravida quis blandit turpis cursus. Ut pharetra sit amet aliquam id diam maecenas ultricies mi.
                        </div>
                    </div>
                </div>
                <div className='SecondItem'><br/>
                   <span className='span'>Reading Progress</span>
                <DonutChart percentage={percentage} />
                </div>
            </div><br/><br/><br/><br/>
            <p className='p'><b>Favourites Books</b></p>
            <div className='FContainer'>
                <div className='FB'>
                    <img src={HP} className='img'/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                    </p>
                </div>
                <div className='FB'>
                    <img src={HP} className='img'/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                    </p>
                </div>
                <div className='FB'>
                    <img src={HP} className='img'/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                    </p>
                </div>
            </div><br/><br/><br/><br/>
            <p className='p'><b>My Past Reviews</b></p>
            <div className='FContainer2'>
                <div className='FB2'>
                    <img src={HP} className='img2'/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </div>
                <div className='FB2'>
                    <img src={HP} className='img2'/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </div>
                <div className='FB2'>
                    <img src={HP} className='img2'/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </div>
            </div><br/><br/><br/><br/>
            <p className='p'><b>Groups</b></p>
            <div className='FContainer3'>
                <aside>
                    <img src={Books} alt='Books' className='img3'/>
                </aside><br/>
                <div className='FB3'>
                    <div className='GG'>
                        <img src={HP} className='img2'/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='GG'>
                        <img src={HP} className='img2'/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='GG'>
                        <img src={HP} className='img2'/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='GG'>
                        <img src={HP} className='img2'/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
            </div><br/><br/><br/><br/>
            <div className='PT'>
                MY BOOKS
            </div>
        </div>
    )
}

export default Page