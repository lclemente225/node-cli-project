import fs from 'fs';
import queryDB from './queryDB.js';

/* function retrieveData(){
    
    try{
        return fs.readFile('./test.json', (err, data) => {
            let info = JSON.parse(data);
            if(err){
                console.log("Error in reading File", err);
            }
            //console.log(info)
            let dude = {name: "aw"};
            
            return dude
        })
    }catch(err){
        console.log("Error in reading file", err)
    }
}

console.log(retrieveData()) */

queryDB();