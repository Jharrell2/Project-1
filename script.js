let count = 1;
let rounds = parseInt(prompt("How many rounds do you want to play?"));
let win = 0;
let loss = 0;
let tie = 0;

while (count<=rounds){
    player_choice = prompt("Do you pick Paper or Scissors? (Enter r, p, or s)");
    let choice = 0;
    let comp_choice_value = Math.floor(Math.random() * 2);
    if (comp_choice_value == 0){
        comp_choice = 'r';
    }
    else if (comp_choice_value == 1){
        comp_choice = 'p';
    }
    else if (comp_choice_value == 2){
        comp_choice = 's';
    }
    if (player_choice.toLowerCase() === 'r'){
        choice = 0
    }
    else if (player_choice.toLowerCase() === 'p'){
        choice = 1
    }
    else if (player_choice.toLowerCase() === 's'){
        choice = 2
    } 
    else{
        alert("Invalid choice");
    }
    if (choice == comp_choice_value){
        tie = tie+1;
        alert("It's a tie!");
    }
    else if (choice > comp_choice_value){
        win = win+1;
        alert("You win! You picked " + player_choice +", which beats "+comp_choice);
    }
    else if (choice < comp_choice_value){
        loss = loss+1;
        alert("You loss! The computer picked " + comp_choice +", which beats "+player_choice);
    }

    count++;
}
alert("You won "+win+" times, you tied "+tie+" times, you lost "+loss+" times");