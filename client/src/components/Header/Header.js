import headerScript from "./HeaderScript";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

let previousScroll = 0;

const Header = () => {
  useEffect(() => {
    headerScript();

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const getInfo = () => {
      fetch("http://localhost:8081/")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
          }
        )
  };

  const isSticky = (e) => {
    // console.log(previousScroll);
    const header = document.querySelectorAll(".header")[1];
    const headerMobile = document.querySelectorAll(".header")[0];
    const scrollTop = window.scrollY;
    scrollTop <= 250
      ? header.classList.remove("header-hidden")
      : header.classList.add("header-hidden");
    previousScroll >= scrollTop
      ? header.classList.remove("header-hidden")
      : header.classList.add("header-hidden");
    // scrollTop <= 150
    //   ? headerMobile.classList.remove("header-hidden-mobile")
    //   : headerMobile.classList.add("header-hidden-mobile");
    // previousScroll >= scrollTop
    //   ? headerMobile.classList.remove("header-hidden-mobile")
    //   : headerMobile.classList.add("header-hidden-mobile");
    previousScroll = scrollTop;
  };

  const [viewSubMobileMenu, setViewSubMobileMenu] = useState(false);
  const [viewSubMobileMenuSecond, setViewSubMobileMenuSecond] = useState(false);

  const mobileMenuView = () => {
    setViewSubMobileMenu(!viewSubMobileMenu);
    setViewSubMobileMenuSecond(false);
  };
  const mobileMenuViewSecond = () => {
    setViewSubMobileMenuSecond(!viewSubMobileMenuSecond);
    setViewSubMobileMenu(false);
  };

  return (
    <>
      <header>
        <div
          id="header-mobile"
          className="header mobile-visibility flex-mobile-header"
        >
          <svg
            class="burger-mobile"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" fill="#231F20" />
            <path d="M13 19H35" stroke="white" stroke-width="2" />
            <path d="M13 24L35 24" stroke="white" stroke-width="2" />
            <path d="M13 29L35 29" stroke="white" stroke-width="2" />
          </svg>
          <div class="header-logo">
            <HashLink to="/#top">
              <img src="/img/logo.svg" alt="logo" />
            </HashLink>
          </div>
          {/* <div class="">
            <HashLink to="/rent#top">
              <button class="orange-button orange-button-hover">
                Арендовать
              </button>
            </HashLink>
          </div> */}
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
              <div
                class={`mobile-menu-item ${
                  viewSubMobileMenu ? "mobile-menu-item-active" : ""
                }`}
                onClick={mobileMenuView}
              >
                <HashLink
                  to="/#services-block"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  Услуги
                </HashLink>
                <svg
                  className={`${
                    viewSubMobileMenu ? "mobile-menu-svg-rotate" : ""
                  }`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 11L11.8571 13L9 11" stroke="#8D8D8D" />
                </svg>
              </div>
              <div
                class={`sub-mobile-items ${
                  viewSubMobileMenu ? "" : "sub-mobile-items-none"
                }`}
              >
                <div class="mobile-menu-item sub-mobile-item">
                  <HashLink to={"/events#top"}>Мероприятия </HashLink>
                </div>
                <div class="mobile-menu-item sub-mobile-item">
                  <HashLink to="/rent#top">Аренда</HashLink>
                </div>
                <div class="mobile-menu-item sub-mobile-item">
                  <HashLink to={"/corporat#top"}>Сотрудничество</HashLink>
                </div>
                {/* <div class="mobile-menu-item sub-mobile-item">
                  <a href="form-page.html">Регистрация</a>
                </div> */}
              </div>

              <div class="mobile-menu-item">
                <HashLink
                  to="/#advantage-block"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  Преимущества
                </HashLink>
              </div>

              <div
                class={`mobile-menu-item ${
                  viewSubMobileMenuSecond ? "mobile-menu-item-active" : ""
                }`}
                onClick={mobileMenuViewSecond}
              >
                <HashLink to={"/events#top"}>Мероприятия</HashLink>
                <svg
                  className={`${
                    viewSubMobileMenuSecond ? "mobile-menu-svg-rotate" : ""
                  }`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 11L11.8571 13L9 11" stroke="#8D8D8D" />
                </svg>
              </div>
              <div
                class={`sub-mobile-items ${
                  viewSubMobileMenuSecond ? "" : "sub-mobile-items-none"
                }`}
              >
                <div class="mobile-menu-item sub-mobile-item">
                  <HashLink
                    to="/#events-block"
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Ближайшие
                  </HashLink>
                </div>
                <div class="mobile-menu-item sub-mobile-item">
                  <HashLink
                    to="/events#events-feature"
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Все будущие
                  </HashLink>
                </div>
                <div class="mobile-menu-item sub-mobile-item">
                  <HashLink
                    to="/events#events-past"
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Все прошедшие
                  </HashLink>
                </div>
                {/* <div class="mobile-menu-item sub-mobile-item">
                  <a href="form-page.html">Регистрация</a>
                </div> */}
              </div>
              <div class="mobile-menu-item">
                <HashLink
                  to="/#reviews"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  Отзывы
                </HashLink>
              </div>
              <div class="mobile-menu-item">
                <HashLink
                  to="/#contacts-block"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  Контакты
                </HashLink>
              </div>
              <div class="mobile-menu-item">
                <HashLink
                  to="/gallery#top"
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                >
                  Фотоотчеты
                </HashLink>
              </div>
            </div>
          </div>
        </div>

        <div className="header desktop-visibility">
          <div class="header-logo">
            <HashLink to={"/#top"}>
              <img src="/img/logo.svg" alt="logo" />
            </HashLink>
          </div>
          {/* <div class="menu-item">
              <HashLink
                to="/#subscribe-email"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                <button class="orange-button orange-button-hover">
                  Будь в курсе
                </button>
              </HashLink>
            </div> */}

          <div class="menu-item">
            <HashLink
              to="/#services-block"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Услуги
            </HashLink>
            <div class="arrow-default"></div>
            <div class="arrow-hover"></div>
            <div class="sub-menu">
              <ul>
                <HashLink to={"/events#top"}>
                  <li>Мероприятия</li>
                </HashLink>
                {/* ;<a href="index.html#events-block">Ближайшие</a> */}

                <HashLink to="/rent#top">
                  <li>Аренда</li>
                </HashLink>

                <HashLink to={"/corporat#top"}>
                  <li>Сотрудничество</li>
                </HashLink>
                {/* <!-- <li><a href="form-page.html">Регистрация</a></li> --> */}
              </ul>
            </div>
          </div>

          <HashLink
            to="/#advantage-block"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            <div class="menu-item">Преимущества</div>
          </HashLink>
          <div class="menu-item">
            <HashLink to={"/events#top"}>Мероприятия</HashLink>
            <div class="arrow-default"></div>
            <div class="arrow-hover"></div>
            <div class="sub-menu">
              <ul>
                <HashLink
                  to="/#events-block"
                  scroll={(el) =>
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <li>Ближайшие</li>
                </HashLink>
                {/* ;<a href="index.html#events-block">Ближайшие</a> */}

                <HashLink
                  to="/events#events-feature"
                  scroll={(el) =>
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <li>Все будущие</li>
                </HashLink>

                <HashLink
                  to="/events#events-past"
                  scroll={(el) =>
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <li>Все прошедшие</li>
                </HashLink>
                {/* <!-- <li><a href="form-page.html">Регистрация</a></li> --> */}
              </ul>
            </div>
          </div>

          <HashLink
            to="/#reviews"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            <div class="menu-item">Отзывы</div>
          </HashLink>
          <HashLink
            to="/#contacts-block"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            <div class="menu-item">Контакты</div>
          </HashLink>
          <HashLink
            to="/gallery#top"
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
          >
            <div class="menu-item">Фотоотчеты</div>
          </HashLink>

          <div id="header-button" class="menu-item">
            <HashLink to="/rent#top">
              <button
                class="orange-button orange-button-hover"
                onClick={() => getInfo()}
              >
                Арендовать
              </button>
            </HashLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
