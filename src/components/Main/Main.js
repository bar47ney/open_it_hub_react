import mainScript from "./MainScript";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { eventsFeature } from "../eventsFeature";

const Main = () => {
  useEffect(() => {
    mainScript();
  }, []);

  const [positionMainSlider, setPositionMainSlider] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(1);

  const toLeftMainSlider = () => {
    setPositionMainSlider(positionMainSlider + 100);
    setCurrentSlider(currentSlider - 1);
    console.log(currentSlider);
    if (currentSlider <= 1) {
      setCurrentSlider(3);
      setPositionMainSlider(-200);
    }
  };
  const toRigthMainSlider = () => {
    setPositionMainSlider(positionMainSlider - 100);
    setCurrentSlider(currentSlider + 1);
    console.log(currentSlider);
    if (currentSlider >= 3) {
      setCurrentSlider(1);
      setPositionMainSlider(0);
    }
  };

  return (
    <>
      <main class="main">
        <div className="main-slider-arrows-block">
          <div
            className="main-slider-arrows main-slider-arrows-left"
            onClick={toLeftMainSlider}
          >
            <img src="img/arrow.png" alt=""></img>
          </div>
          <div
            className="main-slider-arrows main-slider-arrows-right"
            onClick={toRigthMainSlider}
          >
            <img src="img/arrow.png" alt=""></img>
          </div>
        </div>
        <div class="main-slider" style={{ left: positionMainSlider + "%" }}>
          <div id="slider-1" class="slider-item">
            <h1 class="slider-title">
              OPEN IT ХАБ — новое event-пространство
              <br />
              для мероприятий, онлайн-трансляций и студийной съёмки
            </h1>

            <HashLink
              to="/#services-block"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <button class="btn-slider orange-button-hover btn-slider-bottom">
                К списку услуг
              </button>
            </HashLink>

            <div class="slider-decoration">
              <img src="/img/slider-decoration.png" alt="image-decoration" />
            </div>
            <div class="slider-shadow"></div>
          </div>

          <div id="slider-2" class="slider-item">
            <h1 class="slider-title">
              В OPEN IT ХАБ на постоянной основе проходят
              <br />
              уникальные мероприятия. Спешите записаться
            </h1>

            <HashLink to={"/events#top"}>
              <button class="btn-slider orange-button-hover btn-slider-bottom">
                К списку ивентов
              </button>
            </HashLink>

            <div class="slider-decoration">
              <img src="/img/slider-decoration.png" alt="image-decoration" />
            </div>
            <div class="slider-shadow"></div>
          </div>

          <div id="slider-3" class="slider-item">
            <h1 class="slider-title">
              OPEN IT ХАБ предлагает корпоративное сотрудничество
              <br />
              IT компаниям и представителям бизнеса
            </h1>

            <HashLink to={"/corporat#top"}>
              <button class="btn-slider orange-button-hover btn-slider-bottom">
                Подробнее
              </button>
            </HashLink>

            <div class="slider-decoration">
              <img src="/img/slider-decoration.png" alt="image-decoration" />
            </div>
            <div class="slider-shadow"></div>
          </div>
        </div>
        <div class="hab-description">
          <div class="slider-nav">
            <img
              className={`${currentSlider === 1 ? "slider-nav-active" : ""}`}
              src="img/slider-circle.svg"
              alt=""
            />
            <img
              className={`${currentSlider === 2 ? "slider-nav-active" : ""}`}
              src="img/slider-circle.svg"
              alt=""
            />
            <img
              className={`${currentSlider === 3 ? "slider-nav-active" : ""}`}
              src="img/slider-circle.svg"
              alt=""
            />
          </div>
          <p class="desktop-visibility">
            <img src="img/Horizontal-logo.png" alt="" />— новое пространство в
            самом сердце делового Минска.
            <br />
            Никаких обшарпанных диванов и скрипучих кресел — только новая мебель
            и свежее
            <br />
            оборудование, чтобы ваше мероприятие прошло на высшем уровне.
          </p>
          <p class="mobile-visibility">
            <img src="img/Horizontal-logo.png" alt="" />— новое пространство в
            самом сердце делового
            <br />
            Минска. Никаких обшарпанных диванов и скрипучих кресел —<br />
            только новая мебель и свежее оборудование, чтобы
            <br />
            ваше мероприятие прошло на высшем уровне.
          </p>
        </div>
        <div id="services-block" class="services-block">
          <h2 class="services-block-header">Наши услуги</h2>
          <div class="services-items">
            <div class="services-item">
              <HashLink to={"/events#top"}>
                <div class="services-item-gray"></div>
                <div class="services-item-icons">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.1507 23.8907H26.9315C27.9178 23.8907 28.9041 23.1635 28.9041 22.1453V15.6C28.9041 14.7273 28.0822 14 26.9315 14H23.1507C22.1644 14 21.1781 14.7273 21.1781 15.6V22.1453C21.1781 23.1635 22.1644 23.8907 23.1507 23.8907Z"
                      fill="url(#paint0_linear_402_287)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M62.4384 20.5453H60.6301V22.1453C60.6301 24.0362 58.9863 25.4907 56.8493 25.4907H53.0685C51.0959 25.6361 49.4521 24.1816 49.4521 22.2908V20.5453H30.5479V22.1453C30.5479 24.0362 28.9041 25.4907 26.7671 25.4907H23.1507C21.0137 25.6361 19.3699 24.1816 19.3699 22.2908V20.5453H17.3973C13.2877 20.5453 10 23.5998 10 27.2361V60.3991C10 64.0354 13.2877 66.9445 17.3973 66.9445H62.4384C66.5479 66.9445 70 64.0354 70 60.3991V27.2361C70 23.5998 66.7123 20.5453 62.4384 20.5453ZM66.2192 60.3991C66.2192 62.1445 64.5753 63.7445 62.4384 63.7445H17.3973C15.4247 63.7445 13.6164 62.29 13.6164 60.3991V33.9269C13.6164 32.1815 15.2603 30.5815 17.3973 30.5815C23.9726 30.5815 66.2192 27.527 66.2192 33.9269V60.3991Z"
                      fill="url(#paint1_linear_402_287)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M53.0685 23.8907H56.8493C57.8356 23.8907 58.6575 23.1635 58.6575 22.1453V15.6C58.6575 14.7273 57.8356 14 56.8493 14H53.0685C52.0822 14 51.2603 14.7273 51.2603 15.6V22.1453C51.2603 23.1635 52.0822 23.8907 53.0685 23.8907Z"
                      fill="url(#paint2_linear_402_287)"
                    />
                    <path
                      d="M26.3024 51.0699C25.5664 51.0699 24.9184 50.9259 24.3584 50.6379C23.8064 50.3499 23.3784 49.9579 23.0744 49.4619C22.7704 48.9579 22.6184 48.3859 22.6184 47.7459C22.6184 47.0979 22.7664 46.5259 23.0624 46.0299C23.3664 45.5259 23.7784 45.1339 24.2984 44.8539C24.8184 44.5659 25.4064 44.4219 26.0624 44.4219C26.6944 44.4219 27.2624 44.5579 27.7664 44.8299C28.2784 45.0939 28.6824 45.4779 28.9784 45.9819C29.2744 46.4779 29.4224 47.0739 29.4224 47.7699C29.4224 47.8419 29.4184 47.9259 29.4104 48.0219C29.4024 48.1099 29.3944 48.1939 29.3864 48.2739H24.1424V47.1819H28.4024L27.6824 47.5059C27.6824 47.1699 27.6144 46.8779 27.4784 46.6299C27.3424 46.3819 27.1544 46.1899 26.9144 46.0539C26.6744 45.9099 26.3944 45.8379 26.0744 45.8379C25.7544 45.8379 25.4704 45.9099 25.2224 46.0539C24.9824 46.1899 24.7944 46.3859 24.6584 46.6419C24.5224 46.8899 24.4544 47.1859 24.4544 47.5299V47.8179C24.4544 48.1699 24.5304 48.4819 24.6824 48.7539C24.8424 49.0179 25.0624 49.2219 25.3424 49.3659C25.6304 49.5019 25.9664 49.5699 26.3504 49.5699C26.6944 49.5699 26.9944 49.5179 27.2504 49.4139C27.5144 49.3099 27.7544 49.1539 27.9704 48.9459L28.9664 50.0259C28.6704 50.3619 28.2984 50.6219 27.8504 50.8059C27.4024 50.9819 26.8864 51.0699 26.3024 51.0699ZM32.3035 50.9739L29.5915 44.5179H31.5235L33.7795 50.0739H32.8195L35.1595 44.5179H36.9595L34.2355 50.9739H32.3035ZM40.7516 51.0699C40.0156 51.0699 39.3676 50.9259 38.8076 50.6379C38.2556 50.3499 37.8276 49.9579 37.5236 49.4619C37.2196 48.9579 37.0676 48.3859 37.0676 47.7459C37.0676 47.0979 37.2156 46.5259 37.5116 46.0299C37.8156 45.5259 38.2276 45.1339 38.7476 44.8539C39.2676 44.5659 39.8556 44.4219 40.5116 44.4219C41.1436 44.4219 41.7116 44.5579 42.2156 44.8299C42.7276 45.0939 43.1316 45.4779 43.4276 45.9819C43.7236 46.4779 43.8716 47.0739 43.8716 47.7699C43.8716 47.8419 43.8676 47.9259 43.8596 48.0219C43.8516 48.1099 43.8436 48.1939 43.8356 48.2739H38.5916V47.1819H42.8516L42.1316 47.5059C42.1316 47.1699 42.0636 46.8779 41.9276 46.6299C41.7916 46.3819 41.6036 46.1899 41.3636 46.0539C41.1236 45.9099 40.8436 45.8379 40.5236 45.8379C40.2036 45.8379 39.9196 45.9099 39.6716 46.0539C39.4316 46.1899 39.2436 46.3859 39.1076 46.6419C38.9716 46.8899 38.9036 47.1859 38.9036 47.5299V47.8179C38.9036 48.1699 38.9796 48.4819 39.1316 48.7539C39.2916 49.0179 39.5116 49.2219 39.7916 49.3659C40.0796 49.5019 40.4156 49.5699 40.7996 49.5699C41.1436 49.5699 41.4436 49.5179 41.6996 49.4139C41.9636 49.3099 42.2036 49.1539 42.4196 48.9459L43.4156 50.0259C43.1196 50.3619 42.7476 50.6219 42.2996 50.8059C41.8516 50.9819 41.3356 51.0699 40.7516 51.0699ZM49.0419 44.4219C49.5539 44.4219 50.0099 44.5259 50.4099 44.7339C50.8179 44.9339 51.1379 45.2459 51.3699 45.6699C51.6019 46.0859 51.7179 46.6219 51.7179 47.2779V50.9739H49.8459V47.5659C49.8459 47.0459 49.7299 46.6619 49.4979 46.4139C49.2739 46.1659 48.9539 46.0419 48.5379 46.0419C48.2419 46.0419 47.9739 46.1059 47.7339 46.2339C47.5019 46.3539 47.3179 46.5419 47.1819 46.7979C47.0539 47.0539 46.9899 47.3819 46.9899 47.7819V50.9739H45.1179V44.5179H46.9059V46.3059L46.5699 45.7659C46.8019 45.3339 47.1339 45.0019 47.5659 44.7699C47.9979 44.5379 48.4899 44.4219 49.0419 44.4219ZM56.0548 51.0699C55.2948 51.0699 54.7028 50.8779 54.2788 50.4939C53.8548 50.1019 53.6428 49.5219 53.6428 48.7539V43.0899H55.5148V48.7299C55.5148 49.0019 55.5868 49.2139 55.7308 49.3659C55.8748 49.5099 56.0708 49.5819 56.3188 49.5819C56.6148 49.5819 56.8668 49.5019 57.0748 49.3419L57.5788 50.6619C57.3868 50.7979 57.1548 50.9019 56.8828 50.9739C56.6188 51.0379 56.3428 51.0699 56.0548 51.0699ZM52.6468 46.1019V44.6619H57.1228V46.1019H52.6468Z"
                      fill="url(#paint3_linear_402_287)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_402_287"
                        x1="22.6921"
                        y1="23.4131"
                        x2="64.6898"
                        y2="59.19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_402_287"
                        x1="22.6921"
                        y1="23.4131"
                        x2="64.6898"
                        y2="59.19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_402_287"
                        x1="22.6921"
                        y1="23.4131"
                        x2="64.6898"
                        y2="59.19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_402_287"
                        x1="28.4614"
                        y1="41.638"
                        x2="38.0736"
                        y2="60.9262"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <p>Проводим мероприятия, ивенты, бизнес-обучение</p>
              </HashLink>
            </div>
            <div class="services-item">
              <HashLink to="/rent#top">
                <div class="services-item-gray"></div>
                <div class="services-item-icons">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M68.9069 33.7809H11.0931C9.22269 33.7809 7.69232 35.2902 7.69232 37.1351V65.6458C7.69232 67.4906 9.22269 69 11.0931 69H68.9069C70.7773 69 72.3077 67.4906 72.3077 65.6458V37.1351C72.3077 35.2902 70.7773 33.7809 68.9069 33.7809Z"
                      fill="url(#paint0_linear_402_1532)"
                    />
                    <path
                      d="M57.3441 26.945C57.6842 27.2804 58.1943 27.4481 58.7045 27.4481C59.3846 27.4481 59.8948 27.1127 60.4049 26.6096C61.085 25.771 60.915 24.4293 60.0648 23.5908L51.0526 16.7147C50.0324 15.8761 48.332 16.2115 47.8219 17.5532C47.4818 18.3918 47.6518 19.398 48.502 20.0689L57.3441 26.945Z"
                      fill="url(#paint1_linear_402_1532)"
                    />
                    <path
                      d="M21.2956 27.9513C21.8057 27.9513 22.1458 27.7835 22.6559 27.4481L32.3482 20.0689C33.1984 19.398 33.3684 18.3918 33.0284 17.5532C32.5182 16.3792 30.8178 16.0438 29.7976 16.7147L20.1053 24.2616C19.085 24.9325 18.915 26.2741 19.5952 27.1127C20.1053 27.6158 20.7854 27.9513 21.2956 27.9513Z"
                      fill="url(#paint2_linear_402_1532)"
                    />
                    <path
                      d="M40.3401 20.0689C43.4392 20.0689 45.9514 17.591 45.9514 14.5344C45.9514 11.4779 43.4392 9 40.3401 9C37.241 9 34.7288 11.4779 34.7288 14.5344C34.7288 17.591 37.241 20.0689 40.3401 20.0689Z"
                      fill="url(#paint3_linear_402_1532)"
                    />
                    <path
                      d="M22.8641 54.5575C22.1041 54.5575 21.5121 54.3655 21.0881 53.9815C20.6641 53.5895 20.4521 53.0095 20.4521 52.2415V46.5775H22.3241V52.2175C22.3241 52.4895 22.3961 52.7015 22.5401 52.8535C22.6841 52.9975 22.8801 53.0695 23.1281 53.0695C23.4241 53.0695 23.6761 52.9895 23.8841 52.8295L24.3881 54.1495C24.1961 54.2855 23.9641 54.3895 23.6921 54.4615C23.4281 54.5255 23.1521 54.5575 22.8641 54.5575ZM19.4561 49.5895V48.1495H23.9321V49.5895H19.4561ZM28.3117 54.5575C27.6237 54.5575 27.0117 54.4135 26.4757 54.1255C25.9477 53.8375 25.5277 53.4455 25.2157 52.9495C24.9117 52.4455 24.7597 51.8735 24.7597 51.2335C24.7597 50.5855 24.9117 50.0135 25.2157 49.5175C25.5277 49.0135 25.9477 48.6215 26.4757 48.3415C27.0117 48.0535 27.6237 47.9095 28.3117 47.9095C28.9917 47.9095 29.5997 48.0535 30.1357 48.3415C30.6717 48.6215 31.0917 49.0095 31.3957 49.5055C31.6997 50.0015 31.8517 50.5775 31.8517 51.2335C31.8517 51.8735 31.6997 52.4455 31.3957 52.9495C31.0917 53.4455 30.6717 53.8375 30.1357 54.1255C29.5997 54.4135 28.9917 54.5575 28.3117 54.5575ZM28.3117 53.0215C28.6237 53.0215 28.9037 52.9495 29.1517 52.8055C29.3997 52.6615 29.5957 52.4575 29.7397 52.1935C29.8837 51.9215 29.9557 51.6015 29.9557 51.2335C29.9557 50.8575 29.8837 50.5375 29.7397 50.2735C29.5957 50.0095 29.3997 49.8055 29.1517 49.6615C28.9037 49.5175 28.6237 49.4455 28.3117 49.4455C27.9997 49.4455 27.7197 49.5175 27.4717 49.6615C27.2237 49.8055 27.0237 50.0095 26.8717 50.2735C26.7277 50.5375 26.6557 50.8575 26.6557 51.2335C26.6557 51.6015 26.7277 51.9215 26.8717 52.1935C27.0237 52.4575 27.2237 52.6615 27.4717 52.8055C27.7197 52.9495 27.9997 53.0215 28.3117 53.0215ZM36.5015 54.4615V48.0055H38.2895V49.8295L38.0375 49.3015C38.2295 48.8455 38.5375 48.5015 38.9615 48.2695C39.3855 48.0295 39.9015 47.9095 40.5095 47.9095V49.6375C40.4295 49.6295 40.3575 49.6255 40.2935 49.6255C40.2295 49.6175 40.1615 49.6135 40.0895 49.6135C39.5775 49.6135 39.1615 49.7615 38.8415 50.0575C38.5295 50.3455 38.3735 50.7975 38.3735 51.4135V54.4615H36.5015ZM44.7797 54.5575C44.0437 54.5575 43.3957 54.4135 42.8357 54.1255C42.2837 53.8375 41.8557 53.4455 41.5517 52.9495C41.2477 52.4455 41.0957 51.8735 41.0957 51.2335C41.0957 50.5855 41.2437 50.0135 41.5397 49.5175C41.8437 49.0135 42.2557 48.6215 42.7757 48.3415C43.2957 48.0535 43.8837 47.9095 44.5397 47.9095C45.1717 47.9095 45.7397 48.0455 46.2437 48.3175C46.7557 48.5815 47.1597 48.9655 47.4557 49.4695C47.7517 49.9655 47.8997 50.5615 47.8997 51.2575C47.8997 51.3295 47.8957 51.4135 47.8877 51.5095C47.8797 51.5975 47.8717 51.6815 47.8637 51.7615H42.6197V50.6695H46.8797L46.1597 50.9935C46.1597 50.6575 46.0917 50.3655 45.9557 50.1175C45.8197 49.8695 45.6317 49.6775 45.3917 49.5415C45.1517 49.3975 44.8717 49.3255 44.5517 49.3255C44.2317 49.3255 43.9477 49.3975 43.6997 49.5415C43.4597 49.6775 43.2717 49.8735 43.1357 50.1295C42.9997 50.3775 42.9317 50.6735 42.9317 51.0175V51.3055C42.9317 51.6575 43.0077 51.9695 43.1597 52.2415C43.3197 52.5055 43.5397 52.7095 43.8197 52.8535C44.1077 52.9895 44.4437 53.0575 44.8277 53.0575C45.1717 53.0575 45.4717 53.0055 45.7277 52.9015C45.9917 52.7975 46.2317 52.6415 46.4477 52.4335L47.4437 53.5135C47.1477 53.8495 46.7757 54.1095 46.3277 54.2935C45.8797 54.4695 45.3637 54.5575 44.7797 54.5575ZM53.07 47.9095C53.582 47.9095 54.038 48.0135 54.438 48.2215C54.846 48.4215 55.166 48.7335 55.398 49.1575C55.63 49.5735 55.746 50.1095 55.746 50.7655V54.4615H53.874V51.0535C53.874 50.5335 53.758 50.1495 53.526 49.9015C53.302 49.6535 52.982 49.5295 52.566 49.5295C52.27 49.5295 52.002 49.5935 51.762 49.7215C51.53 49.8415 51.346 50.0295 51.21 50.2855C51.082 50.5415 51.018 50.8695 51.018 51.2695V54.4615H49.146V48.0055H50.934V49.7935L50.598 49.2535C50.83 48.8215 51.162 48.4895 51.594 48.2575C52.026 48.0255 52.518 47.9095 53.07 47.9095ZM60.0829 54.5575C59.3229 54.5575 58.7309 54.3655 58.3069 53.9815C57.8829 53.5895 57.6709 53.0095 57.6709 52.2415V46.5775H59.5429V52.2175C59.5429 52.4895 59.6149 52.7015 59.7589 52.8535C59.9029 52.9975 60.0989 53.0695 60.3469 53.0695C60.6429 53.0695 60.8949 52.9895 61.1029 52.8295L61.6069 54.1495C61.4149 54.2855 61.1829 54.3895 60.9109 54.4615C60.6469 54.5255 60.3709 54.5575 60.0829 54.5575ZM56.6749 49.5895V48.1495H61.1509V49.5895H56.6749Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_402_1532"
                        x1="21.3608"
                        y1="19.6676"
                        x2="68.5115"
                        y2="57.8373"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_402_1532"
                        x1="21.3608"
                        y1="19.6676"
                        x2="68.5115"
                        y2="57.8373"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_402_1532"
                        x1="21.3608"
                        y1="19.6676"
                        x2="68.5115"
                        y2="57.8373"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_402_1532"
                        x1="21.3608"
                        y1="19.6676"
                        x2="68.5115"
                        y2="57.8373"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p>
                  Аренда
                  <br />
                  помещения
                </p>
              </HashLink>
            </div>
            <div class="services-item">
              <HashLink to={"/corporat#top"}>
                <div class="services-item-gray"></div>
                <div class="services-item-icons">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3895 35.5342C20.5316 35.5342 20.5316 35.5342 20.6737 35.5342C21.5263 35.5342 22.2368 34.9671 22.3789 33.9747C22.9474 29.8633 25.3632 26.1772 28.9158 24.0506L29.4842 25.3266C29.9105 26.1772 31.0474 26.1772 31.4737 25.3266L34.0316 20.6481C34.4579 19.9392 34.0316 19.2304 33.3211 18.9468L28.2053 17.8127C27.2105 17.6709 26.5 18.6633 26.9263 19.5139L27.4947 20.7899C22.8053 23.4835 19.6789 28.162 18.9684 33.5494C18.6842 34.5418 19.3947 35.3924 20.3895 35.5342ZM27.9211 38.2278C19.6789 38.2278 13 44.8911 13 53.1139C13 61.3367 19.6789 68 27.9211 68C36.1632 68 42.8421 61.3367 42.8421 53.1139C42.8421 44.8911 36.1632 38.2278 27.9211 38.2278ZM26.9263 50.2785L30.1947 51.9798C32.0421 52.9722 33.0368 54.957 32.7526 56.9418C32.4684 58.643 31.4737 59.919 29.9105 60.4861V61.0532C29.9105 62.0456 29.0579 62.8962 28.0632 62.8962C27.0684 62.8962 26.2158 62.0456 26.2158 61.0532V60.6278C24.6526 60.2025 23.2316 59.0684 22.6632 57.3671C22.2368 56.5165 22.6632 55.3823 23.5158 55.0987C24.3684 54.6734 25.5053 55.0987 25.7895 55.9494C26.2158 56.8 27.0684 57.3671 27.9211 57.2253H28.0632C28.7737 57.0835 28.9158 56.5165 28.9158 56.2329C28.9158 56.0911 29.0579 55.2405 28.3474 54.957L25.0789 53.2557C23.2316 52.2633 22.2368 50.2785 22.5211 48.1519C22.8053 46.3089 24.2263 44.8911 26.0737 44.4658V43.8987C26.0737 42.9063 26.9263 42.0557 27.9211 42.0557C28.9158 42.0557 29.7684 42.9063 29.7684 43.8987V44.7494C31.0474 45.3165 32.0421 46.3089 32.6105 47.7266C33.0368 48.5772 32.6105 49.7114 31.7579 49.9949C30.9053 50.4203 29.7684 49.9949 29.4842 49.1443C29.0579 48.2937 28.2053 47.7266 27.3526 47.8684C26.5 48.0101 26.3579 48.5772 26.3579 48.8608C26.2158 49.1443 26.2158 49.8532 26.9263 50.2785Z"
                      fill="url(#paint0_linear_42_888)"
                    />
                    <path
                      d="M52.0789 12C43.8368 12 37.1579 18.6633 37.1579 26.8861C37.1579 35.1089 43.8368 41.7722 52.0789 41.7722C60.3211 41.7722 67 35.1089 67 26.8861C67 18.6633 60.3211 12 52.0789 12ZM51.0842 24.0506L54.3526 25.7519C56.2 26.7443 57.1947 28.7291 56.9105 30.7139C56.6263 32.4152 55.6316 33.6911 54.0684 34.2582V34.8253C54.0684 35.8177 53.2158 36.6684 52.2211 36.6684C51.2263 36.6684 50.3737 35.8177 50.3737 34.8253V34.4C48.8105 33.9747 47.3895 32.8405 46.8211 31.1392C46.3947 30.2886 46.8211 29.1544 47.6737 28.8709C48.5263 28.4456 49.6632 28.8709 49.9474 29.7215C50.3737 30.5722 51.2263 31.1392 52.0789 30.9975H52.2211C52.9316 30.8557 53.0737 30.2886 53.0737 30.0051C53.0737 29.8633 53.2158 29.0127 52.5053 28.7291L49.2368 27.0279C47.3895 26.0354 46.3947 24.0506 46.679 21.9241C46.9632 20.081 48.3842 18.6633 50.2316 18.238V17.8127C50.2316 16.8203 51.0842 15.9696 52.0789 15.9696C53.0737 15.9696 53.9263 16.8203 53.9263 17.8127V18.6633C55.2053 19.2304 56.2 20.2228 56.7684 21.6405C57.1947 22.4911 56.7684 23.6253 55.9158 23.9089C55.0632 24.3342 53.9263 23.9089 53.6421 23.0582C53.2158 22.2076 52.3632 21.6405 51.5105 21.7823C50.6579 21.9241 50.5158 22.4911 50.5158 22.7747C50.3737 22.9165 50.3737 23.6253 51.0842 24.0506ZM60.3211 44.4658C59.3263 44.3241 58.4737 45.0329 58.3316 46.0253C57.7632 50.1367 55.2053 53.8228 51.7947 55.9494L51.0842 54.5316C50.6579 53.681 49.5211 53.681 49.0947 54.5316L46.679 59.2101C46.3947 59.919 46.6789 60.6279 47.5316 60.7696L52.7895 61.762C53.6421 61.9038 54.4947 61.0532 54.0684 60.2025L53.5 59.2101C58.0474 56.5165 61.3158 51.838 62.0263 46.5924C62.0263 45.4582 61.3158 44.6076 60.3211 44.4658Z"
                      fill="url(#paint1_linear_42_888)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_42_888"
                        x1="24.4229"
                        y1="21.9564"
                        x2="67.1834"
                        y2="52.9516"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_42_888"
                        x1="24.4229"
                        y1="21.9564"
                        x2="67.1834"
                        y2="52.9516"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F15A29" />
                        <stop offset="0.1875" stop-color="#EF6224" />
                        <stop offset="0.645833" stop-color="#E87917" />
                        <stop offset="1" stop-color="#E67F13" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <p>Корпоративное сотрудничество</p>
              </HashLink>
            </div>
          </div>
        </div>
        <div id="advantage-block" class="advantage-block">
          <h3 class="advantage-block-header">Наши преимущества</h3>
          <ul>
            <li>центр города (Скрыганова, 14)</li>
            <li>5 минут от метро Молодежная</li>
            <li>отдельный вход</li>
            <li>WiFi, гардероб, коммуникации</li>
            <li>качественный звук и свет</li>
            <li>парковка</li>
          </ul>
        </div>
        <div class="book-block">
          <h3 class="advantage-block-header white-text">
            Забронируйте площадку сейчас
          </h3>
          <p class="white-text desktop-visibility">
            Оставьте свои контактные данные, и наш менеджер свяжется с вами,
            <br />
            чтобы рассказать все подробности
          </p>
          <p class="white-text mobile-visibility">
            Оставьте свои контактные данные, и наш менеджер
            <br />
            свяжется с вами, чтобы рассказать все подробности
          </p>
          <div class="book-block-form">
            <input type="text" placeholder="Номер телефона" value="" />
            <button class="btn-slider margin-none orange-button-hover">
              Отправить
            </button>
          </div>
          <div class="slider-decoration">
            <img src="img/slider-decoration.png" alt="image-decoration" />
          </div>
        </div>
        <div id="events-block" class="events-block">
          <h4 class="events-block-head">Посетите уникальные мероприятия</h4>
          <p class="events-block-p desktop-visibility">
            Мы проводим уникальные мероприятия в сфере бизнес-обучения,
            <br />
            карьеры, и т.д. Запишитесь на одно из ближайших
          </p>
          <p class="events-block-p mobile-visibility">
            Мы проводим уникальные мероприятия в сфере
            <br />
            бизнес-обучения, карьеры, и т.д.
            <br />
            Запишитесь на одно из ближайших
          </p>
          <div class="events-block-slider-nav">
            <div class="arrow-slider arrow-slider-left">
              <img src="img/arrow.png" alt="arrow" />
            </div>
            <div class="arrow-slider arrow-slider-right">
              <img src="img/arrow.png" alt="arrow" />
            </div>
          </div>
          <div class="event-block-slider-center">
            <div class="events-slider-gray-block">
              <div class="events-slider-gray-block-item events-slider-gray-block-item-left"></div>
              <div class="events-slider-gray-block-item events-slider-gray-block-item-right"></div>
            </div>
            <div class="events-block-slider slider-to-center">
              {eventsFeature.map((event) => {
                if (!event.was) {
                  return (
                    <div class="events-block-slider-item">
                      <div class="event-info">
                        <div class="event-info-item">
                          <p>{event.date}</p>
                        </div>
                        <div class="event-info-item">
                          <p>{event.place}</p>
                        </div>
                      </div>
                      <h5 class="event-name">{event.name}</h5>
                      <HashLink to={`/event/${event.id}#top`}>
                        <button class="more-info-event">
                          О мероприятии и регистрация
                        </button>
                      </HashLink>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <button class="events-block-button button-black-hover">
            <HashLink to={"/events#top"}>Весь список мероприятий</HashLink>
          </button>
        </div>
        <div id="subscribe-email" class="subscribe-email">
          <h4 class="subscribe-email-heading">Будь в курсе!</h4>
          <p class="desktop-visibility">
            Будем сообщать о предстоящих мероприятиях, делиться отчетами
            <br />и другой полезной информацией
          </p>
          <p class="mobile-visibility">
            Будем сообщать о предстоящих мероприятиях,
            <br />
            делиться отчетами и другой полезной информацией
          </p>
          <div class="book-block-form">
            <input type="email" placeholder="Ваш Email*" />
            <button class="btn-slider margin-none btn-black button-black-hover">
              Отправить
            </button>
          </div>
          <p id="email-acept-text">
            *Отправляя свой email, вы даёте согласие на обработку персональных
            данных согласно
            <a
              href="https://www.it-academy.by/politika-konfidentsialnosti-personalnykh-dannykh/"
              target="_blank"
            >
              &nbsp;Политике обработки персональных данных&nbsp;
            </a>
            в ООО «Образовательный центр программирования и высоких технологий»
          </p>
        </div>
        <div id="reviews" class="reviews">
          <div class="slider-decoration reviews-decoration">
            <img src="img/slider-decoration.png" alt="image-decoration" />
          </div>
          <div class="events-block-slider-nav reviews-nav desktop-visibility">
            <div class="arrow-slider reviews-nav-left">
              <img src="img/arrow-black.png" alt="arrow" />
            </div>
            <div class="arrow-slider reviews-nav-right">
              <img src="img/arrow-black.png" alt="arrow" />
            </div>
          </div>
          <div class="events-block-slider-nav reviews-nav mobile-flex">
            <div class="arrow-slider reviews-nav-left">
              <img src="img/Mobile_Button_Nav-n Area.svg" alt="arrow" />
            </div>
            <div class="arrow-slider reviews-nav-right">
              <img src="img/Mobile_Button_Nav-n Area.svg" alt="arrow" />
            </div>
          </div>
          <h4 class="subscribe-email-heading">Отзывы</h4>
          <div class="reviews-slider">
            <div class="reviews-slider-item">
              <p>
                <img
                  class="reviews-slider-item-photo"
                  src="img/reviews/reviews1.jpg"
                  alt=""
                />
              </p>
              <p class="reviwer-info">
                Дмитрий Будилович,
                <br />
                Организатор форума «Товарный бизнес в Беларуси»
              </p>
              <p class="reviwer-text">
                Добрый день!
                <br />
                От лица всей нашей команды хочу поблагодарить вас и вашу
                компанию
                <br />
                за предоставленную площадку! Все прошло на высшем уровне!
              </p>
            </div>
            <div class="reviews-slider-item">
              <p>
                <img
                  class="reviews-slider-item-photo"
                  src="img/reviews/reviews2.jpg"
                  alt=""
                />
              </p>
              <p class="reviwer-info">
                Алёна Романова
                <br />
                Партнёр IHCA, руководитель проекта iHackathon IT
              </p>
              <p class="reviwer-text">
                Тем, кто ищет локацию для поведения мероприятий: мастер классов,
                <br />
                семинаров и конференций, — рекомендую обратить внимание на
                <br />
                OPEN IT ХАБ. Это комфортное пространство, оборудованное всем
                необходимым
                <br />
                для проведения подобных ивентов и вмещающее в себя
                <br />
                до 120 человек. Нам все понравилось, совсем скоро вернёмся сюда
                снова!
              </p>
            </div>
          </div>
        </div>
        <div id="contacts-block" class="contacts-block">
          <h4 class="subscribe-email-heading">Контакты</h4>
          <div class="contacts-list">
            <div class="contacts-list-item">
              <p>
                <img
                  class="reviews-slider-item-photo"
                  src="img/contacts/diana.jpg"
                  alt=""
                />
              </p>
              <p class="contact-name">Диана</p>

              <div class="contact contact-tel">
                <img src="img/contact-tel.png" alt="" />
                <p class="">
                  <a class="button-black-hover" href="tel:+375296237896">
                    +375 29 623 78 96
                  </a>
                </p>
              </div>

              <div class="contact contact-mail">
                <img src="img/contact-mail.png" alt="" />
                <p class="">
                  <a class="button-black-hover" href="mailto:hub@openit.by">
                    hub@openit.by
                  </a>
                </p>
              </div>
            </div>
            <div class="contacts-list-item">
              <p>
                <img
                  class="reviews-slider-item-photo"
                  src="img/contacts/julia.jpg"
                  alt=""
                />
              </p>
              <p class="contact-name">Юлия</p>

              <div class="contact contact-tel">
                <img src="img/contact-tel.png" alt="" />
                <p class="">
                  <a class="button-black-hover" href="rel:+375291114578">
                    +375 29 111 45 78
                  </a>
                </p>
              </div>

              <div class="contact contact-mail">
                <img src="img/contact-mail.png" alt="" />
                <p class="">
                  <a class="button-black-hover" href="mailto:hub@openit.by">
                    hub@openit.by
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
