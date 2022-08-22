// const buf = Buffer.from("runoob", "ascii");
// console.log("输出查看", buf);
//
// temp = Buffer.alloc(256);
// len = temp.write("www.runoob.com");
//
// console.log("写入字节数 : " + len);
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === "Buffer" ? Buffer.from(value.data) : value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);
