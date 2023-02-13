const Mint = props => {
    return (
        <div style={styles.mint}>
            <div style={styles.card}>
                <span style={styles.text}>Coming soon!</span>
            </div>
        </div>
    );
};

const styles = {
    mint: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '4rem',
        textAlign: 'center',
        color: '#fff',
        fontSize: '1.2rem',
        lineHeight: '1.5',
    },
    card: {
        backgroundColor: '#000',
        padding: '1rem',
        borderRadius: '0.25rem',
        minHeight: '25vh',
        minWidth: '25vw',
        maxWidth: '90vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: '2.5rem',
        padding: '2rem',
    },
};

export default Mint;