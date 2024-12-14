/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer"; // to provide feedback || askin ques || parsing input || validating answers || managing heirarchial prompts
import qr from "qr-image"; // QR Code generator.
import fs from "fs"; // file system to manage files based on the user 

inquirer
    .prompt([{
        "message":"Type your URL:",
        "name":"URL"
    }])
    .then((answers)=>{
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_im.png"));

        fs.writeFile("URL.txt",url,(err)=>{
            if(err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error)=>{
        if(error.isTtyError){
            
        }else{

        }
    });