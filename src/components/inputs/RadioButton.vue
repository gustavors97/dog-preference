<template>
  <v-checkbox v-model="checkbox" :label="label" color="#0FBED7"></v-checkbox>
</template>

<script>
export default {
  name: "RadioButton",

  props: {
    label: {
      type: String,
      default: "Option",
      required: true,
    },
  },

  computed: {
    checkbox: {
      get() {
        return this.$store.state.form.radio;
      },
      set(value) {
        this.$store.commit("setRadio", value);
      },
    },
  },
};
</script>
