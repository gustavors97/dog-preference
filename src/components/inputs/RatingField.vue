<template>
  <div class="rating-field mb-4">
    <label>{{ label }}</label>
    <v-rating hover ripple :value="dataValue">
      <template #item="props">
        <v-chip
          :color="getRateChipColor(props.isFilled)"
          :class="getRateChipPadding(props.index)"
          class="rounded-pill mr-3 py-6"
          tabindex="0"
          @click="handleChange(props)"
          @keyup.enter="handleChange(props)"
          @keyup.space="handleChange(props)"
        >
          {{ getRateNumber(props.index) }}
        </v-chip>
      </template>
    </v-rating>
  </div>
</template>

<script>
export default {
  name: "RatingField",

  props: {
    label: {
      type: String,
      default: "Rating",
    },
    value: {
      type: [Number, String],
      default: null,
    },
  },

  computed: {
    rating: {
      get() {
        return this.$store.state.form.rating;
      },
      set(value) {
        this.$store.commit("setRating", value);
      },
    },
  },

  data() {
    return {
      dataValue: this.value,
    };
  },

  created() {
    if (!this.dataValue) {
      this.dataValue = this.rating;
    } else {
      this.rating = this.dataValue;
    }
  },

  methods: {
    handleChange(props) {
      props.click();
      const rate = props.index + 1;
      this.$emit("input", rate);
      this.rating = rate;
    },
    getRateChipColor(isRateFilled) {
      return isRateFilled ? "#0FBED7" : "white";
    },
    getRateChipPadding(rateIndex) {
      return `px-${(rateIndex * 3 || 1) + 4}`;
    },
    getRateNumber(rateIndex) {
      return rateIndex + 1;
    },
    resetValue() {
      this.dataValue = 0;
      this.rating = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.rating-field {
  .v-rating {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .rounded-pill {
    &.white {
      border: 1px solid #dedede !important;
    }

    &.primary {
      border: 1px solid;
    }
  }
}
</style>