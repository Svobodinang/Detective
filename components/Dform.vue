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
      <DButton @clickDButton="sendForm()" class="btn" type="inForm" text="Заказать звонок" />
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: "",
    tel: ""
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
    sendForm() {
      try {
        if ((this.$v.$dirty && this.$v.$error) || !this.$v.$dirty) {
          this.$v.$touch();
          return 0;
        }

        alert("Отправлено");
        this.$v.$reset();
        this.tel = this.name = "";
      } catch (err) {
        console.log(err);
      }
    }
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
