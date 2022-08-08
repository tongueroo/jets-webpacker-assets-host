// Add <%= javascript_pack_tag 'image_demo' %> to your layout
// Then add this markup to your html template:
//
// <div id='imagedemo'>
//   <app></app>
// </div>

import Vue from 'vue/dist/vue.esm'
import App from '../image.vue'

require.context('../../assets/images', true);
const images = require.context('../../assets/images', true);

Vue.mixin({
  methods: {
    imagePath: function (name) {
      return images(name, true);
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  console.log("here1a")
  console.log("images ", images('./minion.png'));
  console.log("here2a")

  const app = new Vue({
    el: '#imagedemo',
    components: { App }
  })
})

