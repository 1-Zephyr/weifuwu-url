let create_p = document.createElement("p");
let form = document.getElementById("urlForm");
form.insertAdjacentElement("afterend", create_p);

let urlForm = document
  .getElementById("urlForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    let url = document.getElementById("urlInput").value;
    console.log(url);
    const response = await fetch("http://localhost:3000/api/shorturl1", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url }),
    });
    console.log(response);
    const data = await response.json();
    if (data) {
      console.log(111, data);
    } else {
      console.log(222, data.error);
    }

    create_p.innerHTML = `<a href="${data.originl_url}">${data.originl_url}</a>获取：http://localhost:3000/api/shorturl1?short_url=${data.short_url}`;
  });
// https://www.youtube.com
