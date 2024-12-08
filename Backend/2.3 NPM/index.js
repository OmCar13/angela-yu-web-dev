import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from "fs";

inquirer
    .prompt([
        {
            type: "input",
            name: "URL",
            message: "Enter your URL",
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        console.log(`Generating QR code for ${url} ...`);
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_image.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    });