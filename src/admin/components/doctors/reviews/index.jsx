import React from "react";
import StarRatings from "react-star-ratings";
import moment from "moment";

const index = ({ data }) => {
  return (
    <div>
      <div className="widget review-listing">
        <ul className="comments-list">
          <li>
            <div className="comment">
              <div className="comment-body">
                <div className="meta-data">
                  <span className="comment-author">
                    {data?.patient_detail?.full_name}
                  </span>
                  <span className="comment-date">
                    Reviewed {moment(data?.date).format("LL")}
                  </span>
                  <div className="review-count rating">
                    <StarRatings
                      rating={data?.rating}
                      starRatedColor="yellow"
                      starDimension="15px"
                      starSpacing="5px"
                      //   changeRating={changeRating}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </div>
                <p className="comment-content">{data?.comment}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
