<template>
  <div v-if="loading">
    <v-container fill-height>
      <v-layout row wrap>
        <v-flex class="text-xs-center">
          <v-progress-circular :size="70" :width="7" indeterminate color="#303F9F"></v-progress-circular>
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
    <div v-if="worldcups.length > 0">
      <v-container grid-list-md text-xs-center align-baseline>
        <v-layout v-for="worldcup in worldcups"
                  :key="worldcup.id"
                  v-show="worldcup.status === 'Jogo Finalizado'" row wrap>
            <v-flex xs12 sm12 md12 lg6 xl6 offset-lg3 offset-xl3>
              <v-card class="default" color="white" height="100%">
                <v-card-title primary-title>
                  <v-flex v-for="countries in worldcup.countries" xs6>
                    <h1>{{countries}}</h1>
                  </v-flex>
                  <v-flex v-for="flag in worldcup.flags" xs6 sm6 md6 lg6 xl6>
                      <div v-if="flag.includes('png')">
                        <div class="text-xs-center">
                          <img :src=flag />
                        </div>
                      </div>
                      <div v-else>
                        <p class="text-xs-center"> - </p>
                      </div>
                  </v-flex>
                  <v-flex v-for="result in worldcup.results" xs6>
                    <h1>{{result}}</h1>
                  </v-flex>
                  <v-flex>
                    <h2>Tempo decorrido: {{worldcup.time}}</h2>
                    <p>Última atualização: {{worldcup.date_time}}</p>
                  </v-flex>
                </v-card-title>
              </v-card>
            </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div v-else>
      <v-container>
        <v-layout>
          <v-flex class="text-xs-center">
            <h2>Ops, não há nenhuma partida em andamento.</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
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
        fetch('https://worldcupresults.herokuapp.com/api/current')
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
        fetch('https://worldcupresults.herokuapp.com/api/current')
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
        this.continuousUpdate, 30 * 1000
      );
    },
    destroyed () {
      clearInterval(this.interval)
    },
  }
</script>
