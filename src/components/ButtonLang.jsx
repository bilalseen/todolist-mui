import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Language } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

const options = [
  {
    language: "English",
    countryCode: "Us",
  },
  {
    language: "Türkçe",
    countryCode: "Tr",
  },
  {
    language: "Deutsch",
    countryCode: "De",
  },
  {
    language: "Español",
    countryCode: "Es",
  },
  {
    language: "Русский",
    countryCode: "Ru",
  },

  {
    language: "中文",
    countryCode: "Cn",
  },
];

options.sort((a, b) => a.language.localeCompare(b.language));

console.log(options);

const ITEM_HEIGHT = 48;

export default function ButtonLang() {
  const { t, i18n } = useTranslation();

  const [useSelectedLanguage, setUseSelectedLanguage] = React.useState(
    i18n.language
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    console.log(lang);
    let languageCode;
    switch (lang) {
      case "English":
        languageCode = "en";
        break;
      case "Türkçe":
        languageCode = "tr";
        break;
      case "Deutsch":
        languageCode = "de";
        break;
      case "Русский":
        languageCode = "ru";
        break;
      case "Español":
        languageCode = "es";
        break;
      case "中文":
        languageCode = "zh";
        break;
      default:
        console.error("Unsupported language:", lang);
        return;
    }

    i18n.changeLanguage(languageCode);
    setUseSelectedLanguage(lang);
    handleClose();
  };
  return (
    <div>
      <Tooltip title={t("changeLanguageButton")} placement="bottom">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Language sx={{ color: "#9E78CF" }} />
        </IconButton>
      </Tooltip>
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
        {options.map((item) => (
          <MenuItem
            key={item.language}
            selected={item.language === useSelectedLanguage}
            onClick={() => changeLanguage(item.language)}
            sx={{ gap: 1 }}
          >
            <ReactCountryFlag
              countryCode={item.countryCode}
              svg
              style={{
                width: "1.5em",
                height: "1.5em",
              }}
              title={item.countryCode}
            />
            {item.language}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
