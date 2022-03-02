<template>
  <v-container>
    <v-card :loading="loading" outlined shaped class="mx-auto" max-width="750">
      <v-row>
        <v-col cols="12" class="pa-8">
          <v-card-title class="text-h5 font-weight-bold">
            Dog Preference
          </v-card-title>

          <v-card-subtitle>
            Recruiting process challenge #1. By: Gustavo Rodrigues Silva.
          </v-card-subtitle>

          <v-form ref="form" class="pa-5" v-model="valid" lazy-validation>
            <email-field label="E-mail" />

            <select-breed-field
              label="What is your favorite dog breed?"
              @loading="setLoading($event)"
            />

            <radio-button label="Have you ever had a Shiba Inu?" />

            <switch-field
              label="Yes, I'd like to receive news about Shiba Inu puppies."
            />

            <rating-field
              label="How much do you love our form?"
              ref="ratingField"
            />
          </v-form>

          <v-row justify="end" class="pa-5">
            <v-card-actions>
              <v-btn
                @click.prevent="clearDataForm()"
                class="px-6 mr-5"
                color="#9E9E9E"
                outlined
                large
                rounded
                type="button"
                :disabled="btnLoading"
              >
                clear
              </v-btn>

              <v-btn
                class="px-6 white--text"
                color="#0FBED7"
                large
                rounded
                :loading="btnLoading"
                :disabled="btnLoading"
                type="submit"
                @click.prevent="submit"
              >
                submit
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-col>
      </v-row>

      <modal-list ref="modalList" @onClose="clearDataForm()" />
    </v-card>
  </v-container>
</template>

<script>
import EmailField from "@/components/inputs/EmailField";
import ModalList from "@/components/util/ModalList";
import RadioButton from "@/components/inputs/RadioButton";
import RatingField from "@/components/inputs/RatingField";
import SelectBreedField from "@/components/inputs/SelectBreedField";
import SwitchField from "@/components/inputs/SwitchField";

export default {
  name: "MainForm",

  components: {
    EmailField,
    ModalList,
    RatingField,
    RadioButton,
    SelectBreedField,
    SwitchField,
  },

  data: () => ({
    valid: true,
    loading: false,
    btnLoading: false,
    ratingValue: 0,
  }),

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.btnLoading = true;
        await this.$store.dispatch("getDogImage");
        this.btnLoading = false;

        this.$refs.modalList.showModal();
      }
    },
    setLoading(arg) {
      this.loading = arg;
    },
    clearDataForm() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.$refs.ratingField.resetValue();
    },
  },
};
</script>
