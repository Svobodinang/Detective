<template>
  <div>
    <form>
      <input
        type="text"
        placeholder="Имя"
        v-model.trim="$v.name.$model"
        :class="{error: $v.name.$dirty && !$v.name.required}"
      />
      <input
        type="text"
        placeholder="Телефон"
        @focus="focusTel($event)"
        @blur="blurTel($event)"
        v-model.trim="$v.tel.$model"
        :class="{error: $v.tel.$dirty && (!$v.tel.required || !$v.tel.minLength)}"
        v-mask="'8-###-###-##-##'"
      />
      <dButton @clickdButton="sendform()" class="btn" type="inForm" text="Заказать звонок" />
    </form>

    <dModal @closeModal="showModal=false" v-if="showModal" type="success" :content="message" />
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import dModal from "@/components/dModal";

export default {
  data: () => ({
    name: "",
    tel: "",
    message:
      "Ваше обращение успешно отправлено. \nНаши специалисты свяжутся с вами в течении часа.",
    showModal: false
  }),
  validations: {
    name: { required },
    tel: { required, minLength: minLength(15) }
  },
  methods: {
    focusTel(e) {
      e.target.placeholder = "8-926-333-35-40";
    },
    blurTel(e) {
      e.target.placeholder = "Телефон";
    },
    async sendform() {
      if ((this.$v.$dirty && this.$v.$error) || !this.$v.$dirty) {
        this.$v.$touch();
        return 0;
      }

      try {
        let form = { name: this.name, tel: this.tel };
        let ans = await this.$axios.$post("/send_mail", form);
      } catch (err) {
        console.log(err);
      }
      this.$emit('sendedForm')
      this.showModal = true;

      this.$v.$reset();
      this.tel = this.name = "";
    }
  },
  components: {
    dModal
  }
};
</script>

<style lang="scss" scoped>
form {
  input {
    font-family: "Montserrat-Light";
    width: calc(100% - 1rem);
    padding: 0.7rem 0.5rem;
    background: rgba(147, 139, 139, 0.7);
    color: $lightGray;
    border: 1px solid rgba(147, 139, 139, 0.7);
    &::placeholder {
      color: $helpGray;
    }
    &:first-child {
      margin-bottom: $m35;
    }
    &:nth-child(2) {
      margin-bottom: $m45;
    }
    &:focus {
      outline: unset;
      border: 1px solid $lightGray;
    }
    &.error {
      border: 1px solid $alarm;
    }
  }
  .btn {
    width: 100%;
  }
}
</style>
