import { mintHippo } from "../utils/api";
import { useState, uesEffect } from "react";
import HippoLogo from "../assets/hippo.svg";

const Spinner = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

const Mint = (props) => {
  const [hippoData, setHippoData] = useState(null);
  const [isMinting, setIsMinting] = useState(false);

  const handleMint = async () => {
    setIsMinting(true);
    const data = await mintHippo();
    setHippoData(data);
    setIsMinting(false);
  };

  function capitalize(s) {
    if (typeof s !== "string") return "";
    return s
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div style={styles.mint}>
      <div style={styles.card}>
        <p style={styles.text}>Mint a Hippo</p>
        {isMinting && <Spinner loading={isMinting} />}
        <img
          style={{
            width: "250px",
            height: "250px",
            margin: "20px",
            position: "relative", // Ensure the image is positioned relatively within the card
            zIndex: isMinting ? 0 : 1, // Ensure image is below spinner when minting
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.7)", // Add a shadow to the image
            backgroundColor: "#F2E9E4", // Add a background color to the image
          }}
          src={hippoData? hippoData.image_url : HippoLogo}
          alt="hippo"
        />
        <p style={styles.description}>{hippoData?.description}</p>
        {hippoData ? (
          <ul style={styles.list}>
            <li>
              <b>Occupation:</b> {capitalize(hippoData?.attributes.occupation)}
            </li>
            <li>
              <b>Activity:</b> {capitalize(hippoData?.attributes.activity)}
            </li>
            <li>
              <b>Location:</b> {capitalize(hippoData?.attributes.location)}
            </li>
            <li>
              <b>Style:</b> {capitalize(hippoData?.attributes.style)}
            </li>
            <li>
              <b>Color:</b> {capitalize(hippoData?.attributes.color)}
            </li>
          </ul>
        ) : null}
        <button onClick={handleMint}>Mint</button>
      </div>
    </div>
  );
};

const styles = {
  list: {
    listStyle: "square",
    padding: 0,
    margin: 0,
    textAlign: "left",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  mint: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "4rem",
    textAlign: "center",
    color: "#F2E9E4",
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
  card: {
    position: "relative",
    backgroundColor: "#4A4E69",
    padding: "1rem",
    borderRadius: "0.25rem",
    minHeight: "25vh",
    minWidth: "25vw",
    maxWidth: "90vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.7)",
  },
  text: {
    fontSize: "2.5rem",
  },
  description: {
    fontSize: "1rem",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
};

export default Mint;
