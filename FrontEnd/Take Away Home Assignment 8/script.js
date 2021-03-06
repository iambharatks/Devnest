/*1.
var a = 10;
function b() {
  c = 10;
}
const server = {
  serverName: "Devnest",
  getInvite: function () {
    console.log("discord.gg/" + this.serverName);
  },
};
server.getInvite();
 const newWindow = window.open();
console.log(server);
 variables with global scope becomes property of window
 function with global scope becomes method of window
console.log(window);
*/

/*2
var a = 10;
function ab(){
    var a = 20;
    console.log(a);
}
ab();

*/

/* 3
const server = {
  serverName: "Devnest",
  getInvite: function (a, b) {
    console.log(this);
    console.log(a + b);
    // console.log("discord.gg/" + this.serverName);
  },
};
// server.getInvite();

const server2 = {
  serverName: "TheDeveloperCommunity",
};

//call
server.getInvite.call(server2, 1, 2);

//apply
//for apply arguments should be passed in list
server.getInvite.apply(server2, [1, 2]);

//bind
const ab = server.getInvite.bind(server2, 1, 2);
ab();

*/

/* 4 

const server1 = {
  serverName: "Devnest",
};
const server2 = {
  serverName: "TheDevelopersCommunity",
};

function getInvite(a, b) {
  console.log(this);
  console.log(a + b);
}
getInvite.call(server1, 1, 2);
// getInvite.call(server2, 4, 2);
getInvite(server1, 1, 2);

const ab = getInvite.bind(server2, 1, 4);
ab();

getInvite.apply(server2, [1, 5]);
*/

/* 5
//! Error
console.log(a);
a = 10;
//* Correct
ab();
function ab() {
    console.log(10);
}
//! Error
ba();
const ba = () => {
    console.log(10);
};
const ba = () => {
  console.log(10);
};
ba();
var ba2 = function(){
    console.log(10);
}
*/

/* 6
var a = [1, 2, 3, 4];
var b = a;
var c = [...a];
b.push(5);
c.push(6);
console.log(a, b, c);

console.log(...a);

const getSum = (a, b) => {
  console.log(a + b);
};

const sum = (a, b, ...c) => {
  const res = c.reduce((acc, item) => {
    acc += item;
    return acc;
  }, a + b);
  //   console.log(res);
  return res;
};

console.log(sum(...a, 6, 7));

*/

/*7

const server1 = {
  serverName: "Devnest",
};
const server2 = {
  serverName: "TheDevelopersCommunity",
  serverOrigin: "Neccessity",
};

console.log({ ...server2 }, { serverName: "Bharat" });
console.log({ ...server2, serverName: "Bharat", memberCount: 4500 });

 */
