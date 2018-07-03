<template>
  <v-app>
    <v-layout wrap>
      <v-toolbar color="indigo darken-2" app>
        <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Resultados da Copa</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-navigation-drawer
        disable-resize-watcher
        v-model="drawer"
        temporary
        fixed
        app
        >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Copa do Mundo 2018</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <v-layout>
      <v-content>
        <router-view/>
      </v-content>
    </v-layout>
    <v-layout row wrap justify-center>
      <div style="padding-top: 35px"></div>
      <v-footer fixed height="auto" >
        <v-flex xs12 py-1 text-xs-center>
          <strong>Resultados da Copa 2018 - Feito com <v-icon color="red">favorite</v-icon> por @bergpb</strong>
        </v-flex>
      </v-footer>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'WorldCup 2018',
      fixed: true,
      drawer: null,
        items: [
          { title: 'Início', icon: 'home', path: '/' },
          { title: 'Em Andamento', icon: 'timer', path: '/current' },
          { title: 'Últimos Jogos', icon: 'keyboard_arrow_left', path: '/last' },
          { title: 'Jogos Futuros', icon: 'keyboard_arrow_right', path: '/future' },
        ]
    }
  },
  name: 'App'
}
</script>
