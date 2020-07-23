<template>
  <!-- type = 'success', 'error', 'info' -->
  <div class="modal">
    <div class="inside" :class="type">
      <div class="close">
        <button @click.prevent="$emit('closeModal')">&#10006;</button>
      </div>
      <div class="content">
        <dForm @sendedForm="$emit('sendedForm')" v-if="type === 'form'" />
        <div v-else class="text">
          <p>{{content}}</p>
          <dButton @clickdButton="$emit('closeModal')" type="dark center" text="Ок" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dForm from "@/components/dform";

export default {
  props: ["type", "content"],
  components: {
    dForm
  }
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .close {
    display: flex;
    justify-content: flex-end;
  }
  .inside {
    width: 30rem;
    padding: 0.5rem 1rem;
    background: white;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 1rem 2rem 1rem;
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          text-align: center;
          margin-bottom: 1rem;
        }
      }
    }
  }
  .form {
    background: $darkGray;
  }
}
</style>
