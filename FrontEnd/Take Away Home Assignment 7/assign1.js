function properties(object) {
  // var ans = ""
  // for (property of Object.keys(object)){
  //     ans += property + ',';
  //  }
  // return ans;
  return Object.keys(object).join();
}
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
function remove_property(object) {
  if (!object.rollno) return object;
  console.log("Roll No = " + object.rollno);
  delete object.rollno;
  console.log("Roll No = " + object.rollno);
  return object;
}

function object_length(object) {
  len = 0;
  for (key of Object.keys(object)) {
    len++;
  }
  return len;
}
console.log(object_length(student));
console.log(remove_property(student));
console.log(properties(student));
