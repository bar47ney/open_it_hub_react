import { HashLink } from "react-router-hash-link";

const Corporat = () => {
  return (
    <main class="main">
      <div class="events-feature corporat-job">
        <div class="main-slider-events">
          <h1 class="slider-title">
            Предлагаем IT-компаниям корпоративное сотрудничество{" "}
          </h1>
          <p>
            Идеальный вариант для проведения<br className="mobile-visibility"/>ивента в любой удобный для вас день
            и время
            <br />
            Вы можете выбрать одну из опций или несколько
          </p>{" "}
          <HashLink smooth to={"#book-block-form"}>
            <button class="btn-slider orange-button-hover btn-slider-bottom">
              Узнать больше
            </button>
          </HashLink>
          <div class="slider-decoration">
            <img src="img/slider-decoration.png" alt="image-decoration" />
          </div>
          <div class="slider-shadow"></div>
        </div>

        <div class="book-block about-events">
          <h3 class="advantage-block-header white-text">
            Как мы можем быть вам полезны
          </h3>
          <p class="white-text">
            Мы предоставим площадку и все необходимое<br className="mobile-visibility"/> оборудование для
            выступления
            <br className="desktop-visibility"/>
            ваших спикеров. <br className="mobile-visibility"/>По дополнительному запросу поможем сделать запись,<br className="mobile-visibility"/>
            <br className="desktop-visibility"/>
            провести онлайн-трансляцию, съёмку или фотосъемку ивента.
          </p>
          {/* <p class="white-text mobile-visibility">
            В нашем хабе на постоянной основе проводятся обучающие мероприятия и
            ивенты самой разной тематики. В качестве спикеров выступают эксперты
            высшего класса.
            <br />
            <br />
            Вы можете ознакомиться с полным списком как будущих,
            <br />
            так и прошедших мероприятий.
          </p> */}
          <div class="slider-decoration">
            <img src="img/slider-decoration.png" alt="image-decoration" />
          </div>
        </div>

        <div class="book-block block-form">
          <h3 class="advantage-block-header">Закажите звонок</h3>
          <p class="">
            Оставьте свои контактные данные, <br className="mobile-visibility"/>и наш менеджер свяжется с вами,
            <br />
            чтобы рассказать все подробности
          </p>
          <div id="book-block-form" class="book-block-form">
            <input type="text" placeholder="Номер телефона" value="" />
            <button class="btn-slider margin-none orange-button-hover">
              Отправить
            </button>
          </div>
        </div>
      </div>

      {/* <!-- <div class="block-list-events">

                <div class="block-list-events-item event-gap">
                    <div class="event-iamge"><img src="img/feature-events/event.jpg" alt=""></div>

                    <div class="events-item-info">
                        <h1 class="events-item-info-name heading-event">Good idea, или как начать<br />
                            путь предпринимателя</h1>
                        <div class="type-event-list type-event-list-event">
                            <div class="type-event-item"><img src="img/events-feature/day.svg" alt="">
                                <p>13 июля</p>
                            </div>
                            <div class="type-event-item"><img src="img/events-feature/time.svg" alt="">
                                <p>18:30</p>
                            </div>
                            <div class="type-event-item"><img src="img/events-feature/price-price.svg" alt="">
                                <p>платное</p>
                            </div>
                            <div class="type-event-item"><img src="img/events-feature/info.svg" alt="">
                                <p>очно/онлайн</p>
                            </div>
                        </div>

                        <p class="events-item-info-preview main-text-event">Евгений Галай поделиться секретом,<br />
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно свгений Галай поделиться секретом,
                            как начать бизнес и что для этого нужно сделать</p>
                        <div class="event-button-left">
                            <button
                                class="btn-slider margin-none btn-black orange-button-hover event-button">Регистрация</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="events-feature about-specker">

            <div class="block-list-events">

                <div class="block-list-events-item event-gap">
                    <div class="event-iamge"><img src="img/speackers/evgeniy-galai — копия.png" alt=""></div>

                    <div class="events-item-info">
                        <h2 class="events-item-info-name heading-event white-text">О спикере</h2>


                        <div class="events-item-info-preview main-text-event">
                            <p>В нашем хабе на постоянной основе
                                проводятся обучающие мероприятия и ивенты самой разной тематики. В качестве спикеров
                                выступают эксперты высшего класса.
                            </p>
                            <br />
                            <p>
                                Вы можете ознакомиться с полным списком как будущих,
                                так и прошедших мероприятий.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div class="subscribe-email">
            <h4 class="subscribe-email-heading">Будь в курсе!</h4>
            <p>Будем сообщать о предстоящих мероприятиях, делиться отчетами<br />и другой полезной информацией</p>
            <div class="book-block-form">
                <input type="text" placeholder="Номер телефона">
                <button class="btn-slider margin-none btn-black button-black-hover">Отправить</button>
            </div>
        </div>
        <div class="block-video">
            <iframe src="https://www.youtube.com/embed/V1L0CTaTGRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> --> */}
    </main>
  );
};

export default Corporat;
