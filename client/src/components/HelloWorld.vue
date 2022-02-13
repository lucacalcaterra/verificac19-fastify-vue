<template>
  <v-container>
    <v-row class="text-center">
      <v-btn
        :loading="loading"
        class="ma-1"
        color="error"
        plain
        @click="test()"
      >
        Delete
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
//axios.defaults.baseURL('http://localhost:4000')

export default {
  name: "HelloWorld",

  data: () => ({
    loading: false,
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
  methods: {
    test: function () {
      console.log("test");
      const res = axios.get("http://127.0.0.1:3000");
      console.log(res);
    },
  },
};
</script>
