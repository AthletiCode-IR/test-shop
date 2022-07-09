import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Taskbar.scss";

const Taskbar = () => {
  const navItems = [
    {
      id: 1,
      title: "Shop",
      route: "/shop",
      icon: <ion-icon name="storefront-outline"></ion-icon>
    },
    {
      id: 2,
      title: "Cart",
      route: "/cart",
      icon: <ion-icon name="cart-outline"></ion-icon>
    },
    {
      id: 3,
      title: "Home",
      route: "/",
      icon: <ion-icon name="home-outline"></ion-icon>
    },
    {
      id: 4,
      title: "Auth",
      route: "/auth",
      icon: <ion-icon name="person-outline"></ion-icon>
    },
    {
      id: 5,
      title: "Contact",
      route: "/contact",
      icon: <ion-icon name="paper-plane-outline"></ion-icon>
    }
  ];

  useEffect(() => {
    const items = document.querySelectorAll("li.nav-item");
    items[2].classList.add("active-nav-item");
  }, []);

  const navItemHover = () => {
    const items = document.querySelectorAll("li.nav-item");
    // const popItems = document.querySelectorAll("span.link-pop");
    // const titleItems = document.querySelectorAll("span.link-title");
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      item.onmouseover = () => {
        // popItems[index].style = "transform: scale(0)";
        item.classList.add("hover-nav-item");
      };
      items[index].onmouseout = () => {
        item.classList.remove("hover-nav-item");
        // popItems[index].style = "transform: scale(0)";
      };
      items[index].onclick = () => {
        for (let other = 0; other < items.length; other++) {
          const element = items[other];
          if (index === other) {
            element.classList.add("active-nav-item");
          } else {
            element.classList.remove("active-nav-item");
          }
        }
      };
    }
  };

  navItemHover();

  return (
    <nav className="taskbar">
      <ul>
        {navItems.map((item) => (
          <NavItem {...item} key={item.id} />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <Link to={props.route}>
        <span className="link-icon">{props.icon}</span>
        <span className="link-title">{props.title}</span>
        {/* <span className="link-pop">{props.title}</span> */}
      </Link>
    </li>
  );
};

export { Taskbar };
