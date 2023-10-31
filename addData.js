import inquirer from 'inquirer';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import queryDB from './queryDB.js';
import { type } from 'os';

export async function addData(info){
    try{
        
        const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What's your name?"
            },
            {
                type: 'number',
                name: "phone",
                message: "What's your phone number?"
            },
            {
                type: "list",
                name: "Age",
                message: "Are you an adult?",
                choices: [
                    {name: "Y", value: "Adult"},
                    {name: "N", value: "Minor"}
                ]
            }
        ])
        .then((answers) => {
            const data = {
                id: uuidv4(),
                name: answers.name,
                phone_number: answers.phone,
                age: answers.Age
            }
            info.push(data);
            console.log("Your answers", data)

            if(fs.existsSync("db.json")){
                createDetails(info);
            }else{
                fs.appendFile("db.json", "[]", (err) => {
                    if(err){
                        console.log("Can't write to file", err)
                        return
                    }
                    createDetails(info);
                })
            }
        })
 
       

    }catch(error){
        console.log("Couldn't add data!", error)
    }
}   

async function createDetails(info){
    await fs.writeFile("db.json", JSON.stringify(info), (err) => {
        if(err){
            console.log(err)
        }
        console.log("saved!")
    })
}

queryDB(addData)