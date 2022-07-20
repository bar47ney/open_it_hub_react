import mainScript from "./MainScript";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    mainScript();
  }, []);
  return (
    <>
      <main class="main">
        <div class="main-slider">
          <div id="slider-1" class="slider-item">
            <h1 class="slider-title">
              OPEN IT ХАБ — новое event-пространство
              <br />
              для мероприятий, онлайн-трансляций и студийной съёмки
            </h1>
            <button class="btn-slider orange-button-hover btn-slider-bottom">
              <a href="#services-block">К списку услуг</a>
            </button>
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
            <button class="btn-slider orange-button-hover btn-slider-bottom">
              <a href="events.html">К списку ивентов</a>
            </button>

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
            <button class="btn-slider orange-button-hover btn-slider-bottom">
              <a href="corporat-job.html">Подробнее</a>
            </button>

            <div class="slider-decoration">
              <img src="/img/slider-decoration.png" alt="image-decoration" />
            </div>
            <div class="slider-shadow"></div>
          </div>
        </div>
        <div class="hab-description">
          <div class="slider-nav">
            <img class="slider-nav-active" src="img/slider-circle.svg" alt="" />
            <img src="img/slider-circle.svg" alt="" />
            <img src="img/slider-circle.svg" alt="" />
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
              <div class="services-item-gray"></div>
              <div class="services-item-icons">
                <img
                  class="services-item-icon-default"
                  src="img/services/events.png"
                  alt="events"
                />
                <img
                  class="services-item-icon-hover"
                  src="img/services/events-hover.png"
                  alt="events-hover"
                />
              </div>

              <p>Проводим мероприятия, ивенты, бизнес-обучение</p>
            </div>
            <div class="services-item">
              <div class="services-item-gray"></div>
              <div class="services-item-icons">
                <img
                  class="services-item-icon-default"
                  src="img/services/rent.png"
                  alt="events"
                />
                <img
                  class="services-item-icon-hover"
                  src="img/services/rent-hover.png"
                  alt="events-hover"
                />
              </div>
              <p>
                Аренда
                <br />
                помещения
              </p>
            </div>
            <div class="services-item">
              <div class="services-item-gray"></div>
              <div class="services-item-icons">
                <img
                  class="services-item-icon-default"
                  src="img/services/corporat.png"
                  alt="events"
                />
                <img
                  class="services-item-icon-hover"
                  src="img/services/corporat-hover.png"
                  alt="events-hover"
                />
              </div>

              <p>Корпоративное сотрудничество</p>
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
              <div class="events-block-slider-item">
                <div class="event-info">
                  <div class="event-info-item">
                    <p>03 августа</p>
                  </div>
                  <div class="event-info-item">
                    <p>очно</p>
                  </div>
                </div>
                <h5 class="event-name">
                  Материальная мотивация
                  <br />и принципы ее построения
                </h5>
                <button class="more-info-event">
                  <a href="event-1.html">О мероприятии и регистрация</a>
                </button>
              </div>
              <div class="events-block-slider-item">
                <div class="event-info">
                  <div class="event-info-item">
                    <p>03 августа</p>
                  </div>
                  <div class="event-info-item">
                    <p>очно</p>
                  </div>
                </div>
                <h5 class="event-name">
                  Материальная мотивация
                  <br />и принципы ее построения
                </h5>
                <button class="more-info-event">
                  <a href="event-1.html">О мероприятии и регистрация</a>
                </button>
              </div>
              <div class="events-block-slider-item">
                <div class="event-info">
                  <div class="event-info-item">
                    <p>03 августа</p>
                  </div>
                  <div class="event-info-item">
                    <p>очно</p>
                  </div>
                </div>
                <h5 class="event-name">
                  Материальная мотивация
                  <br />и принципы ее построения
                </h5>
                <button class="more-info-event">
                  <a href="event-1.html">О мероприятии и регистрация</a>
                </button>
              </div>
            </div>
          </div>

          <button class="events-block-button button-black-hover">
            <a href="events.html">Весь список мероприятий</a>
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
            <input type="email" placeholder="Ваш Email" />
            <button class="btn-slider margin-none btn-black button-black-hover">
              Отправить
            </button>
          </div>
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
