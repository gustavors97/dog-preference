<template>
  <v-text-field
    v-model="email"
    :rules="emailRules"
    :label="label"
    required
  ></v-text-field>
</template>

<script>
export default {
  name: "EmailField",

  props: {
    label: {
      type: String,
      default: "E-mail",
      required: true,
    },
  },

  computed: {
    email: {
      get() {
        return this.$store.state.form.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      },
    },
  },

  data: () => ({
    valid: true,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
