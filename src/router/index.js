import Vue from 'vue'
import VueRouter from 'vue-router'
// Component
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Login
	},
	{	
		path: '/dashboard',
		component: Dashboard,
		meta: {
	        breadCrumbs: [{
	          to: '/dashboard',            // hyperlink
	          text: 'Dashboard' // crumb text
	        }]
      	}
	},
	{
		path: '*',
		component: NotFound
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
