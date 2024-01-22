import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { toast } from "react-toastify";
import { PopupModal } from "../../components";
import { RootState, UserData } from "../../types/types";
import { deleteUser } from "../../store/actions/userActions";
interface Props {
  show: boolean;
  onHide: () => void;
  userData: UserData;
}

export const DeleteModal: React.FC<Props> = ({ show, onHide, userData }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();

  const handleDeleteUser = (userData: UserData) => {
    dispatch(deleteUser(userData)).then((res) => {
      if (res?.status === 200 && res?.success) {
        toast.success(t("Message.user_deleted"));
        onHide();
      }
    });
  };

  return (
    <div className="container-fluid">
      <PopupModal
        title={t("ModalTitles.delete_user")}
        onHide={onHide}
        show={show}
      >
        <form>
          <div className="row">
            <Row>
              <div className="col-md-12">
                <div className="form-group text-center mt-2 mb-2">
                  <h6>{t("Message.confirmation_message")}</h6>
                </div>
                <div className="formGroup d-flex justify-content-center mt-3">
                  <Button
                    type="button"
                    style={{ marginRight: "5px" }}
                    onClick={() => {
                      handleDeleteUser(userData);
                    }}
                  >
                    {t("Buttons.submit")}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      onHide();
                    }}
                  >
                    {t("Buttons.cancel")}
                  </Button>
                </div>
              </div>
            </Row>
          </div>
        </form>
      </PopupModal>
    </div>
  );
};
