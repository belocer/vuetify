<template>
  <v-app>
    <v-navigation-drawer app temporary></v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Ad application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
    data() {
      return {

      }
    },
  components: {

  }
}
</script>
