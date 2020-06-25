<template>
  <div class="paddingRL">
    <div class="left text-small">
      <img src="~assets/img/logo/logo.svg" alt="Логотип компании" />
      <p>Детективное бюро Detective.Moscow предлагает профессиональные детективные услуги компаниям и частным лицам</p>
    </div>
    <div class="right">
      <div class="menu main-menu text-small">
        <ul>
          <li v-for="(element, index) in menu" :key="index">
            <nuxt-link exact no-prefetch active-class="active" :to="element.link">{{element.title}}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="contacts">
        <p class="text-end">
          <a href="tel:+79263333540">+7-926-3333-540</a>
        </p>
        <p class="text-end">
          <a href="mailto:detective.moscow@bk.ru">detective.moscow@bk.ru</a>
        </p>
        <div class="social text-end">
          <a class="img" href="https://wa.me/79263333540">
            <img src="~assets/img/svg/whatsApp.svg" alt="WtassApp" />
          </a>
          <a class="img" href="tg://msg?text=?>&to=<+79263333540>">
            <img src="~assets/img/svg/Telegram.svg" alt="Telegram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: "Главная", link: "/" },
      { title: "Услуги", link: "/services" },
      { title: "Контакты", link: "/contacts" }
    ]
  })
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: $darkGray;
  color: $lightGray;
  .left {
    width: 35%;
    img {
      width: 90%;
      margin-bottom: 1rem;
    }
  }
  .right {
    display: flex;
    padding: 1rem 0;
    .menu {
      margin-right: 2rem;
    }
    .menu ul,
    .contacts {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
    .contacts {
      .img {
        height: 2rem;
      }
      .img:first-child {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
