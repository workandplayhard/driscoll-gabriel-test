import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { Header, Layout, Sidebar } from "../../components";
import { EditModal } from "./EditModal";
import { ViewModal } from "./ViewModal";
import { DeleteModal } from "./DeleteModal";
import { RootState, UserData } from "../../types/types";

import "./style.css";

export const UserListView: React.FC = () => {
  const { t } = useTranslation();
  const location = window.location;
  const userList = useSelector((state: RootState) => state.users.users);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const userInitialdetails = { id: 0, userName: "", fullName: "" };
  const [userDetails, setUserDetails] = useState<UserData>(userInitialdetails);

  const headerOptions = [
    t("Headings.id"),
    t("Headings.fullname"),
    t("Headings.username"),
    t("Headings.action"),
  ];

  const handleCloseEditModal = () => {
    setEditModal(false);
    setUserDetails(userInitialdetails);
  };

  const handleEditModal = (userDetails: UserData) => {
    setUserDetails(userDetails);
    setEditModal(true);
  };

  const handleViewModal = (userDetails: UserData) => {
    setUserDetails(userDetails);
    setViewModal(true);
  };

  const handleCloseViewModal = () => {
    setViewModal(false);
    setUserDetails(userInitialdetails);
  };

  const handleDeleteModal = (userDetails: UserData) => {
    setUserDetails(userDetails);
    setDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
    setUserDetails(userInitialdetails);
  };

  const handleShareUrl = (userDetails: UserData) => {
    const userUrl = `${location?.origin}/user/${userDetails?.id}`;
    // Copy to clipboard
    navigator.clipboard.writeText(userUrl).then(
      () => {
        toast.success(t("Message.url_copied_success"));
      },
      (err) => {
        toast.error(t("Message.error_copy"));
      }
    );
  };

  return (
    <Layout>
      <Sidebar />
      <div id="page-content-wrapper">
        <Header />
        <div className="userList">
          <h2>UserList</h2>
          <div className="table-responsive mt-3">
            <Table className="table" striped responsive>
              <thead>
                <tr>
                  {headerOptions?.map((headings, index) => (
                    <th className="table-heading" key={`heading-${index}`}>
                      {headings}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {userList?.length > 0 ? (
                  userList.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td className="align-left">{user.fullName}</td>
                      <td>{user.userName}</td>
                      <td>
                        <Button
                          variant="secondary"
                          className="action-button"
                          onClick={() => {
                            handleViewModal(user);
                          }}
                        >
                          {t("Buttons.view_button")}
                        </Button>
                        <Button
                          variant="secondary"
                          className="action-button"
                          onClick={() => {
                            handleEditModal(user);
                          }}
                        >
                          {t("Buttons.edit_button")}
                        </Button>
                        <Button
                          variant="secondary"
                          className="action-button"
                          onClick={() => {
                            handleDeleteModal(user);
                          }}
                        >
                          {t("Buttons.delete_button")}
                        </Button>
                        <Button
                          variant="info"
                          className="action-button"
                          onClick={() => {
                            handleShareUrl(user);
                          }}
                        >
                          {t("Buttons.share_url")}
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>{t("Message.no_user_record_found")}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
        {editModal && (
          <EditModal
            show={editModal}
            onHide={handleCloseEditModal}
            userData={userDetails}
          />
        )}
        {viewModal && (
          <ViewModal
            show={viewModal}
            onHide={handleCloseViewModal}
            userData={userDetails}
          />
        )}
        {deleteModal && (
          <DeleteModal
            show={deleteModal}
            onHide={handleCloseDeleteModal}
            userData={userDetails}
          />
        )}
      </div>
    </Layout>
  );
};
