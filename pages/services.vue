<template>
  <div>
    <services
      @gotoBlock="gotoBlock"
      type="cardsRight"
      :style="{'min-height': `calc(100vh - ${headerHeight}px - 1rem)`}"
      animateType="cardsRight"
    />
    <div
      v-for="(service, index) in services"
      :key="index"
      class="block paddingTB paddingRL img-bg-block add-bg-block add-bg-block-dark"
      :style="{'background-image': `url(${service.img})`}"
      :id="'block' + index"
    >
      <div class="inner">
        <h1 :class="animateValuesElements[`block${index}`].class">{{service.title}}</h1>
        <hr />
        <p :class="animateValuesElements[`block${index}`].class">{{service.text}}</p>
        <DButton
          v-if="service.button"
          :class="animateValuesElements[`block${index}`].class"
          @clickDButton="openSovet()"
          class="button"
          type="light"
          text="Перейти"
        ></DButton>
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
  data: () => ({
    headerHeight: 0,
    services: [
      {
        title: "Сбор информации",
        img: require("../assets/img/bg/services/one.jpg"),
        text:
          "Наша команда предлагает Вам комплекс услуг по сбору информации о человеке и(или) юридическом лице.\n\nВысокая квалификация, актуальность источников информации и использование уникальных методик ее сбора — залог качества оказываемых услуг.\n\nСбор информации — одно из важнейших направлений деятельности нашей организации. Вы можете быть уверены в надлежащем качестве, конфиденциальности и актуальности предоставленных (собранных) данных."
      },
      {
        title: "Бизнес-разведка",
        img: require("../assets/img/bg/services/two.jpg"),
        text:
          "Бизнес разведка – комплекс мероприятий направленный на получение коммерческой информации и сведений о конкурентах.\n\nСотрудники нашего бюро составят для Вас досье на юридическое лицо, бизнес досье или соберут досье на фирму в кратчайшие сроки, при этом действуют исключительно в пределах действующего законодательства.\n\nПодписание договора гарантирует абсолютную конфиденциальность Вашего имени и полученных сведений в процессе сотрудничества."
      },
      {
        title: "Проверка на прослушку",
        img: require("../assets/img/bg/services/three.jpg"),
        text:
          "Для поиска жучков мы проводим детальное обследование помещений и транспорта, в том числе их визуальный осмотр и ручной поиск разного рода устройства. Проведём сканирование радиосигнала специальной аппаратурой.\n\nНаши специалисты проконсультируют Вас по пресечению подобной опасности в будущем."
      },
      {
        title: "Юридическое сопровождение",
        img: require("../assets/img/bg/services/four.jpg"),
        text:
          'Наша команда всегда готова проконсультировать Вас по всем вопросам гражданского, трудового, жилищного, корпоративного, земельного и других областей права.\n\nВ нашей организации есть высококвалифицированные адвокаты, которые помогут Вам в любых обстоятельствах. \n\nСвоевременное привлечение адвоката в производственный уголовный процесс позволит предотвратить осуществление незаконных действий со стороны соответствующих государственных органов, а также разрешить особо трудную ситуацию в пользу клиента. В том случае, если уголовное дело было возбуждено, профессиональная адвокатская помощь жизненно важна.\n\nТакже мы предоставляем полный перечень юридических услуг в бюро "Совет"',
        button: true
      }
    ],
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
      console.log(index);

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
