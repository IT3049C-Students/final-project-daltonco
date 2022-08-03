//Super Rock Paper Scissors
class SuperRockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors`, 'gun', 'water', 'air', 'sponge', 'human', 'fire' ];
    let value = Math.floor(Math.random() * 9);
    return acceptedValues[value];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. 
   * @param {string} cpuSelection computer selection. 
   */
  determineWinner(userSelection, cpuSelection){
    if(userSelection.toLowerCase() == cpuSelection){
      return "tie";
    }
    else if(
      (userSelection.toLowerCase() == "rock" && (cpuSelection == "sponge" || cpuSelection == "human" || cpuSelection == "scissors" || cpuSelection == "fire")) ||
      (userSelection.toLowerCase() == "gun" && (cpuSelection == "fire" || cpuSelection == "human" || cpuSelection == "scissors" || cpuSelection == "rock")) ||
      (userSelection.toLowerCase() == "water" && (cpuSelection == "rock" || cpuSelection == "gun" || cpuSelection == "scissors" || cpuSelection == "fire")) ||
      (userSelection.toLowerCase() == "air" && (cpuSelection == "rock" || cpuSelection == "gun" || cpuSelection == "water" || cpuSelection == "fire")) ||
      (userSelection.toLowerCase() == "paper" && (cpuSelection == "rock" || cpuSelection == "gun" || cpuSelection == "water" || cpuSelection == "air")) ||
      (userSelection.toLowerCase() == "sponge" && (cpuSelection == "gun" || cpuSelection == "water" || cpuSelection == "air" || cpuSelection == "paper")) ||
      (userSelection.toLowerCase() == "human" && (cpuSelection == "water" || cpuSelection == "air" || cpuSelection == "paper" || cpuSelection == "sponge")) ||
      (userSelection.toLowerCase() == "scissors" && (cpuSelection == "air" || cpuSelection == "paper" || cpuSelection == "sponge" || cpuSelection == "human")) ||
      (userSelection.toLowerCase() == "fire" && cpuSelection == (cpuSelection == "paper" || cpuSelection == "sponge" || cpuSelection == "human" || cpuSelection == "scissprs"))
    ){
      return "win";
    }
    else{
      return "lose";
    }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    //let userSelection = userSelection.toLowerCase();
    let cpuSelection = this.generateCPUResponse();
    if(this.determineWinner(userSelection, cpuSelection) == "win"){
      this.score.user++;
      this.gameHistoryLog.push(this.username + " selected " + userSelection + ", CPU selected " + cpuSelection + ": " + this.username + " wins!");
    }
    else if(this.determineWinner(userSelection, cpuSelection) == "lose"){
      this.score.cpu++;
      this.gameHistoryLog.push(this.username + " selected " + userSelection + ", CPU selected " + cpuSelection + ": CPU wins!");
    }
    else{
      this.gameHistoryLog.push(this.username + " selected " + userSelection + ", CPU selected " + cpuSelection + ": There was a tie!");
    }
  }
}