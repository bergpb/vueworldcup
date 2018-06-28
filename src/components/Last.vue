<template>
  <v-container v-if="loading" fill-height>
    <v-layout row wrap>
      <v-flex class="text-xs-center">
        <v-progress-circular :size="70" :width="7" indeterminate color="teal"></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container v-else-if="errored" fill-height>
    <v-layout row wrap>
      <v-flex class="text-xs-center">
        <h2>Ops fail to get data! </h2>
      </v-flex>
    </v-layout>
  </v-container>
  <v-card v-else>
    <v-container fluid grid-list-lg>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <v-flex v-for="worldcup in worldcups" :key="worldcup.id" v-show="worldcup.status === 'Finalizado'" xs12 sm6 md3 lg3 xl3>
            <v-card class="default" color="blue-grey lighten-4" height="100%">
              <v-card-title primary-title>
                <div class="headline">{{worldcup.countries}}</div>
                <v-card-text>
                   <v-icon>poll</v-icon> {{worldcup.result}}<br>
                   <v-icon>timer</v-icon> {{worldcup.status}}<br>
                   <v-icon>stars</v-icon> {{worldcup.winner}}<br>
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
    methods:{
      updateData: function() {
        fetch('https://worldcupresults.herokuapp.com/api/worldcup')
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
        return date.toLocaleTimeString() + ' - ' + date.toLocaleDateString()
      }
    },
    mounted () {
      this.updateData();
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
</style>
