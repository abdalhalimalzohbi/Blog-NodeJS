export function product(req, res) {
  //    console.log("Got a POST request for the homepage");
  console.log(req.params);

  //   console.log("");

  res.send("Hello POST");
}
export function abd(req, res) {
  console.log(req.params);
  res.send("Hello POST");
}
export function deleteF(req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send("Hello DELETE");
}
