<template>
  <v-app>
    <v-layout wrap>
      <v-toolbar color="indigo darken-2" app>
        <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">FIFA Worldcup</v-toolbar-title>
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
              <v-list-tile-title>Copa do Mundo 2019</v-list-tile-title>
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
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'WorldCup 2019',
      fixed: true,
      drawer: null,
        items: [  
          { title: 'Início', icon: 'home', path: '/' },
          { title: 'Em Andamento', icon: 'timer', path: '/current' },
          { title: 'Últimos Jogos', icon: 'keyboard_arrow_left', path: '/last' },
          { title: 'Jogos Futuros', icon: 'keyboard_arrow_right', path: '/future' },
          { title: 'Sobre', icon: 'info', path: '/about' },
        ]
    }
  },
  name: 'App'
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr {
   display: block;
   position: relative;
   padding: 0;
   margin: 10px auto;
   height: 0;
   width: 100%;
   max-height: 0;
   font-size: 2px;
   line-height: 0;
   clear: both;
   border: none;
   border-top: 1px solid #aaaaaa;
   border-bottom: 1px solid #ffffff;
}
</style>
