import './style.css';
import PastReviews from '../../widgets/PastReviews/PastReviews';
import FavouriteBooks from '../../widgets/FavouriteBooks/FavouriteBooks';
import Groups from '../../widgets/Groups/Groups';
import PP from '../../widgets/PP/PP';

function Page(){
    return(
        <div className='all'>
            <PP/>
            <br/><br/><br/><br/>
            <p className='p'><b>Favourites Books</b></p>
            <FavouriteBooks/>
            <br/><br/><br/><br/>
            <p className='p'><b>My Past Reviews</b></p>
            <PastReviews/>
            <br/><br/><br/><br/>
            <p className='p'><b>Groups</b></p>
            <Groups/>
            <br/><br/><br/><br/>
            <div className='PT'>
                MY BOOKS
            </div>
        </div>
    )
}

export default Page