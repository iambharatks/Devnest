var cylinder = {
  radius: 2,
  height: 3,
  volume: function () {
    vol = (3.1415 * this.height * this.radius * 2).toFixed(4);
    console.log(vol);
    return vol;
  },
};
var cylinder2 = Object.create(cylinder);
cylinder2.radius = 3;
cylinder2.height = 5;
cylinder.volume();
cylinder2.volume();
