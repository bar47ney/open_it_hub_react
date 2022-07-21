import { HashLink } from "react-router-hash-link";

const Rent = () => {
  return (
    <main class="main rent-page">
      <div class="events-feature corporat-job">
        <div class="main-slider-events">
          <h1 class="slider-title">
            Арендуйте помещение
            <br class="mobile-visibility" /> под своё мероприятие
          </h1>
          <p>
            Идеальный вариант для студийной съемки,
            <br class="mobile-visibility" /> мероприятий и онлайн-трансляций
          </p>{" "}
          <HashLink smooth to={"#advantage-block"}>
            <button class="btn-slider orange-button-hover btn-slider-bottom">
              Забронировать
            </button>
          </HashLink>
          <div class="slider-decoration">
            <img src="img/slider-decoration.png" alt="image-decoration" />
          </div>
          <div class="slider-shadow"></div>
        </div>

        <div class="book-block about-events">
          <h3 class="advantage-block-header white-text">Что мы предлагаем?</h3>
          <ul class="what-we-list">
            <li>1 этаж, отдельный вход и гардероб</li>
            <li>до 120 посадочных мест</li>
            <li>проектор, экран, звук</li>
            <li>видеосъемка, видеозапись, онлайн-трансляция</li>
            <li>зональная фотосъемка для наработки контента</li>
          </ul>
          <p class="price-rent">500,00 BYN / 3 часа (+2 часа бонус)</p>
          <p class="price-rent price-nds">*цена с учетом НДС</p>
        </div>

        <div class="advantage-block">
          <h3 class="advantage-block-header ">Наши преимущества</h3>
          <ul>
            <li>центр города (Скрыганова, 14)</li>
            <li>5 минут от метро</li>
            <li>отдельный вход</li>
            <li>WiFi, гардероб, коммуникации</li>
            <li>качественный звук и свет</li>
            <li>парковка</li>
          </ul>
        </div>

        <div id="advantage-block" class="book-block block-form">
          <h3 class="advantage-block-header">Забронируйте площадку сейчас</h3>
          <p class="">
            Оставьте свои контактные данные, и наш менеджер
            <br class="mobile-visibility" /> свяжется с вами,
            <br class="desktop-visibility" />
            чтобы рассказать все подробности
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
      </div>
    </main>
  );
};

export default Rent;
