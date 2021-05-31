<template>
	<div
	class="navbar">
		<div
		class="logo">
			<div
			class="logoHamburger"
			@click="navCollapse">
				<svg viewBox="0 0 100 80" width="35" height="40" fill="#a7bbc7">
				  <rect width="100" height="20" rx="10"></rect>
				  <rect y="30" width="80" height="20" rx="10"></rect>
				  <rect y="60" width="100" height="20" rx="10"></rect>
				</svg>
			</div>
			<div>
				<img 
				:src="require('@/assets/img/logo.png')" 
				alt="">
			</div>
		</div>
		<div
		class="navbarSearch">
			<input 
			type="text" 
			name="search" 
			placeholder="Search...">
			<i
			class="el-icon-search"></i>
		</div>
		<div
		class="navbarLog">
			<div>
				<i 
				class="el-icon-bell"></i>
				<i 
				class="el-icon-switch-button"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Navbar',

  data () {
    return {

    }
  },
  methods: {
  	navCollapse() {
  		this.$emit('navCollapse')
  	}
  }
}
</script>

<style lang="css" scoped>
</style>