Vue.component('puppy', {
  props: ["puppy_name", "index"],
  methods: {
    changeImg(){
      vm.puppy_url = "http://www.placepuppy.net/" + (this.index+1) + "p/760/475";
      vm.current_puppy = this.puppy_name;
    }
  },
  template: `
      <button v-bind:id="'puppy_img' + index" v-on:click="changeImg"><h3>{{puppy_name}}</h3></button>
  `
})

var vm = new Vue({
  el: '#vue-app',
  data: {
    current_puppy: 'Lucy',
    puppy_url : "http://www.placepuppy.net/1p/760/475",
    greeting: "Hello VUE! Puppy slideshow!",
    names: ['Lucy', 'Rocky', 'Daisy', 'Buddy', 'Lola', 'Luna', 'Bear', 'Duke', 'Sophie', 'Tucker']
  },
})