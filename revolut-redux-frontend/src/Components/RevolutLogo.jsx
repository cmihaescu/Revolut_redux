import { Link } from 'react-router-dom';
import { ReactComponent as RevolutSVG } from '../assets/revolut.svg';

 export const RevolutLogo = () => {

    return (
        <Link to={'/'}><RevolutSVG className='revolut-logo' /></Link>
    )
}

