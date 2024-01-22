import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Button } from "react-bootstrap";

import { Header, Layout, Sidebar } from "../components";
import { RootState } from "../types/types";

export const UserView: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userId } = useParams();
  const userList = useSelector((state: RootState) => state.users.users);
  const userInitialdetails = { id: 0, userName: "", fullName: "" };
  const [userDetails, setUserDetails] = useState<any>(userInitialdetails);

  useEffect(() => {
    const filterUser = userList?.find((user) => user?.id === Number(userId));
    setUserDetails(filterUser);
  }, [userId, userList]);

  return (
    <Layout>
      <Sidebar />
      <div id="page-content-wrapper">
      <Header />
        <div className="user-details container-fluid mt-2 mb-4">
          <h1 className="font-weight-light">{t("Headings.user_details")}</h1>
          <div className="row">
            <div
              className="card text-left h-100"
              style={{
                textAlign: "left",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              <div className="card-body">
                <div className="form-group mb-1">
                  <label>{t('Headings.id')}:</label>
                  <b>
                    <p className="card-subtitle">{userDetails?.id}</p>
                  </b>
                </div>
                <div className="form-group mb-1">
                  <label>{t('Headings.fullname')}:</label>
                  <h5 className="card-subtitle">{userDetails?.fullName}</h5>
                </div>
                <div className="form-group mb-1">
                  <label>{t('Headings.username')}:</label>
                  <p className="card-text">{userDetails?.userName}</p>
                </div>
              </div>
              <div className="card-footer">
                <Button
                  type="button"
                  className="action-button"
                  onClick={() => {
                    navigate("/users");
                  }}
                >
                  {t("Buttons.back")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
