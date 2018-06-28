<template>
  <v-app>
    <v-toolbar color="blue darken-1" app>
      <v-avatar>
        <img src="@/assets/worldcup_logo.png">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/current" flat>
          Em Andamento
        </v-btn>
        <v-btn to="/last" flat>
          Últimas
        </v-btn>
        <v-btn to="/future" flat>
          Futuras
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <div style="padding-top: 8%"></div>
    <v-footer fixed height="auto" >
    <v-layout row wrap justify-center>
      <v-flex xs12 py-1 text-xs-center>
        <strong>Resultado da Copa 2018 - Feito com <v-icon color="red">favorite</v-icon> por @bergpb</strong>
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
