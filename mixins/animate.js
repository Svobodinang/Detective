// Для использования миксина, нужно его подключить и создать объект animateValuesElements, indexNextKey, keys
// mixin который запускают анимацию, указанную в объекте animateValuesElements
// Все возможные методы анимации для проекта прописаны в этом миксине в поле methods

export default {
  data: () => ({
    mounted: false,
  }),
  mounted() {
    this.mounted = true;
    window.addEventListener("scroll", this.scrollMethod);
  },
  methods: {
    // Вызов определенного метода, если скролл достиг значения, указанного в дате
    scrollMethod() {
      if (!this.mounted)
        return 0;
      if (!this.animateValuesElements)
        return 0

      let key = this.keys[this.indexNextKey]

      if (!key) return 0

      if (
        !this.animateValuesElements[key].done &&
        !(window.scrollY > this.animateValuesElements[key].scrollY)
      ) {
        return 0;
      }

      if (
        !this.animateValuesElements[key].done &&
        window.scrollY > this.animateValuesElements[key].scrollY
      ) {
        if (this.animateValuesElements[key].delay) {
          setTimeout(() => {
            this[this.animateValuesElements[key].method](key);
          }, this.animateValuesElements[key].delay)
        } else {
          this[this.animateValuesElements[key].method](key);
        }
        this.$set(this.animateValuesElements[key], "done", true);
        this.indexNextKey++
        return 0;
      }
    },

    // Выезд слева
    animateFromLeftSide(key) {
      this.$set(this.animateValuesElements[key], "class", "animateFromLeftSide");
    },
    // Выезд справа
    animateFromRightSide(key) {
      this.$set(this.animateValuesElements[key], "class", "animateFromRightSide");
    },
    // Увеличение
    animateFromScale(key) {
      this.$set(this.animateValuesElements[key], "class", "animateFromScale");
    }
  }
}
