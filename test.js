const network = require("./network");

num_tests = 1;

console.log("-----------------------------------------");
console.log("Network size tests");
console.log("-----------------------------------------");
let my_net = new network(5, 20, 6);
console.log("[Test ", num_tests++, "] ", ((my_net.network_size() == 31101) ? "Pass" : "Fail"));

my_net = new network(4, 10, 6);
console.log("[Test ", num_tests++, "] ", ((my_net.network_size() == 2591) ? "Pass" : "Fail"));

my_net = new network(6, 20, 6);
console.log("[Test ", num_tests++, "] ", ((my_net.network_size() == -1) ? "Pass" : "Fail"));

console.log("-----------------------------------------");
console.log("Network address tests");
console.log("-----------------------------------------");