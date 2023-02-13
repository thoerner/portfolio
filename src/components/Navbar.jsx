import Hippo from "../assets/hippo.svg"

export const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={Hippo} alt="Hippo" width="75" />
        {" "}<h2>crypt<span style={{color: '#cc00ff'}}>0</span>potam<span style={{color: '#cc00ff'}}>.</span>us</h2>
      </div>
      <div style={styles.links}>
        <a style={styles.link} href="/">Home</a>
        <a style={styles.link} href="/tools">Tools</a>
        <a style={styles.link} href="/#contact">Contact</a>
      </div>
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
};