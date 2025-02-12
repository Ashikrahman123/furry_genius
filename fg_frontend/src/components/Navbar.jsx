import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    {
      title: "Exclusive Offers",
      link: "/exclusive-offers",
      badge: "Sale",
    },
    {
      title: "Dogs",
      link: "/dogs",
      dropdown: [
        {
          title: "Dog Food",
          items: [
            { name: "Dry Food", link: "/dog-dry-food" },
            { name: "Wet Food", link: "/dog-wet-food" },
            { name: "Puppy Food", link: "/puppy-food" },
          ],
        },
        {
          title: "Dog Treats",
          items: [
            { name: "Biscuits & Cookies", link: "/dog-biscuits" },
            { name: "Dental Treats", link: "/dog-dental-treats" },
          ],
        },
      ],
    },
    {
      title: "Cats",
      link: "/cats",
      dropdown: [
        {
          title: "Cat Food",
          items: [
            { name: "Dry Food", link: "/cat-dry-food" },
            { name: "Wet Food", link: "/cat-wet-food" },
          ],
        },
        {
          title: "Cat Treats",
          items: [
            { name: "Creamy Treats", link: "/cat-creamy-treats" },
            { name: "Jerky Treats", link: "/cat-jerky-treats" },
          ],
        },
      ],
    },
    {
      title: "Shop By Breed",
      link: "/shop-by-breed",
      dropdown: [
        {
          title: "Golden Retriever",
          image: "/images/golden-retriever.png",
          link: "/golden-retriever",
        },
        {
          title: "German Shepherd",
          image: "/images/german-shepherd.png",
          link: "/german-shepherd",
        },
      ],
    },
    {
      title: "Consult a Vet",
      link: "/consult-a-vet",
    },
    {
      title: "Pharmacy",
      link: "/pharmacy",
      dropdown: [
        {
          title: "Supplements",
          items: [
            { name: "Multivitamins", link: "/multivitamins" },
            { name: "Calcium Supplements", link: "/calcium-supplements" },
          ],
        },
        {
          title: "Prescription Diet",
          items: [
            { name: "Gastro Intestinal", link: "/gastro-intestinal" },
            { name: "Cardiac", link: "/cardiac" },
          ],
        },
      ],
    },
    {
      title: "FG Clinic",
      link: "/fg-clinic",
      badge: "New",
    },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="nav-item"
            onMouseEnter={() => handleDropdown(index)}
            onMouseLeave={() => handleDropdown(null)}
          >
            <Link to={item.link} className="nav-link">
              {item.title}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
              {item.dropdown && (
                <i className="fas fa-caret-down dropdown-icon"></i>
              )}
            </Link>
            {item.dropdown && activeDropdown === index && (
              <div className="dropdown">
                {item.dropdown.map((section, i) => (
                  <div key={i} className="dropdown-section">
                    {section.image ? (
                      <div className="dropdown-image">
                        <img src={section.image} alt={section.title} />
                        <Link to={section.link} className="dropdown-image-link">
                          {section.title}
                        </Link>
                      </div>
                    ) : (
                      <>
                        <h4 className="dropdown-title">{section.title}</h4>
                        <ul className="dropdown-list">
                          {section.items.map((subItem, j) => (
                            <li key={j}>
                              <Link to={subItem.link}>{subItem.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;