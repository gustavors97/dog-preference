<template>
  <v-autocomplete
    v-model="breed"
    :items="breedsList"
    :label="label"
    :rules="[() => !!breed || 'This field is required']"
    data-vv-name="select"
    auto-select-first
    chips
    clearable
    required
    class="mt-5"
  >
    <template v-slot:selection="data">
      <span class="text-capitalize font-weight-bold">{{ data.item }}</span>
    </template>
    <template v-slot:item="data">
      <span class="text-capitalize">{{ data.item }}</span>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: "SelectBreedField",

  props: {
    label: {
      type: String,
      default: "Select an option",
      required: true,
    },
  },

  computed: {
    breed: {
      get() {
        return this.$store.state.form.breed;
      },
      set(value) {
        this.$store.commit('setBreed', value)
      },
    },
    breedsList: {
      get() {
        return this.$store.state.form.breedsList;
      },
      set(value) {
        if (value) {
          this.$store.commit('setBreedsList', value)
        }
      },
    },
  },

  data: () => ({
    loading: true,
  }),

  created() {
    this.requestData();
  },

  methods: {
    async requestData() {
      this.setLoading(true);
      await this.$store.dispatch('getAllBreeds');
      this.setLoading(false);
    },
    setLoading(arg = true) {
      this.loading = arg;
      this.$emit("loading", this.loading);
    },
  },
};
</script>
