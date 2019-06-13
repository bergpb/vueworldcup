<template>
  <v-container v-if="loading" fill-height>
    <v-layout row wrap>
      <v-flex class="text-xs-center">
        <v-progress-circular :size="70" :width="7" indeterminate color="#303F9F"></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else-if="errored" fill-height>
    <v-layout row wrap>
      <v-flex class="text-xs-center">
        <h2>Ops! Falha ao recolher informações!</h2>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container fluid grid-list-lg v-else-if="worldcups.length > 0">
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex v-for="worldcup in worldcups"
                :key="worldcup.id"
                v-if="worldcup.status === 'Jogo Finalizado'" xs12 sm6 md4 lg4 xl3>
          <v-card class="default" color="white" height="100%">
            <v-card-title primary-title>
              <v-flex v-for="countries in worldcup.countries" xs6 sm6 md6 lg6 xl6>
                <div class="text-xs-center">
                  <h1>{{countries}}</h1>
                </div>
              </v-flex>
              <v-flex v-for="flag in worldcup.flags" xs6 sm6 md6 lg6 xl6>
                <div class="text-xs-center">
                  <img :src=flag />
                </div>
              </v-flex>
              <v-flex v-for="result in worldcup.results" xs6 sm6 md6 lg6 xl6>
                <div class="text-xs-center">
                  <h1>{{result}}</h1>
                </div>
              </v-flex>
              <v-card-text>
                <v-chip>
                  <v-avatar class="blue">
                    <v-icon>info</v-icon>
                  </v-avatar>
                  {{worldcup.id}}
                </v-chip>
                <v-chip>
                  <v-avatar class="yellow">
                    <v-icon>stars</v-icon>
                  </v-avatar>
                  {{worldcup.winner}}
                </v-chip>
                </br>
                <v-chip>
                  <v-avatar class="teal">
                    <v-icon>calendar_today</v-icon>
                  </v-avatar>
                  {{worldcup.date | datalize}}
                </v-chip>
                </br>
                <v-chip>
                  <v-avatar class="orange">
                    <v-icon>location_on</v-icon>
                  </v-avatar>
                  {{worldcup.localization}}<br>
                </v-chip>
              </v-card-text>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
  <v-container v-else fill-height>
    <v-layout row wrap>
      <v-flex class="text-xs-center">
        <h2>Ops, não há partidas registradas.</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        worldcups: null,
        loading: true,
        errored: false,
        error: null
      }
    },
    methods:{
      updateData: function() {
        fetch('https://worldcupresults.herokuapp.com/api/completed')
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
      }
    },
    filters: {
      datalize: function (date) {
        if (!date) return ''
        date = new Date(date)
        return date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'}) + ' - ' + date.toLocaleDateString()
      }
    },
    mounted () {
      this.updateData();
    },
}
</script>
