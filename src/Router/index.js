// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';

// 1. Import all primary views
import LandingPageView from '@/views/LandingPageView.vue';
import DashboardView from '@/views/DashboardView.vue';
// 2. Import the SPECIFIC module pages from the 'pages' directory
import ProcessManagementPage from '@/Pages/process/index.vue'; 
import FundamentalsPage from '@/Pages/fundprog/index.vue'; // <--- NEW IMPORT
import WebDevelopmentPage from '@/Pages/webdev/index.vue'; // <--- NEW IMPORT

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPageView, 
        meta: { title: 'Programmers Hub' }
    },
    { path: '/dashboard', name: 'Dashboard', component: DashboardView, meta: { title: 'Dashboard' } },
    
    // --- FINAL EXPLICIT ROUTES ---
    
    // Route 1: Web Development (Uses the specific page)
    {
        path: '/modules/web-development',
        name: 'WebDevelopment',
        component: WebDevelopmentPage, // <--- NOW POINTS TO src/pages/webdev/index.vue
        meta: { title: 'Web Development Module' }
    },
    
    // Route 2: Process Management (Specific Page)
    {
        path: '/modules/process-management',
        name: 'ProcessManagement',
        component: ProcessManagementPage, 
        meta: { title: 'Process Management Guide' }
    },
    
    // Route 3: Fundamentals of Programming (Specific Page)
    {
        path: '/modules/fundamentals',
        name: 'Fundamentals',
        component: FundamentalsPage, 
        meta: { title: 'Fundamentals of Programming' }
    },

    // Convenience redirect: Tools -> Dashboard (prevents 404 when header links to /tools)
    {
        path: '/tools',
        redirect: { name: 'Dashboard' },
        meta: { title: 'Tools' }
    },
    
    // Catch-all 404 route (Keep this at the end)
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: { template: '<div>404 Page Not Found</div>' }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Vue Application';
    next();
});

export default router;