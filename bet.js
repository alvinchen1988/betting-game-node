var prompt = require('prompt-sync')();

var game = {

  begin: true,
  initial_amount: 100,
  bet: function (){
    var random_number = Math.floor((Math.random() * 10) + 1);
    var user_bet_amount = prompt("place your bet ", "10");
    user_bet_amount = Number(user_bet_amount);
    var user_bet_number = prompt("guess a number between 1-10 ");
    user_bet_number = Number(user_bet_number)

    if (user_bet_number == random_number){
      this.initial_amount += user_bet_amount;
      console.log("You guess it right! You have earned " + user_bet_amount + "bucks. Total is " + this.initial_amount + "bucks!" )
    }
    else if(user_bet_number == random_number + 1 || user_bet_number == random_number - 1){
      this.initial_amount += 0;
      console.log("That was close! you did not earn or lose any money. Total is " + this.initial_amount + "bucks.")
    }
    else{
      this.initial_amount -= user_bet_amount
      if (this.initial_amount < 0) {
        this.initial_amount = 0
      }
      console.log("wrong! you lost " + user_bet_amount + "bucks. Total is " + this.initial_amount + "bucks.")
      if (this.initial_amount == 0){
        console.log("Game over!")
      }
    }

    return this.initial_amount;
  }

}

while(game.begin){
  var result = game.bet();
  if (result <=0){
    game.begin = false;
  }
};