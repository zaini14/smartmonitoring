<template>
	<div>
		<el-container>
		    <el-aside
		    class="aside"
        :class="{'active': isCollapse}">
		    	<Sidebar/>
		    </el-aside>
		<el-container>
		<el-container>
		  <el-header
		  class="header">
		  	<Navbar @navCollapse="navCollapse"/>
		  </el-header>
		      <el-main>
            <Breadcrumb :breadcrumbs="crumbs"/>
		      	<transition name="fade">
              <router-view />
            </transition>
		      </el-main>
		    </el-container>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar'
import Map from '@/components/Map.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'


export default {

  name: 'Dashboard',

  components: {
  	Navbar,
  	Sidebar,
  	Map,
    Breadcrumb
  },

  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    navCollapse() {
      this.isCollapse = !this.isCollapse
    }
  },
  computed: {
  	crumbs: function() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    }
  }
}
</script>

<style lang="css" scoped>
.el-main {
    background-color: #E9EEF3;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>