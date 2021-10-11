var a = [];
for (let i = 0; i < 10; i++) {
    let b =1;
  a[i] = function () {
    console.log(i);
  };
}
a[6]();