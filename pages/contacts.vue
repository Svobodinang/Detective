<template>
  <div class="paddingTB paddingRL">
    <div class="contacts">
      <div class="left">
        <h1>Контактная информация</h1>
        <p>Свяжитесь с нами любым удобным для вас способом или оставьте заявку и мы перезвоним</p>
        <dl>
          <div class="line" v-for="(contact, index) in contacts" :key="index">
            <dt>
              <h3>{{contact.title}}</h3>
            </dt>
            <dd>
              <p class="text-small">{{contact.text}}</p>
            </dd>
          </div>
          <div class="line social">
            <dt></dt>
            <dd>
              <a class="img" href="https://wa.me/79263333540">
                <img src="~assets/img/svg/whatsAppDark.svg" alt="WtassApp" />
              </a>
              <a class="img" href="tg://msg?text=?>&to=<+79263333540>">
                <img src="~assets/img/svg/TelegramDark.svg" alt="Telegram" />
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <div class="right">
        <dform />
      </div>
    </div>
    <div class="map">
      <yandex-map
        :scroll-zoom="false"
        :coords="coords"
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
import dform from "@/components/dform";

export default {
  data: () => ({
    headerHeight: 0,
    contacts: [
      {
        title: "Адрес",
        text: "5-й проезд Марьиной Рощи, 15А, офис 1 г.Москва"
      },
      {
        title: "Часы работы",
        text: "Понедельник - Пятница: 10:00 - 19:00 Суббота: 11:00 - 18:00"
      },
      {
        title: "Телефон",
        text: "+7-926-3333-540"
      },
      {
        title: "Email",
        text: "detective.moscow@bk.ru"
      }
    ],
    coords: [55.798207, 37.620097]
  }),
  components: {
    dform
  },
  computed: {
    balloonTemplate() {
      return `
        <h4 class="red">DETECTIVE.MOSCOW</h4>
        <p>г.Москва, 5-й проезд Марьиной Рощи, 15А, офис 1</p>
      `;
    }
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  justify-content: space-between;
  margin-bottom: $m90;
  .left {
    width: 50%;
    color: $darkGray;
    h1,
    p {
      margin-bottom: $m60;
    }
    dl {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    .line {
      display: flex;
      &:not(:last-child) {
        margin-bottom: $m35;
      }
      dt {
        min-width: 10rem;
      }
      dd {
        margin-left: 0.5rem;
        display: flex;
        justify-content: end;
        line-height: 22px;
        p {
          margin-bottom: 0;
        }
      }
      img {
        width: 3rem;
        margin-right: $m35;
      }
    }
  }
  .right {
    width: 35%;
    max-width: 20rem;
    max-height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 $m60;
    background: $helpDark;
  }
}

.map {
  height: 30rem;
}
</style>
