function includeHTML(callback) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("include-html");
          includeHTML(callback); // Recursively include HTML files
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (callback) callback(); // Execute callback after loading all HTML
}
