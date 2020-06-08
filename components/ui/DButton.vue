<template>
  <div>
    <!-- type = light, dark, inForm -->
    <button @click.prevent="$emit('clickDButton')" class="small-text" :class="type">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: ["type", "text"]
};
</script>

<style lang="scss" scoped>
button {
  min-width: 10rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  &.light {
    background: $lightGray;
    border: 1px solid $lightGray;
    color: $darkGray;
    &:hover {
      background: $darkGray;
      box-shadow: 0px 0px 10px $lightGray;
      color: $lightGray;
    }
  }
  &.dark {
    background: $darkGray;
    color: $lightGray;
  }
  &.inForm {
    background: $lightGray;
    color: $darkGray;
    width: 100%;
    padding: 0.7rem 0.5rem;
    box-shadow: 8px 10px 15px #000000;
    &:active {
      box-shadow: unset;
      transform: translate(2px, 2px);
    }
  }
}
</style>
