import fs from 'fs';
import dbFileCheck from './dbFileCheck';

export default async function updateData(newInput){

    fs.readFile('./test.json', (err, data) => {
        dbFileCheck();
        if (err) console.log(err)

        let dataInfo = JSON.parse(data);
        dataInfo.map((answer) => {
            if(answer.id === newInput.id){
                dataInfo.push(newInput)
            }
        });
        
        fs.writeFile('./test.json', JSON.stringify(dataInfo), (err) => console.log(err))
    })
}
