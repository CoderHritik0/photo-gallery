function checkPass() {
  const inPass = document.getElementById("guestPass").value;
  if (inPass === "setPass") {
    console.log("redirect to home");
    document.getElementById("invalid-pass").style.display = "none";
  } else {
    document.getElementById("invalid-pass").style.display = "block";
  }
}
