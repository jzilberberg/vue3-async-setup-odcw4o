import { createRouter, createWebHistory } from 'vue-router'
import AppContentView from '../views/AppContentView.vue'
import HomeView from '../views/HomeView.vue'
import ApplicationDetailView from '../views/ApplicationDetailView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import MyAsyncComponent from '../components/MyAsyncComponent.vue'
// import LoginCallbackView from "../views/LoginCallbackView.vue";
// import LoginView from "../views/LoginView.vue";
// import { navigationGuard } from "@okta/okta-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/login/callback",
    //   components: {
    //     appContent: LoginCallbackView,
    //   },
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   components: {
    //     appContent: LoginView,
    //   },
    // },

    {
      path: '/async',
      name: 'async',
      components: {
        appContent: MyAsyncComponent,
      },
    },
    {
      path: '/',
      name: 'root',
      components: {
        appContent: AppContentView,
      },
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '/',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (Home.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          // components: { mainContent: () => import('../views/HomeView.vue') },
          components: {
            mainContent: HomeView,
          },
        },
        {
          path: '/application/:id',
          name: 'Application Detail View',
          // components: {
          //   mainContent: () => import('../views/ApplicationDetailView.vue'),
          // },
          components: {
            mainContent: ApplicationDetailView,
          },
        },
        {
          path: '/user/:id',
          name: 'User Detail View',
          // components: {
          //   mainContent: () => import('../views/UserDetailView.vue'),
          // },
          components: {
            mainContent: UserDetailView,
          },
        },
      ],
    },
  ],
})

// Due to navigation guards mixin issue in vue-router-next, navigation guard logic need to be added manually
// router.beforeEach(navigationGuard);

export default router
