import fs from 'fs';

function queryDB(){
    try{
        let info = [];
        if(fs.existsSync("db.json")){
        
            fs.readFile("db.json", function(err, data){
                if(err){
                    console.log(err);
                }
                info = JSON.parse(data.toString())
                console.log(info);
            })
        }else {
            console.log("No Data Available")
        }
    }catch(error){
        console.log("Error in reading file", error)
    }
}

