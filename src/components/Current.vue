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
          <h2>Ops fail to get data!</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container v-if="worldcup.status === 'in progress'"  fill-height>
      <v-layout row wrap>
        <v-flex class="text-xs-center">
          <h1><strong>{{worldcup.countries}}</strong></h1>
          <div><v-icon>poll</v-icon> {{worldcup.result}}</div>
          <div><v-icon>timer</v-icon> {{worldcup.status}}</div>
          <div><v-icon>stars</v-icon> {{worldcup.winner}}</div>
          <div><v-icon>calendar_today</v-icon> {{worldcup.date}}</div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-else fill-height>
      <v-layout row wrap>
        <v-flex class="text-xs-center">
          <v-flex class="text-xs-center">
            <h2>No matches in progress.</h2>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
    methods: {
      updateData: function() {
        fetch('https://worldcupresults.herokuapp.com/api/worldcup')
        .then(response => response.json())
        .then((res) => {
          this.worldcup = res.worldcup[res.worldcup.length-1]
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
