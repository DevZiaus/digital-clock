# 🕒 Digital Clock

A simple and elegant **digital clock** built with **HTML, CSS, and JavaScript**.
It displays the **current time** in a 12-hour format (with AM/PM) and automatically updates the **date** at midnight.

---

## 🌟 Features

-   Real-time digital clock (updates every second)
-   Displays date with weekday, month, and year
-   Automatically switches to the next date at **12:00:00 AM**
-   Clean and minimal design using **monospace font**
-   Fully responsive and lightweight (no libraries used)

---

## 🧠 How It Works

-   The `updateClock()` function updates the time every second using `setInterval()`.
-   When the time reaches **midnight (12:00:00 AM)**, the date is refreshed automatically.
-   The `updateDate()` function formats the date using `toLocaleDateString()` with options for weekday, month, and year.

---

## 🧩 Project Structure

```

📁 digital-clock/
├── index.html      # Main HTML file
├── styles.css      # Styling for clock and date
└── app.js          # JavaScript logic for time & date

```

---

## 🚀 Getting Started

1. **Clone this repository**
    ```bash
    git clone https://github.com/your-username/digital-clock.git
    ```

````

2. **Navigate to the project folder**

   ```bash
   cd digital-clock
````

3. **Open `index.html` in your browser**
   You’ll see a live digital clock with the current date.

---

## 🖼️ Demo

[See Demo](https://https://devziaus-digital-clock.netlify.app/)

---

## 🧑‍💻 Technologies Used

-   **HTML5**
-   **CSS3**
-   **JavaScript (Vanilla JS)**

---

## 💡 Author

**Md Ziaus Samad**
🔗 [GitHub Profile](https://github.com/DevZiaus)

---

> ⏰ _“Time is what we want most, but what we use worst.” – William Penn_
