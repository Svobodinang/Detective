<template>
  <!-- type = cardsRight, cardsLeft -->
  <div class="services" :class="type">
    <div class="cards">
      <div
        v-for="(card, index) in services"
        :key="index"
        class="card one add-bg-block add-bg-block-dark"
        :style="{'background-image': `url(${card.img})`}"
        @click.prevent="$emit('gotoBlock', index)"
      >
        <div
          class="inner"
          v-if="animateValuesElements"
          :class="animateValuesElements[`card${index}`].class"
        >
          <h2>{{card.title}}</h2>
          <DButton type="dark" text="Подробнее" />
        </div>
        <div class="inner" v-else :class="{animateFromScale: load, beforeAnimateFromScale: !load}">
          <h2>{{card.title}}</h2>
          <DButton type="dark" text="Подробнее" />
        </div>
      </div>
    </div>
    <div class="text" v-if="animateValuesElements">
      <h1 :class="animateValuesElements.title.class">Услуги</h1>
      <p
        class="text-very-small"
        :class="animateValuesElements.title.class"
      >Цены в нашем бюро индивидуальны. Стоимость услуг рассчитывается исходя из сложности задачи и перспектив её решения.</p>
    </div>
    <div class="text" v-else>
      <h1 :class="{animateFromLeftSide: load, beforeAnimateFromLeftSide: !load}">Услуги</h1>
      <p
        class="text-very-small"
        :class="{animateFromLeftSide: load, beforeAnimateFromLeftSide: !load}"
      >Цены в нашем бюро индивидуальны. Стоимость услуг рассчитывается исходя из сложности задачи и перспектив её решения.</p>
    </div>
  </div>
</template>

<script>
import animate from "@/mixins/animate";

export default {
  props: ["type", "animateType", "scrollY"],
  mixins: [animate],
  data: () => ({
    services: [
      {
        title: `Сбор\nинформации`,
        img: require("../../assets/img/bg/services/one.jpg")
      },
      {
        title: `Бизнес-\nразведка`,
        img: require("../../assets/img/bg/services/two.jpg")
      },
      {
        title: `Проверка на\nпрослушку`,
        img: require("../../assets/img/bg/services/three.jpg")
      },
      {
        title: `Юридическое\nсопровождение`,
        img: require("../../assets/img/bg/services/four.jpg")
      }
    ],
    animateValuesElements: null,
    keys: null,
    indexNextKey: 0,
    load: false
  }),
  beforeMount() {
    if (this.scrollY) {
      this.animateValuesElements = {
        title: {
          method: "animateFromRightSide",
          scrollY: this.scrollY,
          done: false,
          class: "beforeAnimateFromRightSide"
        },
        card0: {
          method: "animateFromScale",
          scrollY: this.scrollY,
          done: false,
          class: "beforeAnimateFromScale",
          delay: 0
        },
        card1: {
          method: "animateFromScale",
          scrollY: this.scrollY,
          done: false,
          class: "beforeAnimateFromScale",
          delay: 0.2
        },
        card2: {
          method: "animateFromScale",
          scrollY: this.scrollY + 200,
          done: false,
          class: "beforeAnimateFromScale",
          delay: 0.4
        },
        card3: {
          method: "animateFromScale",
          scrollY: this.scrollY + 200,
          done: false,
          class: "beforeAnimateFromScale",
          delay: 0.6
        }
      };
      this.keys = ["title", "card0", "card1", "card2", "card3", false];
    }
  },
  mounted() {
    this.load = true;
  }
};
</script>

<style lang="scss" scoped>
.services {
  height: 100vh;
  display: flex;
  &.cardsLeft {
    flex-direction: row;
    background: $darkGray;
  }
  &.cardsRight {
    flex-direction: row-reverse;
  }
  .cards {
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .card {
      height: 50%;
      width: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      color: $lightGray;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: pre;
      .inner {
        width: 15rem;
        text-align: center;
        position: relative;
        div {
          position: absolute;
          left: 0;
          right: 0;
          margin-top: $m60;
          display: none;
        }
      }
      &:hover {
        cursor: pointer;
        color: $darkGray;
        &::before {
          background-color: rgba(242, 242, 242, 0.7);
        }
        .inner {
          div {
            display: block;
          }
        }
      }
    }
  }
  .text {
    width: 30%;
    background: $helpDark;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 $m60;
    h1 {
      margin-bottom: $m60;
      color: $lightGray;
    }
    p {
      color: $helpGray;
    }
  }
}
</style>
