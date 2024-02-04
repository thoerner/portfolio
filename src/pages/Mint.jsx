import { mintHippo } from "../utils/api";
import { useState, useEffect } from "react";
import HippoLogo from "../assets/hippo.svg";
import "../styles/Mint.css";
import { MdDownload } from "react-icons/md";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function removeQuotes(str) {
  if (typeof str !== "string") return "";
  return str.replace(/^"|"$/g, "");
}

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

const shuffleArray = (array) => {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray;
};

const loadingMessages = shuffleArray([
  "Herding cats through smart contracts...",
  "Fetching eagles from the decentralized sky...",
  "Compiling the zoo of smart contracts...",
  "Minting your unique animal token...",
  "Diving into the web3 wilderness...",
  "Syncing the ledger with the animal kingdom...",
  "Generating secure wildlife tokens...",
  "Connecting to the blockchain safari...",
  "Securing transactions in the animal network...",
  "Establishing consensus in the digital jungle...",
  "Crafting your critter NFT...",
  "Building decentralized habitats for digital fauna...",
  "Optimizing contract efficiency in the animal ledger...",
  "Bathing elephants in the digital waterhole...",
  "Awaiting confirmation from the pack...",
  "Tracking paw prints on the blockchain...",
  "Howling with wolves at the moon of consensus...",
  "Swimming with dolphins in the data stream...",
  "Roaring approvals with digital lions...",
  "Buzzing through smart contract honeycombs...",
  "Fluttering around the blockchain butterfly effect...",
  "Pouncing on transactions like a blockchain panther...",
]);

const LoadingMessageComponent = () => {
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingMessageIndex(
        (loadingMessageIndex + 1) % loadingMessages.length
      );
      setLoadingMessage(loadingMessages[loadingMessageIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [loadingMessageIndex]);

  return <p className="loadingMessage">{loadingMessage}</p>;
};

const Spinner = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="spinner-container">
      <LoadingMessageComponent />
      <div className="spinner"></div>
    </div>
  );
};

const ImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
  if (!isOpen) return null;
  const { width } = useWindowDimensions();

  return (
    <div className="modalOverlay">
      <div className="modal" style={{ maxWidth: width > 768 ? "33%" : "80%" }}>
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

  async function downloadImage() {
    try {
      const response = await axios.get(`${API_URL}/mint/download`, {
        params: { url: loadedImage },
        responseType: 'blob', // Important: This tells axios to download the response as a Blob
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      const date = new Date();
      link.setAttribute('download', `${hippoData.attributes.animal}-${hippoData.attributes.occupation}-${date.getTime()}.png`); // Set the filename for download
      document.body.appendChild(link);
      link.click(); // Trigger the download
  
      window.URL.revokeObjectURL(url); // Clean up the object URL
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download the image:", error);
    }
  }

  return (
    <div className="mint">
      <div className="backgroundImage"></div>
      <div className="card">
        {isMinting && <Spinner loading={isMinting} />}
        <div className="imageContainer">
          <div onClick={downloadImage} className="downloadButton">
            <MdDownload />
          </div>
          <img
            onClick={openModal}
            className={`image ${isMinting ? "image-blurred" : ""}`}
            src={loadedImage ? loadedImage : HippoLogo}
            alt="hippo"
          />
        </div>
        <p className="description">{removeQuotes(hippoData?.description)}</p>
        {hippoData && (
          <ul className="list">
            <li className="listItem">
              <b>Species:</b> {capitalize(hippoData?.attributes.animal)}
            </li>
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
