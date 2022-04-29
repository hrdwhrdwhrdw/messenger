import FacebookIcon from "@mui/icons-material/Facebook";
import { ReactComponent as Vksvg } from "../assets/images/vk-brands.svg";
import WebIcon from "@mui/icons-material/Web";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

const renderIcons = (contactTitle) => {
  switch (contactTitle) {
    case "vk":
      return <Vksvg className="contact__icon contact__icon_vk" />;
    case "facebook":
      return <FacebookIcon className="contact__icon" />;
    case "twitter":
      return <TwitterIcon className="contact__icon" />;
    case "instagram":
      return <InstagramIcon className="contact__icon" />;
    case "youtube":
      return <YouTubeIcon className="contact__icon" />;
    case "github":
      return <GitHubIcon className="contact__icon" />;
    case "website":
      return <WebIcon className="contact__icon" />;
    case "mainLink":
      return <LinkIcon className="contact__icon" />;
    default:
      break;
  }
};

export default renderIcons;
