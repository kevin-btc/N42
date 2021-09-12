import React from "react";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import db from "../../json-server/db.json";

const Explore = ({ filter, loadBtn }) => {
  const nft = db.nft.filter(({ tags }) => tags.includes(filter) || loadBtn);

  return (
    <section className="explore-area load-more p-0">
      <div className="container" id="explore">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end m-0">
              <div className="intro-content">
                <span>Exclusive Assets</span>
                <h3 className="mt-3 mb-0">Explore</h3>
              </div>
              <div className="intro-btn">
                <a
                  className="btn content-btn"
                  href="https://opensea.io/collection/number-forty-two"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on OpenSea
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row items">
          {nft.map((item) => {
            return (
              <div
                key={`exo_${item.id}`}
                className="col-12 col-sm-6 col-lg-3 item"
              >
                <div className="card">
                  <div className="image-over" style={{ cursor: "zoom-in" }}>
                    <Zoom
                      overlayBgColorEnd="rgba(0, 0, 0, 0.5)"
                      overlayBgColorStart="rgba(0, 0, 0, 0)"
                      closeText="Click to Close"
                      openText="Click to See picture"
                    >
                      <img src={item.miniature} alt={item.title} />
                    </Zoom>
                  </div>
                  {/* Card Caption */}
                  <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body">
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <h5 className="mb-0">{item.title}</h5>
                      </a>
                      <div className="seller d-flex align-items-center my-3">
                        <span>Owned By</span>
                        <h6 className="ml-2 mb-0">{item.owner}</h6>
                      </div>
                      <div className="card-bottom d-flex justify-content-between">
                        <span>{item.price} ETH</span>
                        <span>
                          {item.count === 1
                            ? "Unique edition"
                            : `Serie of ${item.count}`}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <a
                          className="btn btn-bordered-white btn-smaller mt-3"
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-handbag mr-2" />
                          Place a Bid
                        </a>
                        <a
                          className="btn btn-bordered-white btn-smaller mt-3"
                          href={`/item-details/${item.id}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-eye" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {loadBtn && (
          <div className="row">
            <div className="col-12 text-center">
              <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">
                Load More
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Explore;
