Vue.component('puppy', {
  props: ["puppy_name", "index"],
  computed: { 
    puppy_url(){
      return 'http://www.placepuppy.net/' + (this.index+1) + 'p/400/250';
    }
  },
  template: `
<div class="puppy-name">
        <h2>Hello, I'm {{puppy_name}}</h2>
        <img v-bind:src="puppy_url" alt="puppy picture" />
        </br>
</div>
  `
})

var vm = new Vue({
  el: '#vue-app',
  data: {
    greeting: "Hello VUE!",
	names: ['Lucy', 'Rocky', 'Daisy', 'Buddy', 'Lola', 'Luna', 'Bear', 'Duke', 'Sophie', 'Tucker']
  }
})