<template>
  <v-switch v-model="switchOption" :label="label" color="#0FBED7"></v-switch>
</template>

<script>
export default {
  name: "SwitchField",

  props: {
    label: {
      type: String,
      default: "Option",
      required: true,
    },
  },

  computed: {
    switchOption: {
      get() {
        return this.$store.state.form.switch;
      },
      set(value) {
        this.$store.commit("setSwitch", value);
      },
    },
  },
};
</script>
