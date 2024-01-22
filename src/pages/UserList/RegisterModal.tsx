import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { toast } from "react-toastify";
import { RootState } from "../../types/types";
import { PopupModal } from "../../components";
import { createUser } from "../../store/actions/userActions";
interface Props {
  show: boolean;
  onHide: () => void;
}

export const RegisterModal: React.FC<Props> = ({ show, onHide }) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userList = useSelector((state: RootState) => state.users.users);

  const handleResetForm = () => {
    Formik.resetForm();
  };

  const Formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required(t('Validations.fullname_required')),
      userName: Yup.string().required(t('Validations.username_required')),
    }),
    onSubmit: (values) => {
      if (Formik.isValid && Formik.dirty) {
        const userPaylod = {
          ...values,
          id: (userList?.[userList.length - 1]?.id ?? 0) + 1,
        };
        dispatch(createUser(userPaylod)).then((res: any) => {
          if (res?.status === 200 && res?.success) {
            onHide();
            toast.success(t("Message.user_registered"));
            navigate("/users");
          }
        });
      }
    },
  });

  return (
    <div className="container-fluid">
      <PopupModal
        title={t("ModalTitles.register_user")}
        onHide={onHide}
        show={show}
      >
        <form onSubmit={Formik.handleSubmit}>
          <div className="row">
            <div className="col-md-12 mb-1">
              <div className="form-group">
                <label>{t("Headings.fullname")}:</label>
                <input
                  name="fullName"
                  placeholder="Enter fullname"
                  type="text"
                  className="form-control"
                  value={Formik.values.fullName}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.fullName && Formik.touched.fullName && (
                  <p> {Formik.errors.fullName}</p>
                )}
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
                  value={Formik.values.userName}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.userName && Formik.touched.userName && (
                  <p> {Formik.errors.userName}</p>
                )}
              </div>
            </div>
          </div>
          <Row>
            <div className="col-md-12">
              <div className="formGroup d-flex justify-content-center mt-3">
                <Button type="submit" style={{ marginRight: "5px" }}>
                  {t("Buttons.submit")}
                </Button>
                <Button type="button" onClick={() => handleResetForm()}>
                  {t("Buttons.reset")}
                </Button>
              </div>
            </div>
          </Row>
        </form>
      </PopupModal>
    </div>
  );
};
