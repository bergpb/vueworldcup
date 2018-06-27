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
    <v-container fill-height>
      <v-layout v-if="worldcups[0].status === 'in progress'" row wrap>
        <v-flex v-for="worldcup in worldcups" :key="worldcup.id" v-show="worldcup.status === 'in progress'" class="text-xs-center">
          <h1><strong>{{worldcup.countries}}</strong></h1>
          <div><v-icon>poll</v-icon> {{worldcup.result}}</div>
          <div><v-icon>timer</v-icon> {{worldcup.status}}</div>
          <div style="padding-top: 10%"></div>
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-flex class="text-xs-center">
          <h2>No matches in progress.</h2>
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
