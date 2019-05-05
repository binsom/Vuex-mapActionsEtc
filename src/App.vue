<template>
  <div id="app">
    {{count}}

    <button @click="putAdd">+</button>

    <button @click="putReduce2">-</button>
    <!--<button @click="putOdd">偶数</button>-->
    <hr>
    <div>{{singer}}</div>
    <!--<router-view/>-->
  </div>
</template>

<script>
  import store from './store'
  import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';
  export default {
    name: 'App',
    store,
    computed:{
      count(){
        return this.$store.state.count;
      },
      ...mapGetters([
        'singer'
      ])
    },
    mounted:function(){
      console.log(this.$store,'====$store');
      console.log(this.singer)
    },
    methods:{
      putReduce2(){
        this.putReduce();
//       方法1  this.$store.dispatch('putReduce')
      },
      ...mapActions(['putReduce']
         // 方法2   将 `this.putReduce()` 映射为 `this.$store.dispatch('putReduce')`
      ),
      putAdd(){
          this.setAdd();
      },
      ...mapMutations({
        setAdd:'SET_ADD'
      })
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
