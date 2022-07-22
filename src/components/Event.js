import { useParams } from "react-router-dom";
import { eventsFeature } from "./eventsFeature";
import { HashLink } from "react-router-hash-link";

const Event = () => {
  const { id } = useParams();
  {
    console.log(eventsFeature);
  }

  const createMarkup = (text) => {
    return { __html: `${text}` };
  };

  return (
    <main class="main event">
      <div class="events-feature">
        <div class="block-list-events">
          <div class="block-list-events-item event-gap">
            {/* <!-- <div class="event-iamge"><img src="img/speackers/Авраменко.jpg" alt=""></div> --> */}

            <div class="events-item-info">
              <h1 class="events-item-info-name heading-event">
                {/* Материальная мотивация и принципы ее построения */}
                {eventsFeature[id - 1].name}
              </h1>
              {eventsFeature[id - 1].was ? (
                ""
              ) : (
                <div class="type-event-list type-event-list-event">
                  <div class="type-event-item">
                    <img src="/img/events-feature/day.svg" alt="" />
                    <p>{eventsFeature[id - 1].date}</p>
                  </div>
                  <div class="type-event-item">
                    <img src="/img/events-feature/time.svg" alt="" />
                    <p>{eventsFeature[id - 1].time}</p>
                  </div>
                  <div class="type-event-item">
                    <img src="/img/events-feature/price-price.svg" alt="" />
                    <p>{eventsFeature[id - 1].pay}</p>
                  </div>
                  <div class="type-event-item">
                    <img src="/img/events-feature/info.svg" alt="" />
                    <p>{eventsFeature[id - 1].place}</p>
                  </div>
                </div>
              )}

              <div
                class="events-item-info-preview main-text-event"
                dangerouslySetInnerHTML={createMarkup(
                  eventsFeature[id - 1].mainText
                )}
              ></div>
              <div class="event-button-left">
                {!eventsFeature[id - 1].was ? (
                  <a href={eventsFeature[id - 1].bezKassira} target="_blank">
                    <button class="btn-slider margin-none btn-black orange-button-hover event-button">
                      Купить билет
                    </button>
                  </a>
                ) : eventsFeature[id - 1].video ? (
                  <HashLink
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                    to={"#block-video"}
                  >
                    <button class="btn-slider margin-none btn-black orange-button-hover event-button">
                      Видеоотчёт
                    </button>
                  </HashLink>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {eventsFeature[id - 1].aboutSpeacker ? (
        <div class="events-feature about-specker">
          <div class="block-list-events">
            <div class="block-list-events-item event-gap">
              <div class="event-iamge">
                <img src={eventsFeature[id - 1].aboutSpeakerPhoto} alt="" />
              </div>
              <div class="events-item-info">
                <h2 class="events-item-info-name heading-event white-text">
                  О спикере
                </h2>

                <div
                  class="events-item-info-preview main-text-event"
                  dangerouslySetInnerHTML={createMarkup(
                    eventsFeature[id - 1].aboutSpeacker
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {eventsFeature[id - 1].video ? (
        <div
          id="block-video"
          class="block-video"
          dangerouslySetInnerHTML={createMarkup(eventsFeature[id - 1].video)}
        ></div>
      ) : (
        ""
      )}

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
    </main>
  );
};

export default Event;
