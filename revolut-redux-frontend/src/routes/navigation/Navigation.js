import './Navigation.css'
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <div className="landing-page">
           <Link to='/account'>
            <button className='navigation-button'>Account</button>
           </Link>
           <Link to='/shop'>
            <button className='navigation-button'>Shop</button>
           </Link>
        </div>
    )
}
export default Navigation;