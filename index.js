const loadComponent = (id, filename) => {
  let xhttp;
  let element = document.getElementsByClassName(id);
  let file = filename;

  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          element.innerhtml = this.responseText;
        }
        if (this.status === 404) {
          element.innerhtml = "<h1>Page not Found</h1>";
        }
      }
    };

    xhttp.open("GET", `components/${file}`, true);
    xhttp.send();
    return;
  }
};
