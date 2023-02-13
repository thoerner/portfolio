import Twitter from "../assets/twitter.svg";
import Email from "../assets/email.svg";

const Home = props => {
    return (
        <div style={styles.home}>
            <div style={styles.card}>
                <span style={styles.heading}>About Me</span>
                <p>
                    Hi, I'm crypt0potamus, a <span style={styles.highlight}>full-stack software and web developer</span> with a 
                    passion for utilizing the latest technologies to create 
                    innovative <span style={styles.highlight}>web3</span> and <span style={styles.highlight}>React</span> applications.
                    I specialize in the development of <span style={styles.highlight}>smart contracts</span> and 
                    decentralized applications (<span style={styles.highlight}>dApps</span>) that utilize <span style={styles.highlight}>cutting-edge AI technology</span>
                    {" "}and even incorporate it as a key feature.
                </p>
                <p>
                    I have a strong understanding of web3 technologies, AI and machine learning, 
                    and the ability to write <span style={styles.highlight}>secure, scalable, and maintainable code</span>. 
                    My goal is to push the boundaries of what is possible with these 
                    technologies and create truly groundbreaking web3 and AI-powered applications.
                </p>
                <p>
                    I am always open to new projects and opportunities to work with companies 
                    and individuals who share my <span style={styles.highlight}>passion for innovative technology</span>. Whether 
                    you need assistance with a project or are looking for a talented developer 
                    to <span style={styles.highlight}>bring your ideas to life</span>, I would be honored to help.
                </p>
            </div>
            <div style={styles.card}>
                <span style={styles.heading}>Showcase</span>
                <p>
                    I am proud of the work I have done, and I love to share my
                    projects with others. Here are some of my recent projects:
                </p>
                <ul>
                    <li>
                        <a href="https://app.goatgauds.com/" target="_blank" rel="noreferrer">Goat Gauds</a>: 
                        A collection of 2,222 unique NFTs, designed
                        by John Born and friends. Each Goat Gauds NFT is
                        created from a unique combination of traits, that were
                        combined using <span style={styles.highlight}>generative art algorithms</span>. I
                        created the <span style={styles.highlight}>smart contract</span> to mint the NFTs and the 
                        {" "}<span style={styles.highlight}>staking contract</span> to allow users to stake their Goat
                        Gauds NFTs and earn rewards in the form of <span style={styles.highlight}>FLWR$ tokens</span>.
                        Additionally, I created an <span style={styles.highlight}>AI-powered Discord chat bot</span>, aka 'Goat Bot', 
                        that allows users to interact with the Goat Gauds NFT collection,
                        and a <span style={styles.highlight}>voting system</span> that allows NFT holders to vote on important decisions
                        for the Goat Gauds community.
                    </li>
                    <li>
                        <a href="https://www.googlyeyedrockclub.com/" target="_blank" rel="noreferrer">Googly Eyed Rock Club</a>: 
                        A collection of physical rocks with googly eyes curated by crypto influencer Gabriel Haines.
                        I created the smart contract to mint the NFTs through an innovative
                        {" "}<span style={styles.highlight}>Last Price Dutch Auction</span>, where the price of the NFTs
                        decreased over time until the auction ended. Anyone that overbid
                        the final bid was refunded the difference.
                    </li>
                    <li>
                        <a href="https://www.evobots.club/" target="_blank" rel="noreferrer">EVO Bots</a>: 
                        An add-on NFT collection for the upcoming
                        {" "}<a href="https://cryptocave.club/" target="_blank" rel="noreferrer">Crypto Cave Club</a> web3 game. 
                        I created the smart contract and the front-end for minting the EVO Bots NFT collection, and an
                        innovative system that allows the EVO Bots NFTs to <span style={styles.highlight}>unlock and reveal</span> a <span style={styles.highlight}>companion trait</span>{" "} 
                        when they are used <span style={styles.highlight}>socially on Twitter</span>.
                    </li>
                    <li>
                        <a href="https://www.cc0mune.xyz/" target="_blank" rel="noreferrer">CC0mune</a>: 
                        A small collection of NFTs that were <span style={styles.highlight}>free to mint, with
                        a twist</span>. At 4:20pm, <span style={styles.highlight}>exactly one NFT was minted each day</span>{" "}
                        during the mint phase. Each NFT is a derivative of the first minted
                        NFTs from various CC0 collections. I created the smart contract
                        and the front-end for minting the CC0 NFT collection.
                    </li>
                    <li>
                        <a href="https://www.cryptobidz.com/" target="_blank" rel="noreferrer">Cryptobidz</a>: 
                        Currently under development, and <span style={styles.highlight}>my most ambitious
                        project to date</span>, Cryptobidz is an upcoming <span style={styles.highlight}>decentralized penny auction platform</span>{" "} 
                        that allows users to bid on NFTs using an ERC-1155 BIDZ token.
                    </li>
                </ul>
            </div>
            <div style={styles.card}>
                <span style={styles.heading}>Open for Work</span>
                <p>
                    If you have a project you would like to discuss or if you are 
                    looking for a <span style={styles.highlight}>web3 and React developer</span>,
                    please don't hesitate to <span style={styles.highlight}>contact me</span>. 
                    I would be happy to hear from you and <span style={styles.highlight}>discuss your project</span> in more detail.
                </p>
            </div>
            <div style={styles.card}  id="contact" name="contact">
                <span style={styles.heading}>Get in Touch</span>
                <ul>
                    <li>
                        <a href="https://twitter.com/crypt0potamus" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter" style={styles.icon} /></a>
                    </li>
                    <li>
                        <a href="mailto:dev@crypt0potam.us?subject=Web Inquiry"><img src={Email} alt="Twitter" style={styles.icon} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const styles = {
    heading: {
        fontSize: "clamp(3rem, 5vw, 4rem)",
        fontWeight: "bold",
        marginBottom: "0.5rem",
    },
    home: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "6rem",
        textAlign: "center",
        color: "#fff",
        fontSize: "1.2rem",
        lineHeight: "1.5",
    },
    card: {
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#000",
        borderRadius: "0.5rem",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.5)",
        maxWidth: "95vw",
        minWidth: "25vw"
    },
    highlight: {
        color: "#c0f",
        fontWeight: "600"
    },
    icon: {
        width: "3rem",
        marginRight: "0.5rem",
    }
}

export default Home