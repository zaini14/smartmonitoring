<template>
	<div
	class="login">
		<div
		class="loginLeft">
			<div>
				<img 
				:src="require('@/assets/img/human.png')" 
				alt="Human Animate"
				class="humanVector">
			</div>
			<div>
				<img 
				:src="require('@/assets/img/Cloud.png')" 
				alt="cloud Animate"
				class="cloudVector">
				<img 
				:src="require('@/assets/img/Cloud.png')" 
				alt="cloud Animate"
				class="cloudVector">
				<img 
				:src="require('@/assets/img/Cloud.png')" 
				alt="cloud Animate"
				class="cloudVector">
				<img 
				:src="require('@/assets/img/Clock.png')" 
				alt="clock Animate"
				class="clockVector">
				<img 
				:src="require('@/assets/img/Message.png')" 
				alt="Message Animate"
				class="messageVector">
				<img 
				:src="require('@/assets/img/Cards.png')" 
				alt="Cards Animate"
				class="cardsVector">
				<img 
				:src="require('@/assets/img/Calendar.png')" 
				alt="Calendar Animate"
				class="calendarVector">
			</div>
		</div>
		<div
		class="loginRight">
			<div
			class="loginBox">
				<p
				class="loginTitle">Log in</p>
				<div
				class="loginUser">
					<input 
					type="text" 
					name="username" 
					placeholder="Username">
				</div>
				<div
				class="loginPass">
					<input 
					type="password" 
					name="password" 
					placeholder="Password">
				</div>
				<div
				class="loginBtn">
					<button>Log in</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>