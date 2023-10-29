import inquirer from 'inquirer';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import queryDB from './queryDB.js';

export async function addData(info){
    try{
        
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "ice cream",
                message: "What is your favorite Ice Cream?"
            },
            {
                type: "number",
                name: "number",
                message: "What is your favorite number?"
            },
            {
                type: "list",
                name: "Favorite Primary Color",
                message: "Favorite Primary color?",
                choices: [
                    "red",
                    "blue",
                    "green"
                ]
            },
            {
                type: "list",
                name: "age",
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
                favorite_iceCream: answers["ice cream"],
                number: answers.number,
                primary_color: answers["Favorite Primary Color"],
                age: answers.age
            }
            info.push(data);
            console.log("Your answers", data)

        })

        if(fs.existsSync("db.json")){
            createDetails(info);
        }else{
            fs.appendFile("db.json", [], (err) => {
                if(err){
                    console.log("Can't write to file", err)
                    return
                }
                createDetails(info);
            })
        }

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