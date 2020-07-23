<template>
  <div>
    <services
      @gotoBlock="gotoBlock"
      type="cardsRight"
      :style="{'min-height': `calc(100vh - ${headerHeight}px - 1rem)`}"
      animateType="cardsRight"
      :services="services"
    />
    <div
      v-for="(service, index) in services"
      :key="index"
      class="block paddingTB paddingRL img-bg-block add-bg-block add-bg-block-dark"
      :style="{'background-image': `url(${service.picture})`}"
      :id="'block' + index"
    >
      <div class="inner">
        <h1 :class="animateValuesElements[`block${index}`].class">{{service.title}}</h1>
        <hr />
        <p :class="animateValuesElements[`block${index}`].class">{{service.text}}</p>
        <dButton
          v-if="service.button"
          :class="animateValuesElements[`block${index}`].class"
          @clickdButton="openSovet()"
          class="button"
          type="light"
          text="Перейти"
        ></dButton>
      </div>
    </div>
  </div>
</template>


<script>
import calcHeaightHeader from "@/middleware/calcHeightHeader";
import services from "@/components/blocks/services";
import animate from "@/mixins/animate";

export default {
  mixins: [animate],
  async asyncData({ $axios, params }) {
    try {
      let services = await $axios.$get(`/services/`);
      return { services };
    } catch (e) {
      return { services: [] };
    }
  },
  data: () => ({
    headerHeight: 0,
    services: [],
    animateValuesElements: {
      block0: {
        method: "animateFromRightSide",
        scrollY: 250,
        done: false,
        class: "beforeAnimateFromRightSide"
      },
      block1: {
        method: "animateFromLeftSide",
        scrollY: 1000,
        done: false,
        class: "beforeAnimateFromLeftSide"
      },
      block2: {
        method: "animateFromRightSide",
        scrollY: 1600,
        done: false,
        class: "beforeAnimateFromRightSide"
      },
      block3: {
        method: "animateFromLeftSide",
        scrollY: 2400,
        done: false,
        class: "beforeAnimateFromLeftSide"
      }
    },
    indexNextKey: 0,
    keys: ["block0", "block1", "block2", "block3", false]
  }),
  mounted() {
    this.headerHeight = calcHeaightHeader();
    try {
      setTimeout(() => {
        this.gotoBlock(this.$router.history.current.query.block)
      }, 300)
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    gotoBlock(index) {
      let el = document.getElementById(`block${index}`);
      el.scrollIntoView({ behavior: "smooth" });
    },
    openSovet() {
      window.open("http://sovetpravo.ru/", "_blank");
    }
  },
  components: {
    services
  }
};
</script>

<style lang="scss" scoped>
.block {
  color: $lightGray;
  display: flex;
  flex-direction: column;
  position: relative;
  &:nth-child(even) {
    align-items: flex-end;
  }
  .inner {
    width: 60%;
    min-width: 22rem;
    min-height: calc(100vh - 12rem);
    h1 {
      margin-bottom: $m35;
    }
    p {
      margin-top: $m90;
      white-space: pre-wrap;
    }
    hr {
      position: absolute;
      right: 6rem;
      left: 6rem;
      height: 1px;
      background: $middleGray;
      border: unset;
    }
    .button {
      padding-top: $m35;
    }
  }
}
</style>
