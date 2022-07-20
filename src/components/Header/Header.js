import headerScript from "./HeaderScript";
import { useEffect, useState } from "react";

const Header = () => {
  useEffect(() => {
    headerScript();
  }, []);

  const [viewSubMobileMenu, setViewSubMobileMenu] = useState(false)

  const mobileMenuView = () => {
    setViewSubMobileMenu(!viewSubMobileMenu)
  }

  return (
    <>
      <header>
        <div className="header mobily-visibility">
          <div class="burger-mobile">
            <img src="/img/Mobile-Menu.svg" alt="logo" />
          </div>
          <div class="header-logo">
            <a href="/">
              <img src="/img/logo.svg" alt="logo" />
            </a>
          </div>
          <div class="">
            <button class="orange-button orange-button-hover">
              <a href="rent.html">Арендовать</a>
            </button>
          </div>
          <div class="scroll-mobile-menu">
            <div class="menu-exit">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g id="cross">
                  <line class="cls-1" x1="7" x2="25" y1="7" y2="25" />
                  <line class="cls-1" x1="7" x2="25" y1="25" y2="7" />
                </g>
              </svg>
            </div>
            <div class="mobile-menu">
              <div class="mobile-menu-item">
                <a href="index.html#services-block">Услуги</a>
              </div>
              <div class="mobile-menu-item" onClick={mobileMenuView}>
                Мероприятия
                <svg className={`${viewSubMobileMenu ? "mobile-menu-svg-rotate" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 11L11.8571 13L9 11" stroke="#8D8D8D" />
                </svg>
              </div>
              <div class={`sub-mobile-items ${viewSubMobileMenu ? "" : "sub-mobile-items-none"}`}>
                <div class="mobile-menu-item sub-mobile-item">
                  <a href="index.html#events-block">Ближайшие</a>
                </div>
                <div class="mobile-menu-item sub-mobile-item">
                  <a href="events.html#events-feature">Все будущие</a>
                </div>
                <div class="mobile-menu-item sub-mobile-item">
                  <a href="events.html#events-past">Все прошедшие</a>
                </div>
                <div class="mobile-menu-item sub-mobile-item">
                  <a href="form-page.html">Регистрация</a>
                </div>
              </div>
              <div class="mobile-menu-item">
                <a href="index.html#reviews">Отзывы</a>
              </div>
              <div class="mobile-menu-item">
                <a href="index.html#contacts-block">Контакты</a>
              </div>
            </div>
          </div>
        </div>

        <div className="header desktop-visibility">
          <div class="header-item">
            <div class="menu-item">
              <button class="orange-button orange-button-hover">
                <a href="rent.html">Будь в курсе</a>
              </button>
            </div>
            <div class="menu-item">
              <a href="index.html#services-block">Услуги</a>
            </div>
            <div class="menu-item">
              <a href="index.html#advantage-block">Преимущества</a>
            </div>
            <div class="menu-item">
              <a href="events.html">Мероприятия</a>
              <div class="arrow-default"></div>
              <div class="arrow-hover"></div>
              <div class="sub-menu">
                <ul>
                  <li>
                    <a href="index.html#events-block">Ближайшие</a>
                  </li>
                  <li>
                    <a href="events.html#events-feature">Все будущие</a>
                  </li>
                  <li>
                    <a href="events.html#events-past">Все прошедшие</a>
                  </li>
                  {/* <!-- <li><a href="form-page.html">Регистрация</a></li> --> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="header-logo">
            <a href="index.html">
              <img src="/img/logo.svg" alt="logo" />
            </a>
          </div>
          <div class="header-item">
            <div class="menu-item">
              <a href="index.html#reviews">Фотогалерея</a>
            </div>
            <div class="menu-item">
              <a href="index.html#reviews">Отзывы</a>
            </div>
            <div class="menu-item">
              <a href="index.html#contacts-block">Контакты</a>
            </div>
            <div class="menu-item">
              <button class="orange-button orange-button-hover">
                <a href="rent.html">Арендовать</a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
