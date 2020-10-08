function ajax(callback, href) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            callback(data);
        }
    };
  const URL = "https://github.com/Katerynukr/facebook" + href;
  xhttp.open("GET", URL, true);
  xhttp.send();
}

export default ajax; 