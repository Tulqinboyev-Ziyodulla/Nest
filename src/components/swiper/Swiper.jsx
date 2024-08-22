import React from "react";
const Swipers = () => {
  return (
    <div style={{ marginTop: "30px" }} className="container swiper">
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiper__img" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
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
