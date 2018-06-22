<template>
  <v-app>
    <v-toolbar color="blue darken-1" app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <!--<v-footer :fixed="fixed" app>
      <span> WorldCup Results - Made with love by bergpb</span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'WorldCup Results 2018'
    }
  },
  name: 'App'
}
</script>
