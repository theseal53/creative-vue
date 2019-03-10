var app = new Vue({
  el: '#app',
  data: {
    events: [{
        message: "the number of times that Gandhi has pressed the button",
        number: 0,
      },
      {
        message: "the number of times they said the word bee in the bee movie",
        number: 172,
      },
      {
        message: "the number of legs on a 5 legged cat",
        number: 5,
      },
      {
        message: "calories in a big mac",
        number: 563,
      },
      {
        message: "calories in an even bigger mac",
        number: 564,
      },
      {
        message: "the sum of the US national debt",
        number: 22000000000000,
      },
      {
        message: "42",
        number: 42,
      },
    ],
    timesClicked: 0,
    buttonName: "The Button",
  },
  computed: {
      getEvents() {
        return this.events;
      },
  },
  methods: {
    convertToMyString(item) {
      var myString = "You have pressed " + this.buttonName + " ";
      var diff = this.timesClicked - item.number;
      if (diff === 0) {
        myString += " as many times as ";
      }
      else {
        if (diff > 0) {
          myString += diff;
          myString += " more time";
          if (diff != 1) {
            myString += "s";
          }
          myString += " than ";
        } else {
          myString += Math.abs(diff);
          myString += " fewer time";
          if (diff != 1) {
            myString += "s";
          }
          myString += " than ";
        }
      }
      myString += item.message;
      return myString;
    },
    clickButton() {
      this.timesClicked++;
    },
  }
});
