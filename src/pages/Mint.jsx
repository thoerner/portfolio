import { mintHippo } from "../utils/api";
import { useState, useEffect } from "react";
import HippoLogo from "../assets/hippo.svg";
import "../styles/Mint.css";

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
    <div className="modalOverlay">
      <div className="modal" style={{maxWidth: width > 768 ? "33%" : "80%"}}>
        <div className="modalContextLayer" onClick={onClose}></div>
        <img src={imageSrc} alt={alt} className="modalImage" />
      </div>
    </div>
  );
};

const Mint = (props) => {
  const [hippoData, setHippoData] = useState(null);
  const [isMinting, setIsMinting] = useState(false);
  const [loadedImage, setLoadedImage] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleMint = async () => {
    setIsMinting(true);
    try {
      const data = await mintHippo();
      const imageToLoad = new Image();
      imageToLoad.src = data.image_url;
      imageToLoad.onload = () => {
        // Image is loaded, update the state
        setHippoData(data);
        setLoadedImage(imageToLoad.src);
        setIsMinting(false); // Stop the minting process as the image is loaded
      };
      imageToLoad.onerror = () => {
        // Handle image load failure
        console.error("Failed to load the image");
        setIsMinting(false);
      };
    } catch (error) {
      console.error("An error occurred during the minting process:", error);
      setIsMinting(false);
    }
  };

  function capitalize(s) {
    if (typeof s !== "string") return "";
    return s
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="mint">
      <div className="backgroundImage"></div>
      <div className="card">
        {isMinting && <Spinner loading={isMinting} />}
        <img
          onClick={openModal}
          className={`image ${isMinting ? "image-blurred" : ""}`}
          src={loadedImage ? loadedImage : HippoLogo}
          alt="hippo"
        />
        <p className="description">{hippoData?.description}</p>
        {hippoData && (
          <ul className="list">
            <li className="listItem">
              <b>Occupation:</b> {capitalize(hippoData?.attributes.occupation)}
            </li>
            <li className="listItem">
              <b>Activity:</b> {capitalize(hippoData?.attributes.activity)}
            </li>
            <li className="listItem">
              <b>Location:</b> {capitalize(hippoData?.attributes.location)}
            </li>
            <li className="listItem">
              <b>Style:</b> {capitalize(hippoData?.attributes.style)}
            </li>
            <li className="listItem">
              <b>Color:</b> {capitalize(hippoData?.attributes.color)}
            </li>
          </ul>
        )}
        <button className="mintButton" onClick={handleMint}>
          Mint
        </button>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={loadedImage ? loadedImage : HippoLogo}
        alt="hippo"
      />
    </div>
  );
};

export default Mint;
