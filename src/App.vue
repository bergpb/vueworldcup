<template>
  <v-app>
    <v-toolbar color="blue darken-1" app>
      <v-avatar>
          <img src="@/assets/worldcup_logo.png">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/current" flat>
          Current
        </v-btn>
        <v-btn to="/last" flat>
          Last
        </v-btn>
        <v-btn to="/future" flat>
          Future
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer fixed height="auto" >
    <v-layout row wrap justify-center>
      <v-flex xs12 py-1 text-xs-center>
        <strong>WorldCup Results - Made with <v-icon color="red">favorite</v-icon> by bergpb</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'WorldCup 2018',
      fixed: true
    }
  },
  name: 'App'
}
</script>
