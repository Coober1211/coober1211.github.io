window.onload = function() {
  var vm = new Vue({
    el: '#content',
    data() {
      return {
        webUrl: 'https://coober1211.github.io/',
        jsImg: 'static/image/javascript30.png',
        tags: ['D3', 'Vue.js', 'Javascript30'],
        projectList: [
          {title: 'Frequency-Count', tags: ['D3.js'], url: `https://coober1211.github.io/Frequency-Count`, img: 'static/image/d3.png'},          
          {title: 'Drum-Kit', tags: ['Javascript30'], url: `https://coober1211.github.io/Drum-Kit`, img: 'static/image/javascript30.png'},
          {title: 'Clock', tags: ['Javascript30'], url: `https://coober1211.github.io/Clock`, img: 'static/image/javascript30.png'},
          {title: 'CSS-Variables', tags: ['Javascript30'], url: `https://coober1211.github.io/CSS-Variables`, img: 'static/image/javascript30.png'},
          {title: 'Flex-Panel-Gallery', tags: ['Javascript30'], url: `https://coober1211.github.io/Flex-Panel-Gallery`, img: 'static/image/javascript30.png'},
          {title: 'Type-Ahead', tags: ['Javascript30'], url: `https://coober1211.github.io/Type-Ahead`, img: 'static/image/javascript30.png'},
          {title: 'Fun-with-Canvas', tags: ['Javascript30'], url: `https://coober1211.github.io/Fun-with-Canvas`, img: 'static/image/javascript30.png'},
          {title: 'Multiple-Checkboxes', tags: ['Javascript30'], url: `https://coober1211.github.io/Multiple-Checkboxes`, img: 'static/image/javascript30.png'},
          {title: 'Custom-Video-Player', tags: ['Javascript30'], url: `https://coober1211.github.io/Custom-Video-Player`, img: 'static/image/javascript30.png'},
          {title: 'Slide-in-on-Scroll', tags: ['Javascript30'], url: `https://coober1211.github.io/Slide-in-on-Scroll`, img: 'static/image/javascript30.png'},
          {title: 'Local Storage', tags: ['Javascript30'], url: `https://coober1211.github.io/LocalStorage`, img: 'static/image/javascript30.png'},
          {title: 'Mouse-Shadow', tags: ['Javascript30'], url: `https://coober1211.github.io/Mouse-Shadow`, img: 'static/image/javascript30.png'},
          {title: 'Follow-Along-Nav', tags: ['Javascript30'], url: `https://coober1211.github.io/Follow-Along-Nav`, img: 'static/image/javascript30.png'},
          {title: 'Sticky-Nav', tags: ['Javascript30'], url: `https://coober1211.github.io/Sticky-Nav`, img: 'static/image/javascript30.png'},
          {title: 'Speech-Synthesis', tags: ['Javascript30'], url: `https://coober1211.github.io/Speech-Synthesis`, img: 'static/image/javascript30.png'},
          {title: 'Follow-Along-Navbar', tags: ['Javascript30'], url: `https://coober1211.github.io/Follow-Along-Navbar`, img: 'static/image/javascript30.png'},
          {title: 'Click-and-Drag', tags: ['Javascript30'], url: `https://coober1211.github.io/Click-and-Drag`, img: 'static/image/javascript30.png'},
          {title: 'Video-Speed-Scrubber', tags: ['Javascript30'], url: `https://coober1211.github.io/Video-Speed-Scrubber`, img: 'static/image/javascript30.png'},
          {title: 'Countdown-Timer', tags: ['Javascript30'], url: `https://coober1211.github.io/Countdown-Timer`, img: 'static/image/javascript30.png'},
          {title: 'Whack-A-Mole', tags: ['Javascript30'], url: `https://coober1211.github.io/Whack-A-Mole`, img: 'static/image/javascript30.png'},
        ]
      }
    }
  })  
}

