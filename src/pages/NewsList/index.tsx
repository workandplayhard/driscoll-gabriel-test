import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { Layout, Sidebar } from "../../components";
import { ViewModal } from "./ViewModal";
import { NewsData, RootState } from "../../types/types";
import { getNewsList } from "../../store/actions/newsActions";

import "./style.css";

export const NewsListView: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
  const { t } = useTranslation();
  const [viewModal, setViewModal] = useState<boolean>(false);
  const newsInitialDetails = {
    id: 0,
    title: "",
    description: "",
    category: "",
    date: "",
  };
  const [newsDetails, setNewsDetails] = useState<NewsData>(newsInitialDetails);
  const newsList = useSelector((state: RootState) => state.news.news);

  useEffect(() => {
    dispatch(getNewsList());
  });

  const handleViewModal = (newsDetails: NewsData) => {
    setNewsDetails(newsDetails);
    setViewModal(true);
  };
  const handleCloseViewModal = () => {
    setViewModal(false);
    setNewsDetails(newsInitialDetails);
  };

  return (
    <Layout>
      <Sidebar />
      <div id="page-content-wrapper">
        <h2>NewsList</h2>
        <div className="newsList container-fluid mt-4 mb-4">
          <div className="row">
            {newsList?.length > 0 &&
              newsList.map((news) => (
                <div className="col-md-6 mb-5" key={news?.id}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h2 className="card-title">{news?.title}</h2>
                      <h4 className="card-subtitle">{news?.category}</h4>
                      <p className="card-text">
                        {news?.description?.substring(0, 65) + "..."}
                      </p>
                    </div>
                    <div className="card-footer">
                      {new Date(news?.date)?.toDateString()}
                      <Button
                        type="button"
                        className="action-button"
                        onClick={() => {
                          handleViewModal(news);
                        }}
                      >
                        {t("Buttons.view_button")}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {viewModal && (
          <ViewModal
            show={viewModal}
            onHide={handleCloseViewModal}
            newsData={newsDetails}
          />
        )}
      </div>
    </Layout>
  );
};
