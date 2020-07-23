<template>
  <div class="paddingRL header" id="header">
    <dModal
      @sendedForm="showModalForm = false; showModalAccess = true"
      @closeModal="showModalForm = false"
      v-if="showModalForm"
      type="form"
      :content="message"
    />
    <dModal
      @closeModal="showModalAccess = false"
      v-if="showModalAccess"
      type="success"
      :content="message"
    />

    <div class="logo" @click="$router.push('/')">
      <img src="~assets/img/logo/logo.svg" alt="Логотип" />
    </div>
    <div class="right">
      <div class="menu text-small main-menu">
        <ul>
          <li v-for="(element, index) in menu" :key="index">
            <nuxt-link exact no-prefetch active-class="active" :to="element.link">{{element.title}}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="button">
        <dButton @clickdButton="showModalForm = true" type="light" text="Заказать звонок" />
      </div>
    </div>
  </div>
</template>

<script>
import dModal from "@/components/dModal";

export default {
  data: () => ({
    menu: [
      { title: "Главная", link: "/" },
      { title: "Услуги", link: "/services" },
      { title: "Контакты", link: "/contacts" }
    ],
    showModalForm: false,
    showModalAccess: false,
    message:
      "Ваше обращение успешно отправлено. \nНаши специалисты свяжутся с вами в течении часа."
  }),
  components: {
    dModal
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $darkGray;
  .logo {
    width: 30%;
    min-width: 15rem;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 100%;
    }
  }
  .right {
    display: flex;
    .menu {
      margin-right: 3rem;
      display: flex;
      align-items: center;
      ul {
        display: flex;
        color: $lightGray;
        li:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
}

@media all and (max-width: 860px) {
  .button {
    display: none;
  }
}
</style>
