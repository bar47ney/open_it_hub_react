const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-item footer-item-l desktop-visibility">
        <p class="footer-first-head">Мы рядом</p>
        <p class="footer-second-head">
          ул. Скрыганова, 14
          <br />
          Минск
        </p>
      </div>
      <div class="footer-item footer-item-center">
        <div class="social">
          <div class="social-item">
            <a href="https://vk.com/openithub/" title="" target="_blank">
              <img src="/img/vk.svg" />
            </a>
          </div>
          <div class="social-item">
            <a href="https://t.me/openithub/" title="" target="_blank">
              <img src="/img/tg.svg" />
            </a>
          </div>
          <div class="social-item">
            <a
              href=" https://instagram.com/openhub.by/"
              title=""
              target="_blank"
            >
              <img src="/img/inst.svg" />
            </a>
          </div>
          <div class="social-item">
            <a
              href="https://www.facebook.com/openithub/"
              title=""
              target="_blank"
            >
              <img src="/img/facebook.svg" />
            </a>
          </div>
          <div class="social-item">
            <a
              href="https://www.linkedin.com/company/86587433/"
              title=""
              target="_blank"
            >
              <img src="/img/linken.svg" />
            </a>
          </div>
        </div>

        <div class="footer-info mobile-visibility mobile-footer-flex">
          <div>
            <p class="footer-first-head">Мы рядом</p>
            <p class="footer-second-head">
              ул. Скрыганова, 14
              <br />
              Минск
            </p>
          </div>
          <div class="center-center">
            <h6>OPEN IT ХАБ</h6>
            <p class="footer-second-info">
              hub@openit.by
              <br />
              +375 29 111 45 78
            </p>
            <p class="copyright">© 2022 OPEN IT ХАБ. All rights reserved</p>
          </div>
          <div>
            <p class="footer-first-head">Мы работаем</p>
            <p class="footer-second-head">
            10:00&ndash;20:00
              <br />
              пн-пт
            </p>
          </div>
        </div>

        <div class="footer-info desktop-visibility">
          <h6>OPEN IT ХАБ</h6>
          <p class="footer-second-info">
            hub@openit.by
            <br />
            +375 29 111 45 78
          </p>
          <p class="copyright">© 2022 OPEN IT ХАБ. All rights reserved</p>
        </div>
      </div>
      <div class="footer-item footer-item-r desktop-visibility">
        <p class="footer-first-head">Мы работаем</p>
        <p class="footer-second-head">
        10:00&ndash;20:00
          <br />
          пн-пт
        </p>
      </div>
    </footer>
  );
};

export default Footer;
