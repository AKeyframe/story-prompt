const fs = require('fs');

export function cli(args){
    
    let sd = {};
    
    //Check to see if JSON was provided
    if(!args[2]){
        console.log('Please provide valid JSON matching the template below:');
        console.log("'{");
        console.log('"NUMBER" : 1,');
        console.log('"UNIT_OF_MEASURE" : "",');
        console.log('"PLACE" : "",');
        console.log('"ADJECTIVE" : "",');
        console.log('"NOUN" : "",');
        console.log("}'");
    } else if(args.length > 3){
        console.log('Please only provide one argument as valid JSON');
        return;

    } else {
        //If valid json.
        try {
           //User Input
            const UI = JSON.parse(args[2]); 

            if(!UI.NUMBER || typeof UI.NUMBER != 'number'){ 
                    console.log('Please provide a number for NUMBER');
                    return;
    
            } else if(  !UI.UNIT_OF_MEASURE 
                        || typeof UI.UNIT_OF_MEASURE !='string' 
                        || UI.UNIT_OF_MEASURE.length > 15 
                        || UI.UNIT_OF_MEASURE === '')
            {
                console.log('Please provide a string 15 characters or lessfor UNIT_OF_MEASURE');
                return; 
    
            } else if(  !UI.PLACE 
                        || typeof UI.PLACE !='string' 
                        || UI.PLACE.length > 15 
                        || UI.PLACE === '') 
            {
                console.log('Please provide a string 15 characters or less for PLACE');
                return;
    
            } else if(  !UI.ADJECTIVE 
                        || typeof UI.ADJECTIVE !='string' 
                        || UI.ADJECTIVE.length > 15
                        || UI.ADJECTIVE === '') 
            {
                console.log('Please provide a string 15 characters or less for ADJECTIVE');
                return;
    
            } else if(  !UI.NOUN 
                        || typeof UI.NOUN != 'string' 
                        || UI.NOUN.length > 15
                        || UI.NOUN === '') 
            {
                console.log('Please provide a string 15 characters or less for NOUN');
                return;
            }
    
            console.log(`One day Anna was walking her ${UI.NUMBER} ${UI.UNIT_OF_MEASURE} commute to ${UI.PLACE} and found a ${UI.ADJECTIVE} ${UI.NOUN} on the ground.`);

             //read file
             fs.readFile(__dirname +'/../data.json', 'utf8', function (err,data) {
                 if (err) {
                   return console.log(err);
                 }

                 //Save data
                 sd=JSON.parse(data);
                 sd.madlib++; //Times this app was run
    
                 //Number Save Data modification
                 if(UI.NUMBER < sd.numbers.min) sd.numbers.min = UI.NUMBER;
                 if(UI.NUMBER > sd.numbers.max) sd.numbers.max = UI.NUMBER;
                 if(sd.numbers.first === 0) sd.numbers.first = UI.NUMBER;
                 sd.numbers.last = UI.NUMBER;

                 if(`${UI.NUMBER}` in sd.numbers.values){
                    sd.numbers.values[`${UI.NUMBER}`]++;
                 } else {
                    sd.numbers.values[`${UI.NUMBER}`] = 1;
                 }

                 sd.numbers.total+= UI.NUMBER;
                 
            
                 if(sd.numbers.values[`${UI.NUMBER}`] 
                    > sd.numbers.values[`${sd.numbers.most}`] 
                    || sd.numbers.most === ''){
                        sd.numbers.most = UI.NUMBER.toString();
                 }

                 //Unit save data modification
                 if(sd.units.first === '') sd.units.first = UI.UNIT_OF_MEASURE;
                 sd.units.last = UI.UNIT_OF_MEASURE;

                 if(`${UI.UNIT_OF_MEASURE}` in sd.units.values){
                    sd.units.values[`${UI.UNIT_OF_MEASURE}`]++;
                 } else {
                    sd.units.values[`${UI.UNIT_OF_MEASURE}`] = 1;
                 }

                 if(sd.units.values[`${UI.UNIT_OF_MEASURE}`] 
                    > sd.units.values[`${sd.units.most}`]
                    || sd.units.most === '') {
                        sd.units.most = UI.UNIT_OF_MEASURE;
                 }

                 //Place save data modification
                 if(sd.places.first === '') sd.places.first = UI.PLACE;
                 sd.places.last = UI.PLACE;

                 if(`${UI.PLACE}` in sd.places.values){
                    sd.places.values[`${UI.PLACE}`]++;
                 } else {
                    sd.places.values[`${UI.PLACE}`] = 1;
                 }

                 if(sd.places.values[`${UI.PLACE}`] 
                    > sd.places.values[`${sd.places.most}`]
                    || sd.places.most === '') {
                        sd.places.most = UI.PLACE;

                 }
                 
                 //ADJ save dat modification
                 if(sd.adjs.first === '') sd.adjs.first = UI.ADJECTIVE;
                 sd.adjs.last = UI.ADJECTIVE;

                 if(`${UI.ADJECTIVE}` in sd.adjs.values){
                    sd.adjs.values[`${UI.ADJECTIVE}`]++;
                 } else {
                    sd.adjs.values[`${UI.ADJECTIVE}`] = 1;
                 }
                
                 if(sd.adjs.values[`${UI.ADJECTIVE}`] 
                    > sd.adjs.values[`${sd.adjs.most}`]
                    || sd.adjs.most === '') {
                        sd.adjs.most = UI.ADJECTIVE;
                 }

                 //Noun save data modification
                 if(sd.nouns.first === '') sd.nouns.first = UI.NOUN;
                 sd.nouns.last = UI.NOUN;

                 if(`${UI.NOUN}` in sd.nouns.values){
                    sd.nouns.values[`${UI.NOUN}`]++;
                 } else {
                    sd.nouns.values[`${UI.NOUN}`] = 1;
                 }

                 if(sd.nouns.values[`${UI.NOUN}`] 
                    > sd.nouns.values[`${sd.nouns.most}`]
                    || sd.nouns.most === '') {
                        sd.nouns.most = UI.NOUN;
                 }

                 console.log(sd);

                 //Save the modified data
                 fs.writeFile(__dirname +'/../data.json', JSON.stringify(sd), e => {
                    if(e){
                        console.error(e)
                        return
                    }
                });
             });
        
        } catch (err){
            console.log('Please provide valid JSON matching the template below:');
            console.log("'{");
            console.log('"NUMBER" : 1,');
            console.log('"UNIT_OF_MEASURE" : "",');
            console.log('"PLACE" : "",');
            console.log('"ADJECTIVE" : "",');
            console.log('"NOUN" : "",');
            console.log("}'");
            return;
        } //Catch
    } //Else
} //CLI

//JSON Template
// '{"NUMBER" : 1, "UNIT_OF_MEASURE" : "mile", "PLACE" : "Place", "ADJECTIVE" : "Adj", "NOUN" : "Noun"}'


//Blank data template
// {"madlib":0, "numbers":{"min":0,"max":0,"total": 0, "first": 0, "last":0, "most":"","values":{}},"units":{"first":"", "last": "","most":"","values":{}},"places":{"first":"", "last":"", "most":"","values":{}},"adjs":{"first":"", "last":"", "most":"","values":{}},"nouns":{"first":"", "last": "", "most":"","values":{}}}