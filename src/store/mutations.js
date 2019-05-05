import {SET_SINGER,SET_ADD,SET_REDUCE,SET_ODD} from './mutation-types.js';
const mutations ={
  [SET_SINGER](state,singer){
    state.singer = singer;
  },
  [SET_ADD](state){
    state.count++;
  },
  [SET_REDUCE](state){
    state.count--;
  },
  [SET_ODD](state){
    if(state.count%2==0){
      state.count++
    }
  }
}
export default mutations
