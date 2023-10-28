import fs from 'fs';


fs.readFile("db.json", function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})