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
*/

