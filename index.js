const os = require('node:os');

let arch = os.arch()
let mem = os.totalmem()
let hostname = os.hostname()
let platform = os.platform()
// console.log(arch, cpu, hostname);

async function main() {
    //yeah yeah functions in js dont hate.
    console.log("Hello", hostname);
    console.log("Welcome to Abstract Compability Check programm");
    console.log("Its been rewriting 3 times!");
    await delay(1000);
    console.log("Please wait programm will be check your pc");
    await delay(2500);
    if (arch == "x64") {
        console.log("You have need cpu arch:", arch);
        await delay(1500);
        oscheck()
    } else if (arch == "arm64") {
        console.log("You have need cpu arch:", arch);
        await delay(500);
        oscheck()
    } else {
        console.log("Your cpu arch is deprecated", arch, "or Abstract not created mod version for you!");
    }   
}

function oscheck() {
    if (platform == "win32") {
        console.log("Your system is compatible:", platform);
    } else if (platform == "darwin") {
        console.log("Your system is partially compatible:", platform);
    } else {
        console.log("Your system is not compatible:", platform);
    }
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
} 


main()