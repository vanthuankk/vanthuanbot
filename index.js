const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk1 = require('chalk');
const chalk = require('chalkercli');
var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100"]; 
    var random = 
job[Math.floor(Math.random() * job.length)]      
var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
});
app.listen(3000, function () {
  console.log(chalk1.hex("#" + random)(`[ Bắt đầu ] → Máy chủ đang khởi động...`), "");
});  
function startBot(message) {
    (message) ? logger(message, "[ Bắt đầu khởi động Kizz-Kinn Project]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });
    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Tiến hành khởi động lại kizz-kinn-project...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("Đã xảy ra lỗi: " + JSON.stringify(error), "[ Bắt đầu ...]");
    });
};
axios.get("https://raw.githubusercontent.com/HieuSimpRin/Mirai-Bot/main/package.json").then((res) => {
  const rainbow = chalk.rainbow(`\n████████╗░█████╗░░█████╗░███╗░░██╗
╚══██╔══╝██╔══██╗██╔══██╗████╗░██║
░░░██║░░░██║░░██║███████║██╔██╗██║
░░░██║░░░██║░░██║██╔══██║██║╚████║
░░░██║░░░╚█████╔╝██║░░██║██║░╚███║
░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝ \n*
*                                        *
*   → Disme Project                      *
*   → Phiên bản: 1.2.15                  *
*   → Biệt danh:  Trọng -03/2/2008            *
*   → FB: Nguyễn Trọng              *
*   → SĐT/Zalo: 0964529207               *
*   → Email: ngaycuoiminh1@gmailcom    *
*                                  * Chúc bạn khởi động bot thành công
*             

           👉  𝗞𝗶𝘇𝘇😻𝗞𝗶𝗻𝗻  👈                     *



          [🌸] 𝗞𝗶𝘇𝘇-𝗞𝗶𝗻𝗻 [🌸]
◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆\n`).stop();
rainbow.render();
const frame = rainbow.frame();
console.log(frame);
});
startBot();
