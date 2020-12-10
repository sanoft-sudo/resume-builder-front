import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "../styles/languageSelect.css"

import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const languageMap = {
  en: { label: "En", dir: "ltr", active: true },
  ru: { label: "Ру", dir: "ltr", active: false },
  uz: { label: "O'z", dir: "ltr", active: false }
};

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "uz";
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = useState(null);
  useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);

  return (
    <div className="language__select">
      <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {languageMap[selected].label}
        <ArrowDropDown fontSize="small" />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
