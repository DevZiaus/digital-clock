const clock = document.querySelector(".clock");

function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    if (
        now.getHours() === 0 &&
        now.getMinutes() === 0 &&
        now.getSeconds() === 0
    ) {
        updateDate();
    }
}

function updateDate() {
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    document.querySelector(".date").textContent = now.toLocaleDateString(
        undefined,
        options
    );
}

setInterval(updateClock, 1000);
updateClock();
updateDate();
