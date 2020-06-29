<template>
  <div class="wrapper">
    <loading :done="done" />
    <dheader class="header" />
    <div class="body">
      <nuxt />
    </div>
    <dfooter class="footer" />
  </div>
</template>

<script>
import dheader from "@/components/dheader"
import dfooter from "@/components/dfooter"
import loading from "@/components/loading"

export default {
  components: {
    dheader,
    dfooter,
    loading
  },
  data: () => ({
    done: false
  }),
  mounted() {
    setTimeout(() => {
      this.done = true
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .body {
    flex: 1 0 auto;
  }
  .footer, .header {
    flex: 0 0 auto;
  }
}
</style>
