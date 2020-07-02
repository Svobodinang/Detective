<template>
  <div>
    <div
      class="main img-bg-block add-bg-block add-bg-block-dark"
      :style="{'min-height': `calc(100vh - ${headerHeight}px)`}"
    >
      <video autoplay loop muted class="bgvideo" id="bgvideo">
        <source src="~assets/img/bg/main.mp4" type="video/mp4" />
      </video>
      <div class="inner paddingTB paddingRL">
        <h1
          :class="{animateFromLeftSide: load, beforeAnimateFromLeftSide: !load}"
          class="name"
        >Detective.Moscow</h1>
        <div class="big titles">
          <transition name="titles" mode="out-in">
            <h1 v-bind:key="switchTitle.key">{{switchTitle.title}}</h1>
          </transition>
        </div>
        <h2 :class="{animateFromLeftSide: load, beforeAnimateFromLeftSide: !load}">Мы знаем все</h2>
        <dButton
          :class="{animateFromLeftSide: load, beforeAnimateFromLeftSide: !load}"
          type="light"
          text="Заказать звонок"
        />
      </div>
    </div>

    <div class="about paddingTB paddingRL img-bg-block add-bg-block add-bg-block-dark">
      <div class="inner">
        <h1 :class="animateValuesElements.aboutTitle.class">О нас</h1>
        <div :class="animateValuesElements.aboutText.class">
          <p>Detective.Moscow - частное детективное бюро. Мы подробно анализируем каждый случай и, если принимаем заказ, гарантируем результат.</p>
          <p>Наши сотрудники имеют большой опыт работы в правоохранительных органах. Наша организация также обеспечит профессиональную правовую помощь в достижении поставленных целей. Detective.Moscow состоит из: частных детективов, адвокатов, аналитиков, программистов, полиграфистов и психологов.</p>
          <p>Все услуги оказываются в соответствии с действующим законом «О частной детективной и охранной деятельности в Российской Федерации».</p>
        </div>
      </div>
    </div>

    <services
      animateType="cardsLeft"
      :scrollY="1000"
      type="cardsLeft"
      @gotoBlock="goToServicesPage"
    />

    <div class="garanties">
      <div class="left paddingTB">
        <h1 :class="animateValuesElements.garanties.class">Гарантии</h1>
        <p
          :class="animateValuesElements.garanties.class"
        >Мы несем ответственность за весь спектр предоставляемых услуг</p>
      </div>
      <div class="right paddingTB">
        <div
          :class="animateValuesElements.garanties.class"
          class="card"
          v-for="(card, index) in garanties"
          :key="index"
        >
          <h3>{{card.title}}</h3>
          <p class="text-small">{{card.text}}</p>
        </div>
      </div>
    </div>

    <div class="benefits paddingTB paddingRL img-bg-block add-bg-block add-bg-block-dark">
      <div class="inner" :class="animateValuesElements.benefits.class">
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
        <div class="left" :class="animateValuesElements.callback.class">
          <h1>Остались вопросы?</h1>
          <p>Заполните форму и мы вам перезвоним</p>
        </div>
        <div class="right">
          <dform />
        </div>
      </div>
    </div>

    <div class="contacts">
      <div class="card">
        <h1>Контактная информация</h1>
        <div class="info">5-й проезд Марьиной Рощи, 15А, офис 1, г.Москва</div>
        <div class="info">
          <a href="tel:+79263333540">+7-926-3333-540</a>
        </div>
        <div class="info">
          <a href="mailto:detective.moscow@bk.ru">detective.moscow@bk.ru</a>
        </div>
        <div class="info">
          <a href="https://wa.me/79263333540">
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
import dform from "@/components/dform";
import calcHeaightHeader from "@/middleware/calcHeightHeader";
import animate from "@/mixins/animate";

export default {
  mixins: [animate],
  data: () => ({
    headerHeight: 0,
    garanties: [
      {
        title: "Все детали\nфиксируются в\nдоговоре",
        text: "У нас предусмотрены санкции за разглашение информации"
      },
      {
        title: "Законность\nоказываемых\nуслуг",
        text: "Государственная лицензия ЧД №001249 до 21.10.2024"
      },
      {
        title: "Полная\nконфиденциальность\nи анонимность",
        text: "Для нас важны интересы клиента"
      }
    ],
    coords: [55.798207, 37.620097],
    center: [55.798207, 37.627],
    titles: [
      { title: "Только специалисты", key: "one" },
      { title: "Бесплатная консультация", key: "two" },
      { title: "Найдем любую информацию", key: "three" }
    ],
    titleIndex: 0,
    switchTitle: "",
    load: false,
    // Записываем какой метод использовать, когда дойдем до нужного scrollY
    // Элементы должы быть записаны строго в том порядке, в котором идут на странице
    // Нужному элементу присваиваем класс class
    // Вся логика в миксине "animate"
    animateValuesElements: {
      aboutTitle: {
        method: "animateFromLeftSide",
        scrollY: 200,
        done: false,
        class: "beforeAnimateFromLeftSide"
      },
      aboutText: {
        method: "animateFromLeftSide",
        scrollY: 300,
        done: false,
        class: "beforeAnimateFromLeftSide"
      },
      garanties: {
        method: "animateFromLeftSide",
        scrollY: 1600,
        done: false,
        class: "beforeAnimateFromLeftSide"
      },
      benefits: {
        method: "animateFromLeftSide",
        scrollY: 2000,
        done: false,
        class: "beforeAnimateFromLeftSide"
      },
      callback: {
        method: "animateFromLeftSide",
        scrollY: 2500,
        done: false,
        class: "beforeAnimateFromLeftSide"
      }
    },
    // index какой следующий объект будем проверять
    indexNextKey: 0,
    // все ключи
    keys: [
      "aboutTitle",
      "aboutText",
      "garanties",
      "benefits",
      "callback",
      false
    ]
  }),
  beforeMount() {
    this.switchTitle = this.titles[this.titleIndex];
    this.load = true;
    this.titleIndex++;
    setInterval(() => {
      this.switchTitle = this.titles[this.titleIndex];
      if (this.titleIndex === this.titles.length - 1) this.titleIndex = 0;
      else this.titleIndex++;
    }, 3000);
  },
  mounted() {
    this.headerHeight = calcHeaightHeader();
  },
  computed: {
    balloonTemplate() {
      return `
        <h4 class="red">DETECTIVE.MOSCOW</h4>
        <p>г.Москва, 5-й проезд Марьиной Рощи, 15А, офис 1</p>
      `;
    }
  },
  methods: {
    goToServicesPage(index) {
      this.$router.push(`/services?block=${index}`);
    }
  },
  components: {
    services,
    dform
  }
};
</script>

<style lang="scss" scoped>
.main {
  // background-image: url("~assets/img/bg/main.webp");
  justify-content: center;
  color: $lightGray;
  .bgvideo {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -99;
    min-width: 100%;
    min-height: 100%;
  }
  .name {
    margin-bottom: $m45;
  }
  .titles {
    display: inline-block;
    position: relative;
    height: 2rem;
    margin-bottom: $m60;
    h1 {
      position: absolute;
      top: 0;
      padding-right: 1rem;
      border-right: 4px solid $lightGray;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  h2 {
    margin-bottom: $m60;
  }

  // Анимация. разные зоголовки
  .titles-leave-active {
    animation: a 1s linear;
  }
  .titles-enter-active {
    animation: a 1s reverse linear;
  }

  @keyframes a {
    from {
      max-width: 50rem;
    }
    to {
      max-width: 0;
    }
  }
}

.about {
  background-image: url("~assets/img/bg/about.webp");
  min-height: calc(100vh - 12rem);
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
  background-image: url("~assets/img/bg/benefits.webp");
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
  background-image: url("~assets/img/bg/callback.webp");
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
