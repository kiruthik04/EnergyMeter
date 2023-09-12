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

    //elements added