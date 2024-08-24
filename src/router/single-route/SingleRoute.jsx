import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Stay from "../../components/stay/Stay";
import { useFetch } from "../../hooks/useFetch";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import img from "../../assets/images/Vector.svg";
import { AiOutlineHome } from "react-icons/ai";
import SingleRouteLoading from "../../components/loading/SingleRouteLoading";
import { FaAngleRight } from "react-icons/fa6";

const SingleRoute = () => {
  let [count, setCount] = useState(1);

  let { id } = useParams();
  let { data, loading } = useFetch(`/products/${id}`);
  console.log(data);
  return (
    <>
      <div className="navigate">
        <div className="container">
          <ul>
            <li>
              <Link to={"/"}>
                <AiOutlineHome /> Home <FaAngleRight />
              </Link>
            </li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      <div className="container single__route__content">
        <div className="main">
          {loading ? (
            <SingleRouteLoading />
          ) : (
            <div className="prod">
              <div className="product__img">
                <img
                  className="img"
                  src={data?.data?.image}
                  alt={data?.data?.title}
                />
              </div>
              <div className="product__about">
                <h2 className="on">{data?.data?.title}</h2>
                <div className="price">
                  <h1 className="onn"> ${data?.data?.price * 0.74}</h1>
                  <span>
                    <h6 className="hh">26% Off</h6>
                    <h4 className="hhh">${data?.data?.price}</h4>
                  </span>
                </div>
                <p className="title__desc">{data?.data?.description}</p>
                <div className="cart">
                  <div className="count">
                    <button className="btnn"
                      disabled={count <= 1}
                      onClick={() => setCount((p) => p - 1)}
                    >
                      -
                    </button>
                    <span className="spend">{count}</span>
                    <button className="btm"
                      disabled={count >= 10}
                      onClick={() => setCount((p) => p + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="add">
                    <BsCart3 /> Add to cart
                  </button>
                  <div className="heart">
                    <IoMdHeartEmpty />
                  </div>
                  <div className="heart">
                    <img src={img} alt="" />
                  </div>
                </div>
                <ul className="type">
                  <li className="types">
                    <p>Type: </p>
                    <h5>Organic</h5>
                  </li>
                  <li className="types">
                    <p>MFG: </p>
                    <h5>Jun 4.2022</h5>
                  </li>
                  <li className="types">
                    <p>LIFE:</p>
                    <h5> 70 days </h5>
                  </li>
                  <li className="types">
                    <p>SKU: </p>
                    <h5>FWM15VKT</h5>
                  </li>
                  <li className="types">
                    <p>Tags: </p>
                    <h5>Snack, Organic, Brown</h5>
                  </li>
                  <li className="types">
                    <p>Stock: </p>
                    <h5>8 Items In Stock</h5>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="desc">
            <div className="links">
              <h5>Description</h5>
              <h5>Additional info</h5>
              <h5>Vendor</h5>
              <h5>Reviews (3)</h5>
            </div>
            <p>
              Uninhibited carnally hired played in whimpered dear gorilla koala
              depending and much yikes off far quetzal goodness and from for
              grimaced goodness unaccountably and meadowlark near unblushingly
              crucial scallop tightly neurotic hungrily some and dear furiously
              this apart.
            </p>
            <p>
              Spluttered narrowly yikes left moth in yikes bowed this that
              grizzly much hello on spoon-fed that alas rethought much decently
              richly and wow against the frequent fluidly at formidable
              acceptably flapped besides and much circa far over the bucolically
              hey precarious goldfinch mastodon goodness gnashed a jellyfish and
              one however because.
            </p>
            <div className="list">
              <ul className="ul1">
                <li>Type Of Packing</li>
                <li>Color</li>
                <li>Quantity Per Case</li>
                <li>Ethyl Alcohol</li>
                <li>Piece In One</li>
              </ul>
              <ul>
                <li>Bottle</li>
                <li>Green, Pink, Powder Blue, Purple</li>
                <li>100ml</li>
                <li>70%</li>
                <li>Carton</li>
              </ul>
            </div>
            <div className="hr"></div>
            <p>
              Laconic overheard dear woodchuck wow this outrageously taut beaver
              hey hello far meadowlark imitatively egregiously hugged that yikes
              minimally unanimous pouted flirtatiously as beaver beheld above
              forward energetic across this jeepers beneficently cockily less a
              the raucously that magic upheld far so the this where crud then
              below after jeez enchanting drunkenly more much wow callously
              irrespective limpet.
            </p>
            <h3>Packaging & Delivery</h3>
            <div className="hr"></div>
            <p>
              Less lion goodness that euphemistically robin expeditiously
              bluebird smugly scratched far while thus cackled sheepishly rigid
              after due one assenting regarding censorious while occasional or
              this more crane went more as this less much amid overhung
              anathematic because much held one exuberantly sheep goodness so
              where rat wry well concomitantly.
            </p>
            <p>
              Scallop or far crud plain remarkably far by thus far iguana lewd
              precociously and and less rattlesnake contrary caustic wow this
              near alas and next and pled the yikes articulate about as less
              cackled dalmatian in much less well jeering for the thanks blindly
              sentimental whimpered less across objectively fanciful grimaced
              wildly some wow and rose jeepers outgrew lugubrious luridly
              irrationally attractively dachshund.
            </p>
            <h3>Suggested Use</h3>
            <p>Refrigeration not necessary.</p>
            <p>Stir before serving</p>
            <h3>Other Ingredients</h3>
            <p>Organic raw pecans, organic raw cashews.</p>
            <p>
              This butter was produced using a LTG (Low Temperature Grinding)
              process
            </p>
            <p>
              Made in machinery that processes tree nuts but does not process
              peanuts, gluten, dairy or soy
            </p>
            <h3>Warnings</h3>
            <p>Oil separation occurs naturally. May contain pieces of shell.</p>
          </div>
        </div>

      </div>
      <Stay />
    </>
  );
};

export default SingleRoute;
