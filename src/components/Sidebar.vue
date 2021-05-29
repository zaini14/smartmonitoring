<template>
	<div
	class="sidebar">
		<div
		class="myAvatar">
			<img 
			:src="require('@/assets/img/avatar.jpg')" 
			alt="Avatar"
			class="avatar">
			<p
			class="avatarName">Jason</p>
			<p
			class="avatarRole">Admin</p>
		</div>
		<ul
		class="sidebarMenu">
			<li
			class="sidebarItem">
				<i class="el-icon-house"></i>
		    	<span>Dashboard</span>
			</li>
			<li
			class="sidebarItemTitle">
		    	<span>Monitoring</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-view"></i>
		    	<span slot="title">Event Monitoring</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-odometer"></i>
		    	<span slot="title">List Keseluruhan Monitor</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-data-line"></i>
		    	<span slot="title">Grafik Keseluruhan Monitor</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-document"></i>
		    	<span slot="title">List Satuan Monitor</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-pie-chart"></i>
		    	<span slot="title">Grafik Satuan Monitor</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-refresh-left"></i>
		    	<span slot="title">History Akses & Perawatan</span>
			</li>
			<li
			class="sidebarItemTitle">
		    	<span>Master</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-s-grid"></i>
		      	<span slot="title">Inisialisasi</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-user"></i>
          		<span slot="title">User</span>
			</li>
			<li
			class="sidebarItemTitle">
		    	<span>Others</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-refresh-left"></i>
          		<span slot="title">Log Akses</span>
			</li>
			<li
			class="sidebarItem">
				<i class="el-icon-setting"></i>
          		<span slot="title">Setting</span>
			</li>


		</ul>
	</div>
</template>

<script>
export default {

  name: 'Sidebar',

  data () {
    return {
    	
    }
  },
}
</script>

<style lang="css" scoped>
/*.el-menu-vertical-demo {
  	height: 100vh;
  	background-color: #797fE6;
  	border: none;
}
i {
	color: white;
}
.menuNotCollapse {
	display: flex;
	align-items: center;
	padding: 1rem 5rem;
}*/
</style>