<template>
  <v-app>
    <v-toolbar color="red accent-4" app :clipped-left="clipped">
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
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
      clipped: false,
      drawer: false,
      fixed: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WorldCup Results 2018'
    }
  },
  name: 'App'
}
</script>
