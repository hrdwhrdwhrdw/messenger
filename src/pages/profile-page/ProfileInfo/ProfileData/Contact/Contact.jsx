import ClearIcon from "@mui/icons-material/Clear";
import { PURPLE } from "../../../../../constants/styles";
import renderIcons from "../../../../../helpers/renderIcons";

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className="profile__contact contact__item">
      {renderIcons(contactTitle)}
      <span>{contactTitle}:</span>
      <span>
        {contactValue ? contactValue : <ClearIcon sx={{ color: PURPLE }} />}
      </span>
    </div>
  );
};

export default Contact;
