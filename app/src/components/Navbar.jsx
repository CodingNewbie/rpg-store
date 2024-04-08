import Gold from "./Gold";
import "./Navbar.css";

function Navbar({ gold }) {
    return (
        <div className="navbar">
            <div className="profile">
                <img src="/images/profile.png" alt="" />
                <div className="wheel-container">
                    <img
                        src="/images/profile-wheel.png"
                        alt=""
                        className="profile-wheel"
                    />
                    <img
                        src="/images/level.png"
                        alt=""
                        className="profile-level"
                    />
                </div>
            </div>

            <nav className="nav-links">
                <img className="resource" src="/images/life.png" alt="" />
                <Gold gold={gold} />
                <img className="resource" src="/images/gem.png" alt="" />
            </nav>
        </div>
    );
}

export default Navbar;
