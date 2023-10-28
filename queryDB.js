import fs from 'fs';

let info = [];
if(fs.existsSync("db.json")){

    fs.readFile("db.json", function(err, data){
        if(err){
            console.log(err);
        }

        info = JSON.parse(data.toString())

        console.log();
    })
}else {
    console.log("No Data Available")
}