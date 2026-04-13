const db = firebase.firestore();

// Announcements
db.collection("announcements").onSnapshot(snapshot => {
  let html = "";
  snapshot.forEach(doc => {
    html += `<li>${doc.data().text}</li>`;
  });
  document.getElementById("announcements").innerHTML = html;
});

// Notes
db.collection("notes").onSnapshot(snapshot => {
  let html = "";
  snapshot.forEach(doc => {
    html += `<li><a href="${doc.data().url}" target="_blank">Download PDF</a></li>`;
  });
  document.getElementById("notes").innerHTML = html;
});

// Timetable
db.collection("timetable").onSnapshot(snapshot => {
  let html = "";
  snapshot.forEach(doc => {
    html += `<li>${doc.data().text}</li>`;
  });
  document.getElementById("timetable").innerHTML = html;
});
