import React from "react";
import { useTranslation } from "react-i18next";
import { PopupModal } from "../../components";
import { NewsData } from "../../types/types";
interface Props {
  show: boolean;
  onHide: () => void;
  newsData: NewsData;
}

export const ViewModal: React.FC<Props> = ({ show, onHide, newsData }) => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <PopupModal
        title={t("ModalTitles.view_news")}
        onHide={onHide}
        show={show}
      >
        <div className="newsList">
          <div className="row">
            <div className="" key={newsData?.id}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{newsData?.title}</h3>
                  <h4 className="card-subtitle">{newsData?.category}</h4>
                  <p className="card-text">{newsData?.description}</p>
                </div>
                <div className="card-footer">
                  {new Date(newsData?.date)?.toDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PopupModal>
    </div>
  );
};
