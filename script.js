
class ClockThing {
    constructor() {
        this.clock = document.getElementById("clock");
        this.date = document.getElementById("date");
        this.year = document.getElementById("year");
        this.weekDay = document.getElementById("weekDay");
        this.clockBox = document.getElementById("clockBox");

        this.bgBtn = document.getElementById("bgBtn");
        this.textBtn = document.getElementById("textBtn");
        this.sizeBtn = document.getElementById("sizeBtn");
        this.fontBtn = document.getElementById("fontBtn");
        this.borderBtn = document.getElementById("borderBtn");
        this.secBtn = document.getElementById("secBtn");

        this.showSec = true;
        this.big = true;
        this.dark = true;
        this.whiteText = true;
        this.borderOn = true;
        this.fontNr = 0;

        this.fontList = ["Arial", "Georgia", "Courier New"];
        this.days = [
            "Pühapäev",
            "Esmaspäev",
            "Teisipäev",
            "Kolmapäev",
            "Neljapäev",
            "Reede",
            "Laupäev"
        ];
    }

    start() {
        this.showTime();
        setInterval(() => {
            this.showTime();
        }, 1000);

        this.bgBtn.addEventListener("click", () => {
            this.changeBg();
        });

        this.textBtn.addEventListener("click", () => {
            this.changeText();
        });

        this.sizeBtn.addEventListener("click", () => {
            this.changeSize();
        });

        this.fontBtn.addEventListener("click", () => {
            this.changeFont();
        });

        this.borderBtn.addEventListener("click", () => {
            this.changeBorder();
        });

        this.secBtn.addEventListener("click", () => {
            this.changeSeconds();
        });
    }

    showTime() {
        let now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let day = now.getDate();
        let month = now.getMonth() + 1;
        let fullYear = now.getFullYear();
        let weekDayName = this.days[now.getDay()];

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }

        if (this.showSec == true) {
            this.clock.textContent = hours + ":" + minutes + ":" + seconds;
        } else {
            this.clock.textContent = hours + ":" + minutes;
        }

        this.date.textContent = day + "." + month + "." + fullYear;
        this.year.textContent = fullYear;
        this.weekDay.textContent = weekDayName;
    }

    changeBg() {
        if (this.dark == true) {
            document.body.style.backgroundColor = "#dbeafe";
            this.clockBox.style.backgroundColor = "#93c5fd";
            this.dark = false;
        } else {
            document.body.style.backgroundColor = "#1f1f1f";
            this.clockBox.style.backgroundColor = "transparent";
            this.dark = true;
        }
    }

    changeText() {
        if (this.whiteText == true) {
            this.clockBox.style.color = "yellow";
            this.whiteText = false;
        } else {
            this.clockBox.style.color = "white";
            this.whiteText = true;
        }
    }

    changeSize() {
        if (this.big == true) {
            this.clock.style.fontSize = "60px";
            this.big = false;
        } else {
            this.clock.style.fontSize = "80px";
            this.big = true;
        }
    }

    changeFont() {
        this.fontNr = this.fontNr + 1;

        if (this.fontNr >= this.fontList.length) {
            this.fontNr = 0;
        }

        this.clockBox.style.fontFamily = this.fontList[this.fontNr];
    }

    changeBorder() {
        if (this.borderOn == true) {
            this.clockBox.style.border = "none";
            this.borderOn = false;
        } else {
            this.clockBox.style.border = "3px solid white";
            this.borderOn = true;
        }
    }

    changeSeconds() {
        if (this.showSec == true) {
            this.showSec = false;
        } else {
            this.showSec = true;
        }

        this.showTime();
    }
}

let myClock = new ClockThing();
myClock.start();