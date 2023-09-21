import Twitter from "../assets/twitter.svg";
import Email from "../assets/email.svg";

const Home = props => {
    return (
        <div style={styles.home}>
            <div style={styles.card}>
                <span style={styles.heading}>About Me</span>
                <p>
                    Hey there, I'm crypt0potamus—a <span style={styles.highlight}>full-stack wizard</span> who thrives in the
                    crossroads of <span style={styles.highlight}>Web3</span>, <span style={styles.highlight}>AI</span>, and <span style={styles.highlight}>React</span>. When I'm not dabbling in <span style={styles.highlight}>smart contract magic</span> with <span style={styles.highlight}>Solidity</span>, I'm building{" "}
                    <span style={styles.highlight}>dApps</span> that not just use, but actually feature, <span style={styles.highlight}>cutting-edge AI tech</span>.
                </p>
                <p>
                    My toolkit? Think a rock-solid grasp of <span style={styles.highlight}>web3 paradigms</span>, fluency in modern web frameworks, and the chops to churn out <span style={styles.highlight}>secure, scalable, and high-performance code</span>. I'm all about pushing the tech envelope and concocting web3 and AI marvels that are in a league of their own.
                </p>
                <p>
                    Open for collabs? You bet! Whether you're a startup or a tech guru with a grand vision, if you share my <span style={styles.highlight}>zeal for disruptive tech</span>, I'm your go-to guy for <span style={styles.highlight}>turning those big ideas into digital reality</span>.
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
                        <a href="https://butts.the3dkings.io/" target="_blank" rel="noreferrer">Lazy Butts (A 3D Kings Project)</a>:
                        Recently launched, Lazy Butts is an unofficial project that enriches the Lazy Lions ecosystem with a unique <span style={styles.highlight}>add-on NFT collection</span>. Tailored for each Lazy Lion NFT, Lazy Butt NFTs serve as the bottom half, completing the full lion. Leading the tech side, I leveraged React for front-end, Web3 for blockchain interactions, and Solidity for smart contract development. The <span style={styles.highlight}>minting process</span>, which kicks off on 9/23, is facilitated by an Express.js API hosted on AWS, with DynamoDB handling the data layer. I also architected the <span style={styles.highlight}>Lazy Butt NFT reveal</span> system and devised a <span style={styles.highlight}>token-gated</span> image download mechanism, granting Lazy Butt holders exclusive access to the full imagery of their enhanced Lazy Lions.
                    </li>

                    <li>
                        <a href="https://the3dkings.io" target="_blank" rel="noreferrer">3D Kings</a>:
                        The official hub for the 3D Kings community trait group, associated with Lazy Lions and Lazy Cubs. Built with React and backed by an Express.js API, the site is hosted on AWS, optimized for scalability and performance. The site serves as the gateway to the upcoming <span style={styles.highlight}>Visionarium</span>, a digital platform where members will wield the <span style={styles.highlight}>voting power</span> of their 3D Glasses NFTs to influence community projects and activities. My role encompassed the full stack of the project, from front-end development to back-end API design and AWS deployment.
                    </li>
                    <li>
                        <a href="https://radi.crypt0potam.us/" target="_blank" rel="noreferrer">Wizard AI</a>:
                        Wizard AI is not just another conversational agent; it's a tech marvel harnessing the <span style={styles.highlight}>OpenAI API</span> and GPT-3.5-turbo. I took the helm for tech, using React on the front-end and Express.js for the back-end API, intricately woven with <span style={styles.highlight}>Natural Language Processing algorithms</span>. Apart from the numerous AI personalities capable of conventional dialogues, Wizard AI features an experimental <span style={styles.highlight}>Dungeon Master mode</span>, enabling interactive adventures steered by AI-generated contextual buttons. All of this operates on a <span style={styles.highlight}>serverless AWS architecture</span>, designed for both high availability and scalability, wrapped up in a <span style={styles.highlight}>responsive UI</span> that caters to any device, be it mobile or desktop.
                    </li>
                    <li>
                        <span style={styles.highlight}>Assorted Web3 & NFT Projects</span>:
                        My work covers a diverse range of creative endeavors in the NFT and Web3 arena. From <a href="https://www.evobots.club/" target="_blank" rel="noreferrer">EVO Bots</a>, a companion collection to the anticipated <a href="https://cryptocave.club/" target="_blank" rel="noreferrer">Crypto Cave Club</a>, to <a href="https://www.cc0mune.xyz/" target="_blank" rel="noreferrer">CC0mune</a> a playful project that changed the game by offering <span style={styles.highlight}>one free NFT daily at 4:20pm</span>. I've also had a hand in <span style={styles.highlight}>Goat Gauds</span>, featuring 2,222 uniquely designed goats, and the <a href="https://surfboard.saltysharks.io/" target="_blank" rel="noreferrer">Salty Sharks Surfboard dApp</a>, a game of chance with Matic rewards. I extended my contributions to the now-offline <a href="https://twitter.com/gabrielhaines" target="_blank" rel="noreferrer">Googly Eyed Rock Club</a>, curated by NFT influencer <span style={styles.highlight}>Gabriel Haines</span>. Across these projects, my responsibilities have ranged from smart contract coding to both front- and back-end development and inventive minting systems.
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