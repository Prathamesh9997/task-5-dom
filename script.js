const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let subject = document.querySelector("#subject").value;
  document.querySelector("#subject").value = "";
  let message = document.querySelector("#message").value;
  document.querySelector("#message").value = "";
  let new_message = `Subject: ${subject} %0A Message: ${message}`;
  let token = "1694343140:AAGXHEH-SMhJ4zNzrBhZKP-aSt9VrZpGU_k";
  let chat_id = -1001339139236;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${new_message}`;
  sendMessage(url);
});

async function sendMessage(url) {
  try {
    const resp = await fetch(url);
    //const res = resp.json();
    alert("Message has been sent");
  } catch (error) {
    console.log(error);
  }
}
