<template>
  <div v-if="loading">
    <v-container fill-height>
      <v-layout row wrap>
        <v-flex class="text-xs-center">
          <v-progress-circular :size="70" :width="7" indeterminate color="red"></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else-if="errored">
    <v-container fill-height>
      <v-layout row wrap>
        <v-flex class="text-xs-center">
          <h2>Ops encontramos um erro!</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <v-card v-else>
    <v-container fluid grid-list-lg>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <v-flex v-for="worldcup in worldcups" :key="worldcup.id" xs12 sm6 md3 lg3 xl3>
            <v-card class="default" color="blue-grey lighten-4" height="100%">
              <v-card-title primary-title>
                <div class="headline">{{worldcup.countries}}</div>
                <v-card-text>
                   <v-icon>poll</v-icon> {{worldcup.result}}<br>
                   <v-icon>timer</v-icon> {{worldcup.status}}<br>
                   <v-icon>stars</v-icon> {{worldcup.winner}}<br>
                   <v-icon>calendar_today</v-icon> {{worldcup.date}}<br>
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
  mounted () {
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
