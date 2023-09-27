function updateDateTime() {
    const currentDate = new Date();
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString(undefined, options);
    timeElement.textContent = currentDate.toLocaleTimeString();
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    var firebaseConfig = {
        apiKey: "AIzaSyAoWfqArgFdGSkcK0sH-SIe2PRr7ciTpWc",
        authDomain: "ev-charging-station-caada.firebaseapp.com",
        projectId: "ev-charging-station-caada",
        storageBucket: "ev-charging-station-caada.appspot.com",
        messagingSenderId: "72126582235",
        appId: "1:72126582235:web:fd55b758ac4e1d80456bfe"
      };
      firebase.initializeApp(firebaseConfig);
    //elements added