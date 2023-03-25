import { useState, useEffect } from 'react';
import servicesPng from '../assets/services.png';
import { useWindowDimensions } from '../utils/tools';

const Services = props => {
    const [isMobile, setIsMobile] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [width]);
    
    return (
        <div style={styles.services}>
            <div style={isMobile ? styles.cardMobile : styles.card}>
                <img src={servicesPng} alt="Services" width="100%" />
            </div>
        </div>
    );
};

const styles = {
    services: {
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
        padding: '2rem',
        borderRadius: '0.25rem',
        minHeight: '25vh',
        minWidth: '50vw',
    },
    cardMobile: {
        backgroundColor: '#000',
        padding: '2rem',
        borderRadius: '0.25rem',
        minHeight: '25vh',
        minWidth: '90vw',
    },
};

export default Services;