const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.appendFile("message.txt", "\nAppended data", (err) => {
    if (err) throw err;
    console.log("The file has been updated!");
})

fs.readFile("./message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("data from file is: " + data);
})

