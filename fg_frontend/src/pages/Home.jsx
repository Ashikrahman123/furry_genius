import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/home.css";

const bannerImages = [
  "https://supertails.com/cdn/shop/files/31st_jan_web_1-min_1600x.png?v=1738301923",
  "https://supertails.com/cdn/shop/files/12th_jan_web_6-min_1600x.png?v=1737864478",
  "https://supertails.com/cdn/shop/files/22nd_jan_web_2-min_1600x.png?v=1737526610",
  "https://supertails.com/cdn/shop/files/31st_jan_web_5-min_1600x.png?v=1738301923",
  "https://supertails.com/cdn/shop/files/1st_Feb_web_3-min_1600x.png?v=1738411691",
  "https://supertails.com/cdn/shop/files/Wellness_corner-min_8641e5e0-617b-48cb-977e-45d30336f5de_1600x.png?v=1738382923"
];


const Home = () => {
  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    centerMode: true, // Center the current slide
    centerPadding: "0", // Remove extra padding
    arrows: false,
    dots: false,
    hoverPause: true,
    responsive: [
      {
        breakpoint: 768, // Adjust for tablets and mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container-fluid">
          <h1 className="display-4" style={{ fontWeight: "bold", color: "#333" }}>
            Welcome to Furry Genius
          </h1>
          <p className="lead" style={{ color: "#666" }}>
            Your one-stop shop for pet care and essentials
          </p>
          <Link to="/shop" className="btn btn-primary btn-lg" style={{ backgroundColor: "#ff6f61", border: "none" }}>
            Shop Now
          </Link>

          {/* Banner Section */}
          <div className="banner-container">
            <Slider {...sliderSettings}>
              {bannerImages.map((img, index) => (
                <div key={index} className="banner-slide">
                  <img src={img} alt={`Pet Banner ${index + 1}`} className="banner-image" />
                </div>
              ))}
            </Slider>
          </div>

          {/* Additional Banner with Small Height */}
          <div className="additional-banner">
            <img
              src="https://supertails.com/cdn/shop/files/Frame_1410082840-min_1155a787-a32c-4481-a1f2-5386647a914b_1600x.png?v=1737702944"
              alt="Additional Banner"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "fill",
              }}
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories container-fluid text-center">
        <h2 className="section-title">Shop by Category</h2>
        <div className="slider-container">
          <div className="slider">
            {[
              { src: "//supertails.com/cdn/shop/files/Frame_1410082321-min.png?v=1737029220", alt: "Dog Food", link: "/category/dog-food" },
              { src: "//supertails.com/cdn/shop/files/Frame_1410082322-min.png?v=1737029220", alt: "Cat Food", link: "/category/cat-food" },
              { src: "//supertails.com/cdn/shop/files/Frame_1410081982-min_c3149f1d-cc0d-44f7-a243-4b60082c9076.png?v=1737029220", alt: "Luxe", link: "/category/luxe" },
              { src: "//supertails.com/cdn/shop/files/Frame_1410081981-min_b0470a06-c482-443d-b65f-203ba66504f7.png?v=1737029219", alt: "Pharmacy", link: "/category/pharmacy" },
              { src: "//supertails.com/cdn/shop/files/Frame_1410081980-min_b753c7bb-5542-4568-b76c-2750595aafdf.png?v=1737029219", alt: "Festive", link: "/category/festive" },
              { src: "//supertails.com/cdn/shop/files/Frame_1410082340-min_a21d865e-2b67-450f-a5dd-b41d9989469f.png?v=1737624443", alt: "Toys", link: "/category/toys" },
              // Add more images if needed
            ].map((item, index) => (
              <img
                key={index}
                className="category-image"
                src={item.src}
                alt={item.alt}
                onClick={() => window.location.href = item.link}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brand Section */}
      <section className="featured container-fluid text-center">
        <h2 className="section-title">Featured Brands</h2>
        <div className="slider-container">
          <div className="slider">
            {[
              { src: "https://www.petsy.online/cdn/shop/files/Group_115_cd95613f-d974-4712-8ad1-afc46da59045_300x300.png?v=1733898623", alt: "Fur Pro", link: "/featured/fur-pro" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_116_300x300.png?v=1733898290", alt: "Zigly Lifestyle", link: "/featured/zigly-lifestyle" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_117_300x300.png?v=1733898291", alt: "Applod", link: "/featured/applod" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_123_91b6e4d6-88dd-42d1-a477-f9da83a2ecbf_300x300.png?v=1733898994", alt: "Drools", link: "/featured/drolls" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_128_b8b3d76f-f6df-4833-8cbb-16027ff94cdb_300x300.png?v=1733898959", alt: "Shiba", link: "/featured/shiba" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_121_300x300.png?v=1733898291", alt: "Whiskas", link: "/featured/whiskas" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_122_63db866d-615d-481a-9365-321d4f7d0015_300x300.png?v=1733899002", alt: "Kong", link: "/featured/kong" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_120_300x300.png?v=1733898291", alt: "Trixie", link: "/featured/trixie" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_118_300x300.png?v=1733898291", alt: "ChuckIt", link: "/featured/chuck-it" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_119_300x300.png?v=1733898291", alt: "Bark Butler", link: "/featured/bark-butler" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_126_300x300.png?v=1733898291", alt: "Farmina", link: "/featured/farmina" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_125_a7783dd2-9864-46a6-85f2-ee0c70d08e90_300x300.png?v=1733898973", alt: "Happy Puppy", link: "/featured/happy-puppy" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_124_2fcdcd53-e624-463f-bae6-9d676a44d293_300x300.png?v=1733898983", alt: "Mutt-Ofcourse", link: "/featured/mutt" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_127_562e9f6a-0f0d-4a71-b4d2-c093f8c5acc8_300x300.png?v=1733899220", alt: "Arden Grange", link: "/featured/ardan-grange" },
              // Add more images if needed
            ].map((item, index) => (
              <img
                key={index}
                className="featured-image"
                src={item.src}
                alt={item.alt}
                onClick={() => window.location.href = item.link}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      {/* Price Under Section */}
      <section className="price-under container-fluid text-center my-5">
        <h2 className="section-title">Under your budget</h2>
        <div className="slider-container">
          <div className="slider">
            {[
              { src: "https://www.petsy.online/cdn/shop/files/Group_147_300x300.png?v=1733901767", alt: "Budget Product @299", link: "/featured/budget-299" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_148_300x300.png?v=1733901778", alt: "Budget Product  @399", link: "/featured/budget-399" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_149_300x300.png?v=1733901783", alt: "Budget Product @499", link: "/featured/budget-499" },
              { src: "https://www.petsy.online/cdn/shop/files/Group_150_300x300.png?v=1733901790", alt: "Budget Product @599", link: "/featured/budget-599" },
            ].map((item, index) => (
              <img
                key={index}
                className="budget-image"
                src={item.src}
                alt={item.alt}
                onClick={() => window.location.href = item.link}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="featured-products container-fluid my-5 text-center">
        <h2 style={{ fontWeight: "bold", color: "#333" }}>Featured Products</h2>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="product-card p-3 border rounded">
              <img src="/images/product1.jpg" alt="Product" className="img-fluid rounded" />
              <h5 style={{ color: "#333", marginTop: "10px" }}>Premium Dog Food</h5>
              <p style={{ color: "#ff6f61", fontWeight: "bold" }}>$25.99</p>
              <button className="btn btn-outline-primary" style={{ borderColor: "#ff6f61", color: "#ff6f61" }}>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-card p-3 border rounded">
              <img src="/images/product2.jpg" alt="Product" className="img-fluid rounded" />
              <h5 style={{ color: "#333", marginTop: "10px" }}>Cat Scratching Post</h5>
              <p style={{ color: "#ff6f61", fontWeight: "bold" }}>$15.99</p>
              <button className="btn btn-outline-primary" style={{ borderColor: "#ff6f61", color: "#ff6f61" }}>
                Add to Cart
              </button>
            </div>
          </div>
          {/* Add more featured products here */}
        </div>
      </section>

      {/* Call to Action - Book Appointment */}
      <section className="cta text-center py-5" style={{ backgroundColor: "#ff6f61" }}>
        <h2 style={{ color: "#fff", fontWeight: "bold" }}>Need Pet Services?</h2>
        <p style={{ color: "#fff" }}>Book a grooming or veterinary appointment today!</p>
        <Link to="/booking" className="btn btn-light btn-lg" style={{ backgroundColor: "#fff", color: "#ff6f61" }}>
          Book Now
        </Link>
      </section>
    </div>
  );
};

export default Home;