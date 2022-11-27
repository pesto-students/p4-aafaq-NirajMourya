import {Link } from "react-router-dom"
function Header()
{
    return (
        <header className="header">
            <div className="SiteName">
               Shortly
            </div>
            <div>
                <ul className="menu">
                <li className='navItem'><Link className="menulinks" to="/">Home</Link></li>
                <li className='navItem'><Link className="menulinks" to="/contactus">Contact Us</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;