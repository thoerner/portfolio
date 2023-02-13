import { useState } from "react";
import Hippo from "../assets/hippo.svg"
import useWindowDimensions from "../utils/winsize";

const MenuOverlay = props => {
  return (
    <div style={styles.overlay}
      onClick={() => props.onDismiss()}
    >
      <div style={styles.overlayContent}>
        <a style={styles.overlayLink} href="/">Home</a>
        <a style={styles.overlayLink} href="/tools">Tools</a>
        <a style={styles.overlayLink} href="/#contact">Contact</a>
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
      {menuOpen && <MenuOverlay onDismiss={handleMenuClick}/>}
      <div style={styles.logoContainer}>
        <img src={Hippo} alt="Hippo" width="75" />
        {" "}<h2>crypt<span style={{color: '#cc00ff'}}>0</span>potam<span style={{color: '#cc00ff'}}>.</span>us</h2>
      </div>
      {width > 768 && (
        <div style={styles.links}>
          <a style={styles.link} href="/">Home</a>
          <a style={styles.link} href="/tools">Tools</a>
          <a style={styles.link} href="/#contact">Contact</a>
        </div>
      )}
      {width <= 768 && (
        <div style={styles.hamburgerBun} onClick={() => handleMenuClick()}>
          <div style={styles.hamburger}></div>
          <div style={styles.hamburger}></div>
          <div style={styles.hamburger}></div>
        </div>
      )}
    </nav>
  );
}

const styles = {
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
};