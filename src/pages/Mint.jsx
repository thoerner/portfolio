import { mintHippo } from "../utils/api";
import { useState, useEffect } from "react";
import HippoLogo from "../assets/hippo.svg";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

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

const ImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
  if (!isOpen) return null;
  const { width } = useWindowDimensions();

  return (
    <div style={styles.modalOverlay}>
      <div style={{...styles.modal,  maxWidth: width > 768 ? "33%" : "80%"}}>
        <div style={styles.modalContextLayer} onClick={onClose}></div>
        <img src={imageSrc} alt={alt} style={styles.modalImage} />
      </div>
    </div>
  );
};

const Mint = (props) => {
  const [hippoData, setHippoData] = useState(null);
  const [isMinting, setIsMinting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          onClick={openModal}
          style={{ ...styles.image, zIndex: isMinting ? 0 : 1}}
          src={hippoData ? hippoData.image_url : HippoLogo}
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
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={hippoData ? hippoData.image_url : HippoLogo}
        alt="hippo"
      />
    </div>
  );
};

const styles = {
  image: {
    width: "250px",
    height: "250px",
    margin: "20px",
    position: "relative", // Ensure the image is positioned relatively within the card
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.7)", // Add a shadow to the image
    backgroundColor: "#F2E9E4", // Add a background color to the image
    cursor: "pointer", // Add a pointer cursor to the image
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
  modalContextLayer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 10,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    maxHeight: "80%",
    overflow: "auto",
  },
  modalImage: {
    maxWidth: "100%",
    height: "auto",
  },
  closeButton: {
    display: "block",
    marginTop: "10px",
    background: "#F2E9E4",
    color: "#4A4E69",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
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
