<template>
  <modal
    :name="modal.name"
    :style="modalStyle"
    :width="modal.width"
    :min-width="modal.minWidth"
    :max-width="modal.maxWidth"
    :height="modal.height"
    :min-height="modal.minHeight"
    :max-height="modal.maxHeight"
    :adaptive="true"
    @closed="hideModal()"
  >
    <v-container class="pa-8">
      <v-row class="text-center">
        <v-col class="my-4">
          <h1 class="display-1 font-weight-bold">Dog Preference Result</h1>
        </v-col>

        <v-col cols="12 mb-4">
          <v-img alt="Dog Image" :src="dataStore.dogImage" contain height="400">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="#0FBED7"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>

        <v-col cols="12">
          <span class="font-weight-bold mb-4"
            >Pretty form data for send to server :)</span
          >
          <v-simple-table dense height="250px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Key</th>
                  <th class="text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left">E-mail</td>
                  <td class="text-left font-weight-bold">
                    {{ dataStore.email || "" }}
                  </td>
                </tr>
                <tr>
                  <td class="text-left">What is your favorite dog breed?</td>
                  <td class="text-left text-capitalize font-weight-bold">
                    {{ dataStore.breed || "" }}
                  </td>
                </tr>
                <tr>
                  <td class="text-left">Have you ever had a Shiba Inu?</td>
                  <td class="text-left text-capitalize font-weight-bold">
                    {{ dataStore.radio ? "Yeah" : "Nope" }}
                  </td>
                </tr>
                <tr>
                  <td class="text-left">
                    I'd like to receive news about Shiba Inu puppies?
                  </td>
                  <td class="text-left text-capitalize font-weight-bold">
                    {{ dataStore.switch ? "Yeah" : "Nope" }}
                  </td>
                </tr>
                <tr>
                  <td class="text-left">How much do you love our form?</td>
                  <td class="text-left text-capitalize font-weight-bold">
                    {{ dataStore.rating || "0" }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </modal>
</template>

<script>
export default {
  name: "ModalList",

  props: {
    modalName: {
      type: String,
      default: "modal-list",
    },
  },

  computed: {
    dataStore: {
      get() {
        return this.$store.state.form;
      },
    },
    modalStyle() {
      return {
        "border-radius": "20px !important",
      };
    },
  },

  data() {
    return {
      modal: {
        name: this.modalName,
        width: "80%",
        minWidth: 320,
        maxWidth: 1000,
        height: "auto",
        minHeight: 300,
        maxHeight: 800,
      },
    };
  },

  methods: {
    showModal() {
      this.$modal.show(this.modal.name);
    },
    hideModal() {
      this.$modal.hide(this.modal.name);
      this.$emit("onClose");
    },
  },
};
</script>
