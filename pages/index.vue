<template>
  <div>
    <div
      class="main paddingTB paddingRL img-bg-block add-bg-block add-bg-block-dark"
      :style="{'min-height': `calc(100vh - ${headerHeight}px - 12rem)`}"
    >
      <div class="inner">
        <h1 class="name">Detective.Moscow</h1>
        <h1 class="big titles">
          <span>Только специалисты</span>
        </h1>
        <h2>Мы знаем все</h2>
        <DButton type="light" text="Заказать звонок" />
      </div>
    </div>

    <div class="about paddingTB paddingRL img-bg-block add-bg-block add-bg-block-dark">
      <div class="inner">
        <h1>О нас</h1>
        <p>Detective.Moscow - частное детективное бюро. Мы подробно анализируем каждый случай и, если принимаем заказ, гарантируем результат.</p>
        <p>Наши сотрудники имеют большой опыт работы в правоохранительных органах. Наша организация также обеспечит профессиональную правовую помощь в достижении поставленных целей. Detective.Moscow состоит из: частных детективов, адвокатов, аналитиков, программистов, полиграфистов и психологов.</p>
        <p>Все услуги оказываются в соответствии с действующим законом «О частной детективной и охранной деятельности в Российской Федерации».</p>
      </div>
    </div>

    <services type="cardsLeft" @goto="goto" />

    <div class="garanties">
      <div class="left paddingTB">
        <h1>Гарантии</h1>
        <p>Мы несем ответственность за весь спектр предоставляемых услуг</p>
      </div>
      <div class="right paddingTB">
        <div class="card" v-for="(card, index) in garanties" :key="index">
          <h3>{{card.title}}</h3>
          <p class="text-small">{{card.text}}</p>
        </div>
      </div>
    </div>

    <div class="benefits paddingTB paddingRL img-bg-block add-bg-block add-bg-block-dark">
      <div class="inner">
        <h1>Преимущества</h1>
        <div class="icons">
          <div class="benefit">
            <img src="~assets/img/svg/benefits/one.svg" alt="Опыт" />
            <h3>Опыт</h3>
          </div>
          <div class="benefit">
            <img src="~assets/img/svg/benefits/two.svg" alt="Офис в центре" />
            <h3>Офис в центре</h3>
          </div>
          <div class="benefit">
            <img src="~assets/img/svg/benefits/three.svg" alt="Оперативность" />
            <h3>Оперативность</h3>
          </div>
          <div class="benefit">
            <img src="~assets/img/svg/benefits/four.svg" alt="Индивидуальный подход" />
            <h3>Индивидуальный подход</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="callback paddingTB paddingRL add-bg-block add-bg-block-dark">
      <div class="inner">
        <div class="left">
          <h1>Остались вопросы?</h1>
          <p>Заполните форму и мы вам перезвоним</p>
        </div>
        <div class="right">
          <Dform />
        </div>
      </div>
    </div>

    <div class="contacts">
      <div class="card">
        <h1>Контактная информация</h1>
        <div class="info">5-й проезд Марьиной Рощи, 15А, офис 1, г. Москва</div>
        <div class="info">
          <a href="tel:+79263333540">+7-926-3333-540</a>
        </div>
        <div class="info">
          <a href="mailto:detective.moscow@bk.ru">detective.moscow@bk.ru</a>
        </div>
        <div class="info">
          <a href="https://wa.me/79101510855">
            <img src="~assets/img/svg/whatsAppDark.svg" alt="WtassApp" />
          </a>
          <a href="tg://msg?text=?>&to=<+79263333540>" target="_blank">
            <img src="~assets/img/svg/TelegramDark.svg" alt="Telegram" />
          </a>
        </div>
      </div>
      <yandex-map
        :scroll-zoom="false"
        :coords="center"
        zoom="16"
        style="width: 100%; height: 100%;"
        hint-content="Юридическое бюро СОВЕТ"
      >
        <ymap-marker :coords="coords" marker-id="123" :balloon-template="balloonTemplate" />
      </yandex-map>
    </div>
  </div>
</template>

<script>
import services from "@/components/blocks/services";
import Dform from "@/components/Dform";
import calcHeaightHeader from "@/middleware/calcHeightHeader"

export default {
  data: () => ({
    headerHeight: 0,
    garanties: [
      {
        title: "Все детали\nфиксируются в\nдоговоре",
        text: "У нас предусмотрены санкции за разглашение информации"
      },
      {
        title: "Законность\nоказываемых\nуслуг",
        text: "Государственная лицензия МВД России ЧД №002606 до 10.01.2024"
      },
      {
        title: "Полная\nконфиденциальность\nи анонимность",
        text: "Для нас важны интересы клиента"
      }
    ],
    coords: [55.798207, 37.620097],
    center: [55.798207, 37.627]
  }),
  computed: {
    balloonTemplate() {
      return `
        <h4 class="red">DETECTIVE.MOSCOW</h4>
        <p>г. Москва, 5-й проезд Марьиной Рощи, 15А, офис 1</p>
      `;
    }
  },
  mounted() {
    this.headerHeight = calcHeaightHeader()
  },
  methods: {
    goto(index) {
      this.$router.push(`/services#block${index}`)
    }
  },
  components: {
    services,
    Dform
  }
};
</script>

<style lang="scss" scoped>
.main {
  background-image: url("~assets/img/bg/main.jpg");
  justify-content: center;
  color: $lightGray;
  .name {
    margin-bottom: $m45;
  }
  .titles {
    margin-bottom: $m60;
    span {
      padding-right: 1rem;
      border-right: 4px solid $lightGray;
    }
  }
  h2 {
    margin-bottom: $m60;
  }
}

.about {
  background-image: url("~assets/img/bg/about.jpg");
  height: calc(100vh - 12rem);
  color: $lightGray;
  .inner {
    width: 70%;
    h1 {
      margin-bottom: $m90;
    }
    p {
      margin-bottom: $m45;
    }
  }
}

.garanties {
  display: flex;
  .left {
    width: 30%;
    background-color: $darkGray;
    padding-left: 2rem;
    padding-right: 0.5rem;
    h1 {
      color: $lightGray;
      margin-bottom: $m45;
    }
    p {
      color: $helpGray;
    }
  }
  .right {
    width: 70%;
    background-color: $lightGray;
    display: flex;
    padding-right: 2rem;
    padding-left: 2rem;
    justify-content: space-between;
    flex-wrap: wrap;
    .card {
      width: 30%;
      min-width: 12rem;
      text-align: center;
      h3 {
        color: $darkGray;
        padding-bottom: $m35;
        margin-bottom: $m35;
        border-bottom: 1px solid $darkGray;
        white-space: pre;
      }
      p {
        color: $middleGray;
      }
    }
  }
}

.benefits {
  background-image: url("~assets/img/bg/benefits.jpg");
  text-align: center;
  color: $lightGray;
  h1 {
    margin-bottom: $m90;
  }
  .icons {
    display: flex;
    .benefit {
      width: 25%;
      min-width: 10rem;
      img {
        margin-bottom: $m60;
      }
    }
  }
}

.callback {
  background-image: url("~assets/img/bg/callback.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  .inner {
    display: flex;
    align-items: center;
    .left {
      color: $lightGray;
      width: 70%;
      h1 {
        margin-bottom: $m60;
      }
    }
    .right {
      width: 30%;
    }
  }
}

.contacts {
  height: 90vh;
  width: 100%;
  position: relative;
  .card {
    position: absolute;
    z-index: 2;
    top: 15%;
    bottom: 15%;
    right: 5%;
    background: white;
    padding: 2.5rem;
    width: 15rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      padding-bottom: $m35;
      margin-bottom: $m35;
      border-bottom: 1px solid $darkGray;
    }
    .info:not(:last-child) {
      margin-bottom: $m35;
    }
    .info img {
      width: 3rem;
    }
  }
}
</style>
