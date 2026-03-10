const DiceRoll = (request) => {
    const bonus = request.split("+");
    const dice = bonus[0].split("D");
    let result = 0;
    for(let i=0;i<dice[0];i++) result+=Math.floor(Math.random()*dice[1])+1;
    return result + (parseInt(bonus[1])||0);
};

export {DiceRoll};