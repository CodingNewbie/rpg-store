import Gold from "./Gold";
import "./Navbar.css";

function Navbar({ gold }) {
    return (
        <div className="navbar">
            <img className="profile" src="/images/profile.png" alt="" />
            <nav className="nav-links">
                <img className="resource" src="/images/life.png" alt="" />
                <Gold gold={gold} />
                <img className="resource" src="/images/gem.png" alt="" />
            </nav>
        </div>
    );
}

export default Navbar;
