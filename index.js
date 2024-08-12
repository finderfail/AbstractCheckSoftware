const os = require('node:os');
// import request from 'request';
const request = require('request');
require('dotenv').config()

let arch = os.arch()
let mem = os.totalmem()
let hostname = os.hostname()
let platform = os.platform()
// chalk.level = 1;
// console.log(arch, cpu, hostname);

async function main() {
    //yeah yeah functions in js dont hate.
    console.log("Hello", hostname);
    console.log(("Welcome to Abstract Compability Check programm"));
    // console.log("Its been rewriting 3 times!");
    await delay(1000);
    console.log("Please wait programm will be check your pc");
    await delay(2500);
    if (arch == "x64") {
        console.log("You have need cpu arch:", (arch));
        await delay(1500);
        oscheck()
    } else if (arch == "arm64") {
        console.log("You have need cpu arch:", (arch));
        await delay(500);
        oscheck()
    } else {
        console.log("Your cpu arch is deprecated", (arch), "or Abstract not created mod version for you!");
    }   
}

async function oscheck() {
    if (platform == "win32") { //32 is not cpu bits
        console.log("Your system is compatible:", (platform));
        await delay(1500);
        memcheck()
    } else if (platform == "darwin") { //yeah darwin support in Abstract
        console.log("Your system is partially compatible:", (platform));
        await delay(500);
        memcheck()
    } else {
        console.log("Your system is not compatible:", (platform));
    }
}

function memcheck() {
   // console.log(mem);
    if (mem >= 4000000000) {
        let memO = mem/1024/1024/1024;
        console.log("You have enough RAM:", (memO), "GB");
        work_abs() 
    } else {
        console.log(("You dont have enough ram memory"))
    }
}

async function work_abs() {
    await delay(2000);
    if (platform == "win32") {
        request("http://142.93.34.245:2082/abstract/win32",
            (err, response, body) => {
                return console.log(body);
                
            }
        );
        await delay(15000);
    } else if (platform == "darwin") {
        request("http://142.93.34.245:2082/abstract/darwin",
            (err, response, body) => {
                return console.log(body);
                
            }
        );     
        await delay(15000);
    } else {
        console.log(("Why are you here?"));
        await delay(15000);
    }

}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
    // the most easy and based delay btw
} 


main()