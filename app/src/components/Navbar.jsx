import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <img className="profile" src="/images/profile.png" alt="" />
            <nav className="nav-links">
                <img className="resource" src="/images/life.png" alt="" />
                <img className="resource" src="/images/coin.png" alt="" />
                <img className="resource" src="/images/gem.png" alt="" />
            </nav>
        </div>
    );
}

export default Navbar;
