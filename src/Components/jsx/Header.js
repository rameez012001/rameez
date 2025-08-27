import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { author } from '../assets/data/data';

export default function Header() {
    
    return (
        <header id='header'>
            <div className='header-content'>
                <h1 id='name'><Link to={"/"}>{author}</Link></h1>
                <a id="twitter-btn"  title="Follow @i__rameez on X" href="https://x.com/i__rameez"><i id="logo"></i><span className="label" id="l">Follow @i__rameez</span></a>
            </div>
            <Navigation />
        </header>
    );
}
