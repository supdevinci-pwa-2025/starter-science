function addParticipant() {
  const name = document.getElementById("participantName").value.trim();
  const activity = document.getElementById("activityType").value;

  if (name === "") {
    alert("Entrez un nom !");
    return;
  }

  const list = document.getElementById("participantList");

  const div = document.createElement("div");
  div.className = "participant";

  div.innerHTML = `
    <span>${name} – ${activity}</span>
    <span>✔️</span>
  `;

  list.appendChild(div);

  document.getElementById("participantName").value = "";
}
