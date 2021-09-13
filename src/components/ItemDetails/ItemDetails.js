import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Zoom from "react-medium-image-zoom";

import db from "../../json-server/db.json";

const ItemDetails = () => {
  const { id } = useParams();
  const [nft, setNft] = useState();
  const [creator, setCreator] = useState();
  const [owner, setOwner] = useState();

  useEffect(() => {
    const selectedNft = db.nft[id];

    setNft(selectedNft);
    setCreator(db.user?.[selectedNft.creatorId]);
    setOwner(db.user?.[selectedNft.ownerId]);

    console.log({
      selectedNft,
      creator: db.user?.[selectedNft.creatorId],
      owner: db.user?.[selectedNft.ownerId],
      id,
    });
  }, []);

  if (!nft || !creator || !owner) {
    return "Loading...";
  }

  return (
    <section className="item-details-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="item-info">
              <div className="item-thumb text-center">
                <Zoom
                  overlayBgColorEnd="rgba(0, 0, 0, 0.5)"
                  overlayBgColorStart="rgba(0, 0, 0, 0)"
                  closeText="Click to Close"
                  openText="Click to See picture"
                >
                  <img src={nft.img} alt={nft.title} />
                </Zoom>
              </div>
              {/* Netstorm Tab */}
              <ul className="netstorm-tab nav nav-tabs" id="nav-tab">
                <li>
                  <a
                    id="nav-contact-tab"
                    data-toggle="pill"
                    href="#nav-contact"
                    className="active"
                  >
                    <h5 className="m-0">Details</h5>
                  </a>
                </li>
                <li>
                  <a id="nav-home-tab" data-toggle="pill" href="#nav-home">
                    <h5 className="m-0">Bids</h5>
                  </a>
                </li>
              </ul>
              {/* Tab Content */}
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade" id="nav-home">
                  <ul className="list-unstyled">
                    {/* Single Tab List */}
                    <li className="single-tab-list d-flex align-items-center">
                      <p className="m-0">No bid yet</p>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade show active" id="nav-contact">
                  {/* Single Tab List */}
                  <div className="owner-meta d-flex align-items-center mt-3">
                    <span>Owner</span>
                    <a
                      className="owner d-flex align-items-center ml-2"
                      href={owner.website}
                    >
                      <img
                        className="avatar-sm rounded-circle"
                        src={owner.img}
                        alt=""
                      />
                      <h6 className="ml-2">{owner.alias}</h6>
                    </a>
                  </div>
                  <p className="mt-2">Created : {nft.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Content */}
            <div className="content mt-5 mt-lg-0">
              <h3 className="m-0">{nft.title}</h3>
              <p>{nft.content}</p>
              {/* Item Info List */}
              <div className="item-info-list mt-4">
                <ul className="list-unstyled">
                  <li className="price d-flex justify-content-between">
                    <span>Current Price :</span>
                    <span>{nft.price} ETH</span>
                  </li>
                  <li className="price d-flex justify-content-between">
                    <span>Edition :</span>
                    <span>
                      {nft.count === 1 ? "Unique" : `Serie of ${nft.count}`}
                    </span>
                  </li>
                  <li className="price d-flex justify-content-between">
                    <span>Size : </span>
                    <span>{nft.size}</span>
                  </li>
                  <li className="price d-flex justify-content-between">
                    <span>Created at : </span>
                    <span>{nft.createdAt}</span>
                  </li>
                </ul>
              </div>

              {/*Creator*/}
              <div className="row items">
                {creator && (
                  <div
                    key={creator.id}
                    className="col-12 col-md-6 item px-lg-2"
                  >
                    <div className="card no-hover">
                      <div className="single-seller d-flex align-items-center">
                        <a
                          href={creator.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="avatar-md rounded-circle"
                            src={creator.img}
                            alt="NFT designer"
                          />
                        </a>
                        <div className="seller-info ml-3">
                          <a
                            className="seller mb-2"
                            href={creator.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {creator.alias}
                          </a>
                          <span>{creator.post}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {owner && (
                  <div key={owner.id} className="col-12 col-md-6 item px-lg-2">
                    <div className="card no-hover">
                      <div className="single-seller d-flex align-items-center">
                        <a
                          href={owner.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="avatar-md rounded-circle"
                            src={owner.img}
                            alt="NFT designer"
                          />
                        </a>
                        <div className="seller-info ml-3">
                          <a
                            className="seller mb-2"
                            href={owner.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {owner.alias}
                          </a>
                          <span>{owner.post}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a className="d-block btn btn-bordered-white mt-4" href={nft.url}>
                Place a Bid
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
