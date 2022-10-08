import {Link } from "react-router-dom"
function Header()
{
    return (
        <header>
            <div>
               Shortly
            </div>
            <div>
                <ul>
                <li className='navItem'><Link className="navLink" to="/">Home</Link></li>
                <li className='navItem'><Link className="navLink" to="/contactus">Contact Us</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;