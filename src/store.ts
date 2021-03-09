import { createStore } from 'vuex'

interface UserProps { 
  name?: string;
  isLogin: boolean;
  number?: number;
}
export interface GloabalDataProps {
  user: UserProps;
}
const store = createStore<GloabalDataProps>({
  state:{
    user: { isLogin: true }
  },
  mutations: {

    // 修改状态函数
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'Daniel'}
    }
  }
})


export default store