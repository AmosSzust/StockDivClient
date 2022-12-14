import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/mainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/login.vue') },
      {
        path: '/overview',
        component: () => import('pages/overview.vue'),
      },
      {
        path: '/ticker/:ticker',
        component: () => import('pages/tickerPage.vue'),
      },
      {
        path: '/yearlyPaymentMatrix',
        component: () => import('src/pages/YearlyPaymentMatrix.vue'),
      },
      {
        path: '/monthlyDividendsView/:month',
        component: () => import('src/pages/MonthlyDividendsView.vue'),
      },
      {
        path: '/dividendAlerts',
        component: () => import('src/pages/DividendAlerts.vue'),
      },
      {
        path: '/announcements',
        component: () => import('src/pages/Announcements.vue'),
      },
      {
        path: '/portfolio',
        component: () => import('src/pages/Portfolio.vue'),
      },
      {
        path: '/screener',
        component: () => import('src/pages/Screener.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
