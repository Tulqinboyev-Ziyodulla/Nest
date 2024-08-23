import React from "react";
const Swipers = () => {
  return (
    <div style={{ marginTop: "30px" }} className="container swiper">
      <div className="text">
        <h2>Fresh Vegetables Big discount </h2>
        <p>Save up to 50% off on your first order</p>
        <form>
          <input
            required
            type="email"
            placeholder="Your emaill address"
            name="email"
            id="email"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Swipers;
