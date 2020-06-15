<template>
  <div class="wrapper">
    <loading :done="done" />
    <DHeader class="header" />
    <div class="body">
      <nuxt />
    </div>
    <DFooter class="footer" />
  </div>
</template>

<script>
import DHeader from "@/components/Dheader"
import DFooter from "@/components/Dfooter"
import loading from "@/components/loading"

export default {
  components: {
    DHeader,
    DFooter,
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
