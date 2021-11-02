const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name: ', (name) => {
  rl.question('What is your favourite activity: ', (activity) => {
    rl.question('What is your favourite genre of music: ', (music) => {
      rl.question('What is your favourite meal: ', (meal) => {  
        rl.question('What is your favourite food:  ', (food) => {   
          rl.question('What is your favourite sport: ', (sport) => {
            rl.question('What is your super power: ', (superpower) => {
              console.log(`Hi my name is ${name}. I love to do ${activity} while listening to ${music} music. My favourite meal is ${meal} and the best food for that is ${food}. I am a huge fan of ${sport} and my superpower is ${superpower}`)
              rl.close();
            });
          });
        });
      });
    });
  });
});

