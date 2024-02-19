import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue"
import Releases from './views/Releases.vue'
import CreatureCrawlerProject from './views/CreatureCrawlerProject.vue'

const routes =
[
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Devlog/:id',
    name: 'devlog-id',
    component: Home
  },
  {
    path: '/Devlog',
    name: 'devlog-list',
    component: Home
  },
  {
    path: '/Releases',
    name: 'release-list',
    component: Releases
  },
  {
    path: '/Projects',
    name: 'project-list',
    component: Releases
  },
  {
    path: '/Projects/CreatureCrawler',
    name: 'creature-crawler',
    component: CreatureCrawlerProject
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
