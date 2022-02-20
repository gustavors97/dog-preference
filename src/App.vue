<template>
  <v-app>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            alt="io.insure"
            class="shrink my-8"
            contain
            min-width="100"
            :src="require('./assets/logo.svg')"
            transition="scale-transition"
            height="100"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-main>
      <main-form />
    </v-main>
  </v-app>
</template>

<script>
import MainForm from "@/components/form/MainForm";

export default {
  name: "App",

  components: {
    MainForm,
  },
};
</script>
