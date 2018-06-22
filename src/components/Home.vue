<template>
  <v-card>
    <v-container fluid grid-list-lg grid-list-sm>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <v-flex v-for="worldcup in worldcups" :key="worldcup.id" xs12>
            <v-card class="default" color="blue-grey lighten-4">
              <v-card-title primary-title>
                <div v-if="errored">
                  <p>We're sorry, we're not able to retrieve this information at the moment, please try back later.</p>
                </div>
                <div v-else>
                  <div v-if="loading">
                    <v-progress-circular :size="70" :width="7" indeterminate color="red"></v-progress-circular>
                  </div>
                  <div v-else>
                    <div class="headline">{{worldcup.countries}}</div>
                    <v-card-text>
                       <v-icon>poll</v-icon> {{worldcup.result}}<br>
                       <v-icon>timer</v-icon> {{worldcup.status}}<br>
                       <v-icon>stars</v-icon> {{worldcup.winner}}<br>
                       <v-icon>calendar_today</v-icon> {{worldcup.date}}<br>
                       <v-icon>location_on</v-icon> {{worldcup.localization}}<br>
                    </v-card-text>
                  </div>
                </div>
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
      errored: false
    }
  },
  mounted () {
    fetch('https://worldcupresults.herokuapp.com/api/worldcup')
      .then(response => response.json())
      .then((res) => {
        this.worldcups = res.worldcup.reverse()
      })
      .catch(error => {
        console.log(error)
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
