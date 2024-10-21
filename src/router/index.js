import { createRouter, createWebHistory } from 'vue-router'
import LoginContainer from '../components/LoginContainer.vue'
import RegisterContainer from '../components/RegisterContainer.vue'
import MainMenu from '../components/MainMenu.vue'
import RankingContainer from '../components/RankingContainer.vue'
import ParesGame from '../components/ParesGame.vue'


const routes = [
  {path: '/login', name: 'LoginContainer', component: LoginContainer},
  {path : '/register', name: 'RegisterContainer', component: RegisterContainer},
  {path: '/main', name: 'MainMenu', component: MainMenu},
  {path: '/ranking', name: 'RankingContainer', component: RankingContainer},
  {path: '/pares', name: 'ParesGame', component: ParesGame},

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router