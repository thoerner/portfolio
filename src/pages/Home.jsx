import Twitter from "../assets/twitter.svg";
import Email from "../assets/email.svg";

const Home = props => {
    return (
        <div style={styles.home}>
            <div style={styles.card}>
                <span style={styles.heading}>About Me</span>
                <p>
                    Hi, I'm crypt0potamus, a <span style={styles.highlight}>full-stack software and web developer</span> with a
                    passion for using the latest technologies to create
                    innovative <span style={styles.highlight}>web3</span> and <span style={styles.highlight}>React</span> applications.
                    I specialize in the development of <span style={styles.highlight}>smart contracts</span> and
                    decentralized applications (<span style={styles.highlight}>dApps</span>) that utilize <span style={styles.highlight}>cutting-edge AI technology</span>
                    {" "}and even incorporate it as a key feature.
                </p>
                <p>
                    I have a strong understanding of web3 technologies, modern web development frameworks,
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
                        <a href="https://radi.crypt0potam.us/" target="_blank" rel="noreferrer">Radi AI</a>:
                        A state-of-the-art AI platform, Radi AI leverages the power of the <span style={styles.highlight}>OpenAI API</span> to provide conversational agents capable of answering a wide array of queries. I designed and implemented the <span style={styles.highlight}>Natural Language Processing algorithms</span> that enable real-time conversation with the AI personalities. Radi AI isn't just a Q&A bot; it can <span style={styles.highlight}>remember information</span>, provide <span style={styles.highlight}>coding help</span>, and even <span style={styles.highlight}>generate human-like text</span> for various applications. It's hosted on a <span style={styles.highlight}>serverless AWS architecture</span>, ensuring high availability and scalability to handle concurrent conversations. In addition, the platform is designed with a <span style={styles.highlight}>responsive UI</span> that adjusts to both mobile and desktop environments.
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
                        <a href="https://docs.the3dkings.io/" target="_blank" rel="noreferrer">Lazy Butts</a>:
                        Currently under development, Lazy Butts is an unofficial <span style={styles.highlight}>add-on NFT collection</span>{" "}
                        for Lazy Lions NFT holders. Each Lazy Butt NFT corresponds to a Lazy Lion NFT, and represents 
                        the <span style={styles.highlight}>bottom half</span> of that lion. I created the smart contract
                        and the front-end for minting the Lazy Butt NFT collection, as well as the <span style={styles.highlight}>back-end</span> for
                        the <span style={styles.highlight}>Lazy Butt NFT reveal</span> system. I also created a <span style={styles.highlight}>token-gated</span> image
                        download system that allows Lazy Butt NFT holders to download the <span style={styles.highlight}>full image</span> of their Lazy Lion.
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
            <div style={styles.card} id="contact" name="contact">
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
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        color: "#F2E9E4"
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
        color: "#F2E9E4",
        fontSize: "1.2rem",
        lineHeight: "1.5",
    },
    card: {
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#4A4E69",
        borderRadius: "0.5rem",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.5)",
        maxWidth: "95vw",
        minWidth: "25vw"
    },
    highlight: {
        color: "#E9C46A",
        fontWeight: "600"
    },
    icon: {
        width: "3rem",
        marginRight: "0.5rem",
    }
}

export default Home