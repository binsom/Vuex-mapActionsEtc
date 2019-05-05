const state = {
  count:1,
  singer:{
    name:'binsom'
  }
}

export default state;

// const mutations = {
//   add(state){
//     state.count++
//   },
//   reduce(state){
//     state.count--
//   },
//   odd(state){
//     if(state.count%2==0){
//       state.count++
//     }
//   }
// }
// const actions = {
//   putAdd({commit}){
//     commit("add")
//   },
//   putReduce({commit}){
//     commit("reduce")
//   },
//   putOdd({commit}){
//     commit("odd")
//   }
// }
// const moduleA = {
//   state,mutations,actions
// }
// export default new Vuex.Store({
//   modules:{
//     a:moduleA
//   }
// })

