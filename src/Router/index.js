import { createRouter, createWebHashHistory } from 'vue-router';
import ProcessManagementPage from '@/Pages/process/Index.vue'; 
import WebDevelopmentPage from '@/Pages/webdev/Index.vue';
import FundamentalsProgrammingPage from '@/Pages/fundprog/Index.vue';
import LandingPage from '@/Pages/LandingPage.vue';
import Header from '@/Components/Header.vue';
import HeaderX from '@/Components/HeaderX.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/process',
    name: 'ProcessManagement',
    component: ProcessManagementPage
  },
  {
    path: '/webdev',
    name: 'WebDevelopment',
    component: WebDevelopmentPage
  },
  {
    path: '/fundprog',
    name: 'FundamentalsProgramming',
    component: FundamentalsProgrammingPage
  }
];

const router = createRouter({
  history: createWebHashHistory('/ABCDevz/'),
  routes
});

export default router;