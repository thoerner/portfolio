const Home = props => {
    return (
        <div style={styles.home}>
            <div style={styles.card}>
                <h1>About Me</h1>
                <p>
                    Hi, I'm crypt0potamus, a software and web developer with a 
                    passion for creating innovative web3 and React applications.
                    I specialize in the development of smart contracts and 
                    decentralized applications (dApps) for web3 projects.
                </p>
                <p>
                    With several years of experience in the field, I have a 
                    proven track record of delivering high-quality code and
                    delivering projects on time. I have a strong understanding
                    of web3 technologies and the ability to write secure, 
                    scalable, and maintainable code.
                </p>
                <p>
                    My goal is to help bring the future of web3 to life through
                    the creation of innovative and user-friendly applications.
                    I am always open to new projects and opportunities to work
                    with organizations and individuals who share my passion for
                    this exciting and rapidly growing new field.
                </p>
            </div>
            <div style={styles.card}>
                <h1>Showcase</h1>
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
                        combined using generative art algorithms. I also
                        created the smart contract to mint the NFTs and the 
                        staking contract to allow users to stake their Goat
                        Gauds NFTs and earn rewards in the form of FLWR$ tokens.
                        Additionally, I created an AI-powered Discord chat bot (Goat Bot) 
                        that allows users to interact with the Goat Gauds NFT collection.
                    </li>
                    <li>
                        <a href="https://www.googlyeyedrockclub.com/" target="_blank" rel="noreferrer">Googly Eyed Rock Club</a>: 
                        A collection of physical rocks with googly eyes curated by crypto influencer Gabriel Haines.
                        I created the smart contract to mint the NFTs through a
                        last-price Dutch auction.
                    </li>
                    <li>
                        <a href="https://www.evobots.club/" target="_blank" rel="noreferrer">EVO Bots</a>: 
                        An add-on NFT collection for the upcoming
                        {" "}<a href="https://cryptocave.club/" target="_blank" rel="noreferrer">Crypto Cave Club</a> web3 game. 
                        I created the smart contract and the front-end for minting the EVO Bots NFT collection.
                    </li>
                    <li>
                        <a href="https://www.cc0mune.xyz/" target="_blank" rel="noreferrer">CC0mune</a>: 
                        A small collection of NFTs that were free to mint, with
                        a twist. Only one NFT could be minted each day at 4:20pm ET
                        during the mint phase. Each NFT is a derivative of the #0
                        NFTs from various CC0 collections. I created the smart contract
                        and the front-end for minting the CC0 NFT collection.
                    </li>
                    <li>
                        <a href="https://www.cryptobidz.com/" target="_blank" rel="noreferrer">Cryptobidz</a>: 
                        Currently under development, and my most ambitious
                        project to date, Cryptobidz is a decentralized penny auction platform 
                        that allows users to bid on NFTs using an ERC-1155 BIDZ token.
                        I am currently working on polishing the front-end and adding additional features.
                    </li>
                </ul>
            </div>
            <div style={styles.card}>
                <h1>Open for Work</h1>
                <p>
                    If you have a project that you would like to discuss or if you are looking for a web3 and React developer, please don't hesitate to contact me. 
                    I would be happy to hear from you and discuss your project in more detail.
                </p>
            </div>
            <div style={styles.card}>
                <h1 id="contact">Get in Touch</h1>
                <p>
                    You can contact me through the following methods:
                </p>
                <ul>
                    <li>
                        <b>Twitter</b>: <a href="https://twitter.com/crypt0potamus" target="_blank" rel="noreferrer">@crypt0potamus</a>
                    </li>
                    <li>
                        <b>Email</b>: <a href="mailto:dev@crypt0potam.us">dev@crypt0potam.us</a>
                    </li>
                    <li>
                        <b>Discord</b>: <a href="https://discord.gg/5DZCrSZxWY" target="_blank" rel="noreferrer">crypt0potamus#2336</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const styles = {
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
        marginTop: "1rem",
        backgroundColor: "#000",
        borderRadius: "0.5rem",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.5)",
        maxWidth: "95vw"
    },
}

export default Home