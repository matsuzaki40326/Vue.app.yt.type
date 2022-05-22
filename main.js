const app = Vue.createApp({
  data(){
    return{
      startFlg: "",
      currentQuestion: "",
      questions:[
        'apple',
        'banana',
        'chocolate',
        'donut',
        'espresso'
      ],
      typeBox: "",
      currentQuestionCounts: 0,
      questionCounts: 0
    }
  },
  computed: {
    styleObject(){
      width = 20 * this.currentQuestionCounts + "%"
      if(this.currentQuestionCounts == 5){
        color = "#03a9f4"
      }else{
        color = "orange"
      }
      return{
        'width': width,
        'background-color': color
      }
    }
  },
  methods: {
    gameStart(){
      this.startFlg = true
      this.$nextTick(function(){
        document.getElementById('typeForm').focus()
      })
    }
  },
  mounted:function() {
      this.currentQuestion = this.questions[0]
      this.questionCounts = this.questions.length
  },
  watch: {
    typeBox: function(e){
      if(e == this.currentQuestion){
        this.questions.splice(0,1)
        this.currentQuestion = this.questions[0]
        this.typeBox = ""
        this.currentQuestionCounts= this.currentQuestionCounts + 1
      }
    }
  }
})
const vm = app.mount('#app')