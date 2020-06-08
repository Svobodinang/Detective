<template>
  <!-- type = cardsRight, cardsLeft -->
  <div class="services" :class="type">
    <div class="cards">
      <div
        v-for="(card, index) in services"
        :key="index"
        class="card one add-bg-block add-bg-block-dark"
        :style="{'background-image': `url(${card.img})`}"
        @click.prevent="$emit('goto', index)"
      >
        <div class="inner">
          <h2>{{card.title}}</h2>
          <DButton type="dark" text="Подробнее" />
        </div>
      </div>
    </div>
    <div class="text">
      <h1>Услуги</h1>
      <p
        class="text-very-small"
      >Цены в нашем бюро индивидуальны. Стоимость услуг рассчитывается исходя из сложности задачи и перспектив её решения.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"],
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
    ]
  })
};
</script>

<style lang="scss" scoped>
.services {
  height: 100vh;
  display: flex;
  &.cardsLeft {
    flex-direction: row;
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
