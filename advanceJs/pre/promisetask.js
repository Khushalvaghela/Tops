let PROMISE = new Promise((resolve, reject) => {
  //   throw new Error("-------no is not find------");
  if (true) {
    resolve({ name: "Khushal" });
  } else {
    reject("Error");
  }
});
PROMISE.then((name) => {
  return { ...name, city: "surat" };
})
  .then((city) => {
    return { ...city, age: "23" };
  })
  .then((age) => {
    console.log("age--->", age);
  })
  .catch((err) => {
    console.log("Error--->", err);
  });
