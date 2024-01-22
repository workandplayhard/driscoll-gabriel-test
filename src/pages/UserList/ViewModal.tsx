import React from "react";
import { useTranslation } from "react-i18next";

import { PopupModal } from "../../components";
import { UserData } from "../../types/types";

interface Props {
  show: boolean;
  onHide: () => void;
  userData: UserData;
}

export const ViewModal: React.FC<Props> = ({ show, onHide, userData }) => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <PopupModal title="View User" onHide={onHide} show={show}>
        <form>
          <div className="row">
            <div className="col-md-12 mb-1">
              <div className="form-group">
                <label>{t("Headings.id")}:</label>
                <input
                  name="fullName"
                  placeholder="Enter fullname"
                  type="text"
                  className="form-control"
                  value={userData.id}
                  readOnly
                  disabled
                />
              </div>
            </div>
            <div className="col-md-12 mb-1">
              <div className="form-group">
                <label>{t("Headings.fullname")}:</label>
                <input
                  name="fullName"
                  placeholder="Enter fullname"
                  type="text"
                  className="form-control"
                  value={userData.fullName}
                  readOnly
                  disabled
                />
              </div>
            </div>
            <div className="col-md-12 mt-1">
              <div className="form-group">
                <label>{t("Headings.username")}:</label>
                <input
                  name="userName"
                  placeholder="Enter username"
                  type="text"
                  className="form-control"
                  value={userData.userName}
                  readOnly
                  disabled
                />
              </div>
            </div>
          </div>
        </form>
      </PopupModal>
    </div>
  );
};
