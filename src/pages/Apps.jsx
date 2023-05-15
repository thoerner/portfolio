const Apps = props => {

    return (
        <div style={styles.apps}>
            <div style={styles.card}>
                <h2>Gitbook AI</h2>
                <p style={styles.subtitle}>A next.js app that uses Langchain's Gitbook document loader and sends it to a Pinecone vector store where it can be queried using OpenAI's GPT-4 API.</p>
                <p>A tool to help you make sense of a few Decentralized Finance (DeFi) protocols and their tokenomics.</p>
                <a href="https://gitbook-ai.crypt0potam.us/" target="_blank" rel="noreferrer">
                    <button style={styles.button}>Go to Gitbook AI</button>
                </a>
            </div>
            <div style={styles.card}>
                <h2>Radi Wizard AI</h2>
                <p>A collection of AI-powered chat bots with fun and interesting personalities, including a text-based AI dungeon crawl!</p>
                <a href="https://radi.crypt0potam.us/" target="_blank" rel="noreferrer">
                    <button style={styles.button}>Go to Radi Wizard AI</button>
                </a>
            </div>
        </div>
    );
};

const styles = {
    apps: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 20px',
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '7rem',
        textAlign: 'center',
        color: '#fff',
        fontSize: '1.2rem',
        lineHeight: '1.5',
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        fontSize: '1.2rem',
        border: 'none',
        borderRadius: '0.25rem',
        marginBottom: '0.5rem',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1.2rem',
        border: 'none',
        borderRadius: '0.25rem',
        backgroundColor: '#fff',
        color: '#000',
        cursor: 'pointer',
    },
    address: {
        marginTop: '1rem',
        backgroundColor: '#c0f',
        color: '#000',
        fontWeight: '600',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        minHeight: '2rem',
        lineHeight: '2rem',
        cursor: 'pointer',
    },
    noAddress: {
        marginTop: '1rem',
        padding: '0.5rem',
        minHeight: '2rem',
        lineHeight: '2rem',
    },
    card: {
        backgroundColor: '#000',
        padding: '2rem',
        borderRadius: '0.25rem',
        minHeight: '25vh',
        minWidth: '25vw',
        maxWidth: '90vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
    },
    subtitle: {
        fontSize: '1rem',
        lineHeight: '1.5',
        marginBottom: '1rem',
        color: '#c0f',
    }
};

export default Apps;