import React from "react";

const NewsItem = ({
  title,
  description,
  imageURL,
  price,
  brand,
  model,
  discount,
}) => {
  const shortDescription = description
    ? description.slice(0, 88)
    : "No description available";

  return (
    <div
      className="card shadow-lg mb-4"
      style={{ border: "1px solid #ddd", borderRadius: "8px" }}
    >
      {/* Image Section */}
      <img
        src={
          imageURL && imageURL.endsWith(".jpg")
            ? imageURL
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgrd6iuhDTYxsdjR6Fg50ydpqqWCbPPVZ_w&s"
        }
        className="card-img-center"
        alt="Product Thumbnail"
        style={{
          objectFit: "contain",
          height: "200px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
      <div className="card-body">
        {/* Brand Label */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge rounded-pill bg-primary">
            {brand || "Unknown Brand"}
          </span>
          {discount > 0 && (
            <span className="badge rounded-pill bg-danger">
              {discount}% off
            </span>
          )}
        </div>

        {/* Product Title */}
        <h5 className="card-title">{title}</h5>

        {/* Short Description */}
        <p className="card-text text-muted">{shortDescription}</p>

        {/* Price, Model, and Discount Info */}
        <div className="d-flex justify-content-between">
          <p className="card-text">
            <strong>Price:</strong> ${price}
          </p>
          <p className="card-text">
            <strong>Model:</strong> {model || "Unknown Model"}
          </p>
        </div>

        {/* Buy Now Button */}
        <button className="btn btn-sm btn-dark mt-2">Buy Now</button>
      </div>
    </div>
  );
};

export default NewsItem;
