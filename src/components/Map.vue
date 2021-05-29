<template>
	<div
  class="drawArea">
    <div
    class="title">
      <p
      class="titleCountry">Indonesia</p>
      <p>Pembagian Regional Google Map</p>
    </div>
		<GmapMap
		  :center="countryCoordinates"
		  :zoom="5"
		  map-type-id="terrain"
		  class="drawMap"
		  ref="mapRef"
      :options="{scrollwheel: false}"
		>
		  <GmapMarker
		    :key="index"
		    v-for="(m, index) in markers"
		    :position="m.position"
		    :clickable="true"
		    @click="center=m.position"
		  />
		</GmapMap>

	</div>
</template>

<script>
export default {

  name: 'Map',

  data () {
    return {
    	map: null,
    	myCoordinates: {
    		lat: 0,
    		lng: 0
    	},
    	countryCoordinates: {
    		lat: -2.2093,
    		lng: 118.6634
    	},
    	markers: [],
    	positions: { lat: -6.7534848, lng: 107.4429952}
    	
    }
  },

  created() {
  	this.$getLocation({})
  	.then(coordinates => {
  		this.myCoordinates = coordinates
  	})
  	.catch(error => alert('error'))
  },
  mounted() {
  	this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  	this.markers= [
		{
			position: this.positions
		}
	]
  },
  computed: {
  	mapCoordinates() {
  		if (!this.map) {
  			return {
  				lat: 0,
  				lng: 0,
  			}
  		}
  		return {
  			lat: this.map.getCenter().lat().toFixed(4),
  			lng: this.map.getCenter().lng().toFixed(4)
  		}
  	}
  }

}
</script>

<style lang="css" scoped>
</style>