<template>
	<div
	class="breadcrumbs">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item 
		  :to="{ path: '/dashboard' }"
		  class="breadcrumbsItem">
		  	<i class="el-icon-house"></i>Home
			</el-breadcrumb-item>
			<el-breadcrumb-item 
			v-for="(item, i) in breadcrumbs"
			class="breadcrumbsItem">
		 		<span>{{item.text}}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
export default {

  name: 'Breadcrumb',

  props: {
  	breadcrumbs: Array
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>