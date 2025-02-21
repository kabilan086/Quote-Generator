<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="quote-box">
        <h2>Random Quote Generator</h2>
            <p id="quote">Click the button to get a quote!</p>
            <p id="author"></p>
            <button onclick="generateQuote()">New Quote</button>
        
    </div>
<script>
    const quotes = [
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" }
];

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = `"${quotes[randomIndex].text}"`;
    document.getElementById("author").innerText = `- ${quotes[randomIndex].author}`;
    
}
</script>

</body>
</html>
