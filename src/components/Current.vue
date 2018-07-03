<template>
  <div v-if="loading">
    <v-container fill-height>
      <v-layout row wrap>
        <v-flex class="text-xs-center">
          <v-progress-circular :size="70" :width="7" indeterminate color="teal"></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else-if="errored">
    <v-container fill-height>
      <v-layout row wrap>
        <v-flex class="text-xs-center">
          <h2>Ops! Falha ao recolher informações!</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container v-if="worldcups[0].status === 'Em Andamento'" grid-list-md text-xs-center>
      <v-layout v-for="worldcup in worldcups" :key="worldcup.id" v-show="worldcup.status === 'Em Andamento'" row wrap>
        <v-flex v-for="countries in worldcup.countries" xs6>
          <h1>{{countries}}</h1>
        </v-flex>
        <v-flex v-for="flag in worldcup.flags" xs6>
          <img :src=flag />
        </v-flex>
        <v-flex v-for="result in worldcup.results" xs6>
          <h1>{{result}}</h1>
        </v-flex>
        <v-flex>
          <h2>Tempo decorrido: {{worldcup.time}}</h2>
          <p>Última atualização: {{worldcup.date_time}}</p>
        </v-flex>
        <hr>
      </v-layout>
    </v-container>
    <v-container v-else>
      <v-layout>
        <v-flex class="text-xs-center">
          <h2>Ops, não há nenhuma partida em andamento.</h2>
        </br>
          <p>Última atualização: {{worldcups[0].date_time}}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        worldcups: [],
        loading: true,
        errored: false,
        error: null
      }
    },
    methods: {
      firstUpdate: function() {
        fetch('https://worldcupresults.herokuapp.com/api/worldcup')
        // fetch('http://localhost:5000/api/worldcup')
        .then(response => response.json())
        .then((res) => {
          this.worldcups = res.worldcup.reverse()
        })
        .catch(err => {
          this.error = err
          console.log('Erro: ' + err)
          this.errored = true
        })
        .finally(() => this.loading = false)
      },
      continuousUpdate: function() {
        console.log('updating...')
        fetch('https://worldcupresults.herokuapp.com/api/worldcup')
        // fetch('http://localhost:5000/api/worldcup')
        .then(response => response.json())
        .then((res) => {
          this.worldcups = res.worldcup.reverse()
        })
        .catch(err => {
          this.error = err
          console.log('Erro: ' + err)
          this.errored = true
        })
      }
    },
    filters: {
      datalize: function (date) {
        if (!date) return ''
        date = new Date(date)
        return date.toLocaleTimeString() + ' - ' + date.toLocaleDateString()
      }
    },
    mounted () {
      this.firstUpdate()
      this.interval = setInterval(
        this.continuousUpdate, 15 * 1000
      );
    },
    destroyed () {
      clearInterval(this.interval)
    },
  }
</script>

<style scoped>
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
