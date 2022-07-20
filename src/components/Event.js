const Event = () => {
  <main class="main">
    <div class="events-feature">
      <div class="block-list-events">
        <div class="block-list-events-item event-gap">
          {/* <!-- <div class="event-iamge"><img src="img/speackers/Авраменко.jpg" alt=""></div> --> */}

          <div class="events-item-info">
            <h1 class="events-item-info-name heading-event">
              Материальная мотивация и принципы ее построения
            </h1>
            <div class="type-event-list type-event-list-event">
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

            <div class="events-item-info-preview main-text-event">
              <p>
                Как сочетать в себе математику, логику, знания о людях, целях
                бизнеса и при этом быть замотивированным на результате бизнеса?
                Весь секрет в материальной мотивации и правильно выстроенных
                отношениях со своими сотрудниками.
                <br />
                <br />
              </p>
              <p>
                На третьей бизнес-встрече мы поговорим о материальной мотивации,
                о том, как ее не потерять и как правильно над ней работать,
                чтобы бизнес получал только пользу и выгоду.
                <br />
                <br />
              </p>
              <p>Вы узнаете:</p>
              <ul>
                <li>как развить бизнес через мотивацию сотрудников;</li>
                <li>
                  какие ключевые принципы и показатели материальной мотивации
                  существуют;
                </li>
                <li>какие стратегии нужны, чтобы выстроить мотивацию;</li>
                <li>как правильно награждать сотрудника.</li>
              </ul>

              <p>
                Расскажет об этом Светлана Авраменко.
                <br />
                <br />
              </p>

              <p>
                Хотите получить экспертный контент? Приходите за знаниями о
                материальной мотивации!
              </p>

              <p>
                Ивент проводится в рамках школы бизнеса и стартапов MALIMON.
                <br />
                <br />
              </p>
              <p>IT-Academy — информационный партнер.</p>
            </div>
            <div class="event-button-left">
              <button class="btn-slider margin-none btn-black orange-button-hover event-button">
                <a href="form-page.html">Регистрация</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="events-feature about-specker">
      <div class="block-list-events">
        <div class="block-list-events-item event-gap">
          <div class="event-iamge">
            <img src="img/speackers/Авраменко.jpg" alt="" />
          </div>

          <div class="events-item-info">
            <h2 class="events-item-info-name heading-event white-text">
              О спикере
            </h2>

            <div class="events-item-info-preview main-text-event">
              <p>
                Светлана Авраменко в бизнесе более 15 лет, имеет степень MBA и
                звание коуча ICF. Светлана открыла официальное представительство
                мирового бренда обуви New Balance в Беларуси, разработала и
                успешно внедрила мотивацию более чем в 20 компаниях, а также
                организовала авторский курс по материальной мотивации, является
                автором статей на эту тему.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="subscribe-email">
      <h4 class="subscribe-email-heading">Будь в курсе!</h4>
      <p>
        Будем сообщать о предстоящих мероприятиях, делиться отчетами
        <br />и другой полезной информацией
      </p>
      <div class="book-block-form">
        <input type="text" placeholder="Номер телефона" />
        <button class="btn-slider margin-none btn-black button-black-hover">
          Отправить
        </button>
      </div>
    </div>
  </main>;
  return;
};

export default Event;
