import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Hippo from "../assets/hippo.svg"
import {useWindowDimensions} from "../utils/tools";

const MenuOverlay = props => {
  return (
    <div style={props.menuOpen ? styles.overlay : styles.overlayHidden}
      onClick={() => props.onDismiss()}
    >
      <div style={styles.overlayContent}>
        <Link to="/" style={styles.overlayLink}>Home</Link>
        <Link to="/tools" style={styles.overlayLink}>Tools</Link>
        <Link to="/mint" style={styles.overlayLink}>Mint</Link>
      </div>
    </div>
  )
}

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav style={styles.navbar}>
      <MenuOverlay onDismiss={handleMenuClick} menuOpen={menuOpen} />
      <div style={styles.logoContainer}>
        <a href="#"><img src={Hippo} alt="Hippo" width={ width > 768 ? 75 : 50 } /></a>
        {" "}<a href="#" style={{color: "white"}}><h2>crypt<span style={{color: '#cc00ff'}}>0</span>potam<span style={{color: '#cc00ff'}}>.</span>us</h2></a>
      </div>
      {width > 768 && (
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/tools" style={styles.link}>Tools</Link>
          <Link to="/mint" style={styles.link}>Mint</Link>
        </div>
      )}
      {width <= 768 && (
        <div style={styles.hamburgerBun} onClick={() => handleMenuClick()}>
          <div style={!menuOpen ? styles.hamburger : styles.openHamburgerTop}></div>
          <div style={!menuOpen ? styles.hamburger : styles.openHamburgerMiddle}></div>
          <div style={!menuOpen ? styles.hamburger : styles.openHamburgerBottom}></div>
        </div>
      )}
    </nav>
  );
}

const hamburgerTransition = 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease'

const styles = {
    logo: {
        width: '10vw',
        maxWidth: '75px',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: '1rem 1.5rem',
        height: '4rem',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    link: {
        marginLeft: '1rem',
        textDecoration: 'none',
        color: 'white',
    },
    hamburger: {
        width: '2rem',
        height: '0.25rem',
        backgroundColor: 'white',
        margin: '0.25rem',
        transition: hamburgerTransition,
        transformOrigin: '4px 0px',
    },
    hamburgerBun: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1,
        transition: 'opacity 0.5s ease',
    },
    overlayHidden: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        opacity: 0,
        pointerEvents: 'none',
        zIndex: -1,
        transition: 'opacity 0.5s ease',
    },
    overlayContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayLink: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '2rem',
        margin: '1rem',
    },
    openHamburgerTop: {
        width: '2rem',
        height: '0.25rem',
        backgroundColor: 'white',
        margin: '0.3rem',
        transform: 'rotate(45deg) translate(-2px, -1px) scale(1.2, 1)',
        zIndex: 1,
        transformOrigin: '4px 0px',
        transition: hamburgerTransition,
    },
    openHamburgerMiddle: { 
        width: '2rem',
        height: '0.25rem',
        backgroundColor: 'white',
        margin: '0.25rem',
        transform: 'rotate(0deg) scale(0.2, 0.2)',
        transformOrigin: '4px 0px',
        opacity: 0,
        transition: hamburgerTransition,
    },
    openHamburgerBottom: {
        width: '2rem',
        height: '0.25rem',
        backgroundColor: 'white',
        margin: '0.1rem',
        transform: 'rotate(-45deg) translate(0, -5px) scale(1.2, 1)',
        transformOrigin: '4px 0px',
        zIndex: 1,
        transition: hamburgerTransition,
    },
};