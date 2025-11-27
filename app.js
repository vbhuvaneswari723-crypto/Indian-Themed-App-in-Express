const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const port = 3000; app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const quotes = [
    "The future depends on what you do today.  Mahatma Gandhi",
    "Arise, awake and stop not till the goal is reached. Swami Vivekananda",
    "Education is the manifestation of perfection already in man.  Swami Vivekananda",
    "You must be the change you wish to see in the world.  Mahatma Gandhi",
    "A nation's culture resides in the hearts and in the soul of its people. Mahatma Gandhi"
];
const recipes = [
    {
        name: "Masala Dosa",
        ingredients: ["Rice", "Urad Dal", "Potatoes", "Mustard Seeds", "Spices"],
        steps: "Prepare batter, make dosa, stuff with spiced potatoes."
    },
    {
        name: "Paneer Butter Masala",
        ingredients: ["Paneer", "Butter", "Tomatoes", "Cream", "Spices"],
        steps: "Cook paneer with buttery tomato gravy and spices."
    },
    {
        name: "Chole Bhature",
        ingredients: ["Chickpeas", "Flour", "Yogurt", "Spices"],
        steps: "Cook spicy chickpeas and serve with fluffy bhature."
    }
];
const festivals = [
    {
        name: "Diwali",
        date: "October/November",
        description: "Festival of lights celebrating victory of good over evil."
    },
    {
        name: "Pongal",
        date: "January 14",
        description: "Harvest festival celebrated mainly in Tamil Nadu."
    },
    {
        name: "Holi",
        date: "March",
        description: "Festival of colors celebrating love and the arrival of spring."
    }
];
app.get("/", (req, res) => {
    res.render("solution.ejs", {
        quote: "",
        recipe: { name: "", ingredients: [], steps: "" },
        festival: { name: "", date: "", description: "" }
    });
});
 app.post("/submit", (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    const randomFestival = festivals[Math.floor(Math.random() * festivals.length)]; res.render("solution.ejs", {
        quote: randomQuote,
        recipe: randomRecipe,
        festival: randomFestival
    });
});

app.listen(3000);
