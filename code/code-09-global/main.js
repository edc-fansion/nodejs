// console.log("正在执行的脚本文件,包含绝对路径", __filename);
// console.log("正在执行的目录我呢见", __dirname);
// function printHello() {
//   console.log("Hello, World!");
// }
// // 两秒后执行以上函数
// var timer = setTimeout(printHello, 2000);
// clearTimeout(timer);
// console.log("输出查看定时器", timer);
// process.on("exit", function (code) {
//   // 以下代码永远不会执行
//   setTimeout(function () {
//     console.log("该代码不会执行");
//   }, 0);
//
//   console.log("退出码为:", code);
// });
// console.log("程序执行结束");
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function (val, index, array) {
  console.log(index + ": " + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);
