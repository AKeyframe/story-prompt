const fs = require('fs');

export function cli(args) {
    fs.readFile(__dirname +'/../../mad-lib/data.json', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        data = JSON.parse(data);

        if(data.madlib === 0){
            console.log(' ');
            console.log('The stats are currently empty. Come back after running the mad-lib application a few times');
            console.log(' ');
            return;
        }
        
        console.log(' ');
        console.log(`The mad-lib app has been run ${data.madlib} times.`);
        
        console.log(' ');
        console.log(`The first set of madlib inputs were: ${data.numbers.first}, ${data.units.first}, ${data.places.first}, ${data.adjs.first}, and ${data.nouns.first}`);

        console.log(`The last set of madlib inputs were: ${data.numbers.last}, ${data.units.last}, ${data.places.last}, ${data.adjs.last}, and ${data.nouns.last}`);
        
        console.log(' ');
        console.log(`The smallest number used was ${data.numbers.min}`);
        console.log(`The largest number used was ${data.numbers.max}`);
        console.log(`The total of every number input is ${data.numbers.total}`);

        console.log(' ');
        console.log(`Currently the most used number is ${data.numbers.most}`);
        console.log(`Currently the most used unit of measurement is ${data.units.most}`)
        console.log(`Currently the most used place is ${data.places.most}`);
        console.log(`Currently the most used adjective is ${data.adjs.most}`);
        console.log(`Currently the most used noun is ${data.nouns.most}`);
        console.log(' ');
    });
}