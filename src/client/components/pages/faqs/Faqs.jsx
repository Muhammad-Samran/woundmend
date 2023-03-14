import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import "../../../assets/js/bootstrap.bundle";
import FaqsCard from "./single-faqs-card";
import "./style.css";


const Faqs = (props) => {

    const faqsData = [
        {
          title: "What is WoundMend?",
          content:
            "WoundMend offers instant assessment of acute and chronic wounds. The state-of-the-art mobile application operates on Artificial Intelligence technology and helps you scan all sorts of rashes, wounds or pigments. ",
        },
        {
            title: "What is the most common type of wound?",
            content:
              "WoundMend offers instant assessment of acute and chronic wounds. The state-of-the-art mobile application operates on Artificial Intelligence technology and helps you scan all sorts of rashes, wounds or pigments. ",
          },
          {
            title: "Where can i find woundMend App?",
            content:
              "WoundMend offers instant assessment of acute and chronic wounds. The state-of-the-art mobile application operates on Artificial Intelligence technology and helps you scan all sorts of rashes, wounds or pigments. ",
          },
          {
            title: "Who should use woundMend?",
            content:
              "WoundMend offers instant assessment of acute and chronic wounds. The state-of-the-art mobile application operates on Artificial Intelligence technology and helps you scan all sorts of rashes, wounds or pigments. ",
          },
          {
            title: "Is there still need to see Doctors for wounds?",
            content:
              "WoundMend offers instant assessment of acute and chronic wounds. The state-of-the-art mobile application operates on Artificial Intelligence technology and helps you scan all sorts of rashes, wounds or pigments. ",
          },
       
        
        
      ];
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Faqs
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Faqs</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid my-5" >
          <div className="row">
            <div className="col-sm-6">
             <div className="container_card">
             {faqsData.map((data, i) => {
              return (
                <div item xs={12} class="cardfaqs">
                  <FaqsCard
                    title={data.title}
                    content={data.content}
                    key={data.title}
                    // style={{
                    //   marginLeft: i % 2 === 0 ? "auto " : "",
                    //   "@media (max-width:900px)": {
                    //     marginLeft: "unset",
                    //     maxWidth: "100%",
                    //   },
                    // }}
                  />
                </div>
              );
            })}
             </div>
            </div>
            <div className="col-sm-6">
             <div className="container_card">
             {faqsData.map((data, i) => {
              return (
                <div item xs={12} class="cardfaqs">
                  <FaqsCard
                    title={data.title}
                    content={data.content}
                    key={data.title}
                    // style={{
                    //   marginLeft: i % 2 === 0 ? "auto " : "",
                    //   "@media (max-width:900px)": {
                    //     marginLeft: "unset",
                    //     maxWidth: "100%",
                    //   },
                    // }}
                  />
                </div>
              );
            })}
             </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Faqs;
