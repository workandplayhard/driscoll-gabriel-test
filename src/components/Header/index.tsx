import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

import { RegisterModal } from "../../pages/UserList/RegisterModal";
import LanguageSelector from "../LanguageSelector";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [registerModal, setRegisterModal] = useState<boolean>(false);

  const handleOpenRegisterModal = () => {
    setRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setRegisterModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 p-0 ">
            {pathname.split("/")[1] !== "user" && (
              <li className="nav-item ">
                <p
                  className="nav-link mb-0"
                  onClick={() => handleOpenRegisterModal()}
                  style={{ cursor: "pointer" }}
                >
                  {t("Buttons.register_user")}
                </p>
              </li>
            )}
          </ul>
          <LanguageSelector />
        </div>
      </div>
      {registerModal && (
        <RegisterModal onHide={handleCloseRegisterModal} show={registerModal} />
      )}
    </nav>
  );
};
