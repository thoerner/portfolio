const Tools = props => {
    return (
        <div style={styles.tools}>
            <h1>Tools</h1>
        </div>
    );
};

const styles = {
    tools: {
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
};

export default Tools;