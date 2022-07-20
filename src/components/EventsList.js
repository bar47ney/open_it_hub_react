const EventsList = () => {
  return (
    <main class="main">
      <div class="main-slider-events">
        <h1 class="slider-title">
          Добро пожаловать в раздел с нашими мероприятиями
        </h1>
        <p>
          Здесь вы найдете информацию как о будущих,
          <br />
          так и о прошедших ивентах
        </p>
        <div class="slider-decoration">
          <img src="img/slider-decoration.png" alt="image-decoration" />
        </div>
        <div class="slider-shadow"></div>
      </div>
      <div class="book-block about-events">
        <h3 class="advantage-block-header white-text">
          Какие мероприятия мы проводим?
        </h3>
        <p class="white-text desktop-visibility">
          В нашем хабе на постоянной основе проводятся обучающие мероприятия и
          ивенты
          <br />
          самой разной тематики. В качестве спикеров выступают эксперты высшего
          класса.
          <br />
          <br />
          Вы можете ознакомиться с полным списком как будущих,
          <br />
          так и прошедших мероприятий.
        </p>
        <p class="white-text mobile-visibility">
          В нашем хабе на постоянной основе проводятся обучающие мероприятия и
          ивенты самой разной тематики. В качестве спикеров выступают эксперты
          высшего класса.
          <br />
          <br />
          Вы можете ознакомиться с полным списком как будущих,
          <br />
          так и прошедших мероприятий.
        </p>
      </div>

      <div id="events-feature" class="events-feature">
        <h3 class="advantage-block-header">Будущие мероприятия</h3>
        <div class="block-parameters">
          <div class="block-parameters-item">
            <div class="filter-item">
              <img src="img/events-feature/date.svg" alt="" />
            </div>
            <div class="sub-menu menu-parameters">
              <ul>
                <li>Июль</li>
                <li>Август</li>
                <li>Сентябрь</li>
              </ul>
            </div>
          </div>
          <div class="block-parameters-item">
            <div id="filter-format" class="filter-item">
              <img src="img/events-feature/format.svg" alt="" />
            </div>
            <div id="filter-format-list" class="sub-menu menu-parameters">
              <ul>
                <li>Очно и онлайн</li>
                <li>Только очно</li>
                <li>Только онлайн</li>
              </ul>
            </div>
          </div>
          <div class="block-parameters-item">
            <div class="filter-item">
              <img src="img/events-feature/price.svg" alt="" />
            </div>
            <div class="sub-menu menu-parameters">
              <ul>
                <li>Все мероприятия</li>
                <li>Платные</li>
                <li>Бесплатные</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="block-list-events">
          <div class="block-list-events-item">
            <div class="event-iamge">
              <img src="img/speackers/Авраменко.jpg" alt="" />
            </div>

            <div class="events-item-info">
              <div class="type-event-list">
                <div class="type-event-item">
                  <img src="img/events-feature/day.svg" alt="" />
                  <p>03 августа</p>
                </div>
                <div class="type-event-item">
                  <img src="img/events-feature/time.svg" alt="" />
                  <p>18:30</p>
                </div>
                <div class="type-event-item">
                  <img src="img/events-feature/price-price.svg" alt="" />
                  <p>платное</p>
                </div>
                <div class="type-event-item">
                  <img src="img/events-feature/info.svg" alt="" />
                  <p>очно</p>
                </div>
              </div>
              <p class="events-item-info-name">
                Материальная мотивация
                <br />и принципы ее построения
              </p>
              <p class="events-item-info-preview">
                Чтобы сочетать в себе сильные качества
                <br />и быть замотивированным, нужно...
              </p>
              <div class="events-buttons">
                <button class="btn-slider margin-none btn-black orange-button-hover">
                  <a href="form-page.html">Регистрация</a>
                </button>
                <button class="more-info-event">
                  <a href="event-1.html">О мероприятии</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- events-past --> */}
      <div class="events-feature events-past">
        <h3 class="advantage-block-header">Прошедшие мероприятия</h3>
        <div id="events-past" class="block-parameters">
          <div class="block-parameters-item">
            <div class="filter-item">
              <img src="img/events-feature/date.svg" alt="" />
            </div>
            <div class="sub-menu menu-parameters">
              <ul>
                <li>2022</li>
                <li>2021</li>
                <li>2020</li>
              </ul>
            </div>
          </div>
          <div class="block-parameters-item">
            <div class="filter-item">
              <img src="img/events-feature/date.svg" alt="" />
            </div>
            <div class="sub-menu menu-parameters">
              <ul>
                <li>Июль</li>
                <li>Август</li>
                <li>Сентябрь</li>
              </ul>
            </div>
          </div>
          {/* <!-- <div class="block-parameters-item">
                <div id="filter-format" class="filter-item"><img src="img/events-feature/format.svg" alt="">
                </div>
                <div id="filter-format-list" class="sub-menu menu-parameters">
                    <ul>
                        <li>Очно и онлайн</li>
                        <li>Только очно</li>
                        <li>Только онлайн</li>
                    </ul>
                </div>
            </div>
            <div class="block-parameters-item">
                <div class="filter-item"><img src="img/events-feature/price.svg" alt="">
                </div>
                <div class="sub-menu menu-parameters">
                    <ul>
                        <li>Все мероприятия</li>
                        <li>Платные</li>
                        <li>Бесплатные</li>
                    </ul>
                </div>
            </div> --> */}
        </div>
        <div class="block-list-events">
          <div class="block-list-events-item">
            <div class="event-iamge">
              <img src="img/speackers/Занкович.jpg" alt="" />
            </div>

            <div class="events-item-info">
              {/* <!-- <div class="type-event-list">
                        <div class="type-event-item"><img src="img/events-feature/day.svg" alt=""/>
                            <p>14 июля</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/time.svg" alt=""/>
                            <p>18:30</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/price-price.svg" alt=""/>
                            <p>платное</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/info.svg" alt=""/>
                            <p>очно/онлайн</p>
                        </div>
                    </div> --> */}
              <p class="events-item-info-name black-text">
                От идеи к стратегии:
                <br />с чего начать свой бизнес
              </p>
              <p class="events-item-info-preview">
                Что делать, если идея стартапа сформирована,
                <br />
                но как к ней подступить — непонятно?
              </p>
              <div class="events-buttons">
                <button class="events-block-button button-black-hover">
                  <a href="event-2.html">О мероприятии</a>
                </button>
              </div>
            </div>
          </div>
          <div class="block-list-events-item">
            <div class="event-iamge">
              <img src="img/speackers/Занкович.jpg" alt="" />
            </div>

            <div class="events-item-info">
              {/* <!-- <div class="type-event-list">
                        <div class="type-event-item"><img src="img/events-feature/day.svg" alt=""/>
                            <p>14 июля</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/time.svg" alt=""/>
                            <p>18:30</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/price-price.svg" alt=""/>
                            <p>платное</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/info.svg" alt=""/>
                            <p>очно/онлайн</p>
                        </div>
                    </div> --> */}
              <p class="events-item-info-name black-text">
                От идеи к стратегии:
                <br />с чего начать свой бизнес
              </p>
              <p class="events-item-info-preview">
                Что делать, если идея стартапа сформирована,
                <br />
                но как к ней подступить — непонятно?
              </p>
              <div class="events-buttons">
                <button class="events-block-button button-black-hover">
                  <a href="event-2.html">О мероприятии</a>
                </button>
              </div>
            </div>
          </div>
          <div class="block-list-events-item">
            <div class="event-iamge">
              <img src="img/speackers/Занкович.jpg" alt="" />
            </div>

            <div class="events-item-info">
              {/* <!-- <div class="type-event-list">
                        <div class="type-event-item"><img src="img/events-feature/day.svg" alt=""/>
                            <p>14 июля</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/time.svg" alt=""/>
                            <p>18:30</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/price-price.svg" alt=""/>
                            <p>платное</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/info.svg" alt=""/>
                            <p>очно/онлайн</p>
                        </div>
                    </div> --> */}
              <p class="events-item-info-name black-text">
                От идеи к стратегии:
                <br />с чего начать свой бизнес
              </p>
              <p class="events-item-info-preview">
                Что делать, если идея стартапа сформирована,
                <br />
                но как к ней подступить — непонятно?
              </p>
              <div class="events-buttons">
                <button class="events-block-button button-black-hover">
                  <a href="event-2.html">О мероприятии</a>
                </button>
              </div>
            </div>
          </div>
          <div class="block-list-events-item">
            <div class="event-iamge">
              <img src="img/speackers/Занкович.jpg" alt="" />
            </div>

            <div class="events-item-info">
              {/* <!-- <div class="type-event-list">
                        <div class="type-event-item"><img src="img/events-feature/day.svg" alt=""/>
                            <p>14 июля</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/time.svg" alt=""/>
                            <p>18:30</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/price-price.svg" alt=""/>
                            <p>платное</p>
                        </div>
                        <div class="type-event-item"><img src="img/events-feature/info.svg" alt=""/>
                            <p>очно/онлайн</p>
                        </div>
                    </div> --> */}
              <p class="events-item-info-name black-text">
                От идеи к стратегии:
                <br />с чего начать свой бизнес
              </p>
              <p class="events-item-info-preview">
                Что делать, если идея стартапа сформирована,
                <br />
                но как к ней подступить — непонятно?
              </p>
              <div class="events-buttons">
                <button class="events-block-button button-black-hover">
                  <a href="event-2.html">О мероприятии</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventsList;
