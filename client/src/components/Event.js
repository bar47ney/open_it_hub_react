import { useParams } from "react-router-dom";
import { eventsFeature } from "./eventsFeature";
import { HashLink } from "react-router-hash-link";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://vsegda-pomnim.com/uploads/posts/2022-04/1649114004_96-vsegda-pomnim-com-p-priroda-sibiri-samie-krasivie-mesta-foto-103.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
    thumbnailLabel: `1`,
  },
  {
    original:
      "https://vsegda-pomnim.com/uploads/posts/2022-04/1649114004_96-vsegda-pomnim-com-p-priroda-sibiri-samie-krasivie-mesta-foto-103.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
    thumbnailLabel: `1`,
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
    thumbnailLabel: `1`,
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
  {
    original:
      "https://pibig.info/uploads/posts/2021-05/1621348523_23-pibig_info-p-ostrov-vrangelya-priroda-krasivo-foto-24.jpg",
    thumbnail:
      "https://st.depositphotos.com/2383249/2683/i/170/depositphotos_26832613-stock-photo-fire-and-ice-fractal-lightning.jpg",
  },
];

const Event = () => {
  const { id } = useParams();
  // const id = 2;
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

              {!eventsFeature[id - 1].was ? (
                <div class="event-button-left">
                  <a href={eventsFeature[id - 1].bezKassira} target="_blank">
                    <button class="btn-slider margin-none btn-black orange-button-hover event-button">
                      Купить билет
                    </button>
                  </a>
                </div>
              ) : eventsFeature[id - 1].video ? (
                <div class="event-button-left">
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
                </div>
              ) : (
                ""
              )}
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

      <div class="subscribe-email">
        <h4 class="subscribe-email-heading">Будь в курсе!</h4>
        <p>
          Будем сообщать о предстоящих мероприятиях, делиться отчетами
          <br className="desktop-visibility" />и другой полезной информацией
        </p>
        <div class="book-block-form">
          <input type="text" placeholder="Номер телефона" />
          <button class="btn-slider margin-none btn-black button-black-hover">
            Отправить
          </button>
        </div>
        <p id="email-acept-text" className="desktop-visibility">
          *Отправляя свой email, вы даёте согласие на обработку персональных
          данных согласно
          <a
            href="https://www.it-academy.by/politika-konfidentsialnosti-personalnykh-dannykh/"
            target="_blank"
          >
            <br />
            Политике обработки персональных данных&nbsp;
          </a>
          в ООО «Образовательный центр программирования и высоких технологий»
        </p>
      </div>

      {eventsFeature[id - 1].gallery ? (
        <div id="gallery" className="photo-block">
          <h4 class="subscribe-email-heading">Фотоотчет</h4>
          <ImageGallery
            items={eventsFeature[id - 1].gallery}
            showIndex={true}
            showPlayButton={false}
            showFullscreenButton={false}
          />
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
    </main>
  );
};

export default Event;
