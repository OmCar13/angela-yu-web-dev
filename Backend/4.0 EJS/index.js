import express from "express";

const app = express();
const port = 3000;

const DAYS_IN_WEEK = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    // console.log(day);

    let type = "a weekday";
    let adv = "it's time to work hard !";

    const what_day = DAYS_IN_WEEK[day];

    if (day === 0 ||  day === 6) {
        type = "a weekend";
        adv = "it's time to have fun !";
    }

    res.render("index.ejs", {
        todays_day: what_day,
        dayType: type,
        advice: adv,
    });
});