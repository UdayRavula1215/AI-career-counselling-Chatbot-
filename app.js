async function sendMessage() {
  const input = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  const res = await fetch('http://localhost:5000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
  document.getElementById("user-input").value = "";
}
