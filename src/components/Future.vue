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
  <v-card v-else>
    <v-container fluid grid-list-lg>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <v-flex v-for="worldcup in worldcups" :key="worldcup.id" v-show="worldcup.countries[0] != '-'" xs12 sm6 md4 lg4 xl3>
            <v-card class="default" color="white" height="100%">
              <v-card-title primary-title>
                <v-flex v-for="countries in worldcup.countries" xs6 sm6 md6 lg6 xl6>
                  <div class="text-xs-center">
                    <h1>{{countries}}</h1>
                  </div>
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
                <v-card-text style="">
                   <v-icon>calendar_today</v-icon> {{worldcup.date | datalize}}<br>
                   <v-icon>location_on</v-icon> {{worldcup.localization}}<br>
                </v-card-text>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-card>
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
    filters: {
      datalize: function (date) {
        if (!date) return ''
        date = new Date(date)
        return date.toLocaleTimeString() + ' - ' + date.toLocaleDateString()
      }
    },
    methods:{
      updateData: function() {
        fetch('https://worldcupresults.herokuapp.com/api/future')
          .then(response => response.json())
          .then((res) => {
            this.worldcups = res.worldcup
          })
          .catch(err => {
            this.error = err
            console.log('Erro: ' + err)
            this.errored = true
          })
          .finally(() => this.loading = false)
        }
      },
    mounted () {
      this.updateData();
    }
  }
</script>
