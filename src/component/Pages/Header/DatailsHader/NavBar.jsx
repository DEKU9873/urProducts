import { useTranslation } from "react-i18next";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import "./DropDown.css";

function NavBar() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element to the button that was clicked
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the dropdown
  };

  const handleSendMessage = () => {
    handleClose(); // Close the dropdown after selection
  };

  const handleOpenLinks = () => {
    window.open("https://linktr.ee/ur_productss", "_blank"); // Open the links in a new tab
    handleClose(); // Close the dropdown after selection
  };

  return (
    <>
      <ul dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
        <li>
          <a className="nav-link scrollto active" href="/">
            {t("header.Home")}
          </a>
        </li>
        {/* <li>
          <a className="nav-link scrollto" href="#about">
            {t("header.About")}
          </a>
        </li> */}
        
        <li>
          <a className="nav-link scrollto" href="/Services/">
            {t("header.Services")}
          </a>
        </li>
        
        {/* <li>
          <a className="nav-link scrollto" href="/Solution/">
            {t("header.Oursolution")}
          </a>
        </li> */}
        <li>
          <a className="nav-link scrollto" href="/AllSolution/">
            {t("header.Oursolution")}
          </a>
        </li>

        

        <li>
          <a className="nav-link scrollto" href="/ViewAllProject/">
            {t("header.OurProject")}
          </a>
        </li>

        <li>
          <a className="nav-link scrollto" href="/Eventpage/">
            {t("header.OurEvent")}
          </a>
        </li>

        <li>
          <a className="nav-link scrollto" href="/products/">
            {t("header.product")}
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="/Clints/">
            {t("header.OurClinents")}
          </a>
        </li>

        <li className="custom-dropdown">
          {/* Button to trigger the dropdown menu */}
          <a
            className="custom-nav-link custom-scrollto"
            aria-controls={open ? "long-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick} // Opens the dropdown on click
            style={{cursor:"pointer"}}
          >
            {t("header.Contact")}
          </a>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {/* Language selection menu items */}
            <MenuItem onClick={handleSendMessage}>
              {" "}
              <a className="nav-link scrollto" href="#contact">
              {t("header.SendaMassage")}
              </a>
            </MenuItem>
            <MenuItem onClick={handleOpenLinks}>{t("header.OurLink")}</MenuItem>
          </Menu>
        </li>
      </ul>
    </>
  );
}
export default NavBar;
