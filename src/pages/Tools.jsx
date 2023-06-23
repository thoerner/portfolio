import { useState, useEffect } from "react";
import { getEnsAddress } from "../utils/alchemy";
import toast from "react-hot-toast";
import {useWindowDimensions, shortenAddress} from "../utils/tools";

const Tools = props => {
    const [ensAddress, setEnsAddress] = useState('');
    const [ethAddress, setEthAddress] = useState('');
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (ensAddress.endsWith('.eth')) {
            handleResolveEnsAddress();
        } else {
            setEthAddress('');
        }
    }, [ensAddress])

    const handleEnsAddressChange = e => {
        setEnsAddress(e.target.value);
    }

    const handleResolveEnsAddress = async () => {
        const ethAddress = await getEnsAddress(ensAddress);
        setEthAddress(ethAddress);
    }

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(ethAddress);
        toast.success('Copied to clipboard!');
    }

    return (
        <div style={styles.tools}>
            <div style={styles.card}>
                <h2>Resolve ENS Address</h2>
                <p>Enter an ENS address to resolve it to an Ethereum address.</p>
                <input style={styles.input} type="text" placeholder="e.g. crypt0potamus.eth" value={ensAddress} onChange={handleEnsAddressChange} />
                <p style={ethAddress !== '' ? styles.address : styles.noAddress} onClick={handleCopyAddress}>
                    { width > 512 ? ethAddress : ethAddress !== '' ? shortenAddress(ethAddress) : null }
                </p>
            </div>
        </div>
    );
};

const styles = {
    tools: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 20px',
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '7rem',
        textAlign: 'center',
        color: '#F2E9E4',
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
        backgroundColor: '#F2E9E4',
        color: '#22223B'
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
        backgroundColor: '#9A8C98',
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
        backgroundColor: '#4A4E69',
        padding: '2rem',
        borderRadius: '0.25rem',
        minHeight: '25vh',
        minWidth: '25vw',
        maxWidth: '90vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem'
    },
    subtitle: {
        fontSize: '1rem',
        lineHeight: '1.5',
        marginBottom: '1rem',
        color: '#c0f',
    }
};

export default Tools;