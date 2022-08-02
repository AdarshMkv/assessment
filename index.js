function toggleText(){
var x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


$("#submitForm").click(function() {
    alert("The Order has been Submitted.");
 });

 function orderNow(element){
  console.log(element.id)
  var url = "page2.html?name=" + encodeURIComponent(element.id);
  console.log(url);
  window.location.href = url;

}