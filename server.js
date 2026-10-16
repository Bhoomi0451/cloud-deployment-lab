
const express = require("express");

const app = express();
const PORT = 3000;
const APP_VERSION = "1.0.0";

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cloud Deployment Lab</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                    background: #f0f4f8;
                }
                .card {
                    background: white;
                    padding: 30px;
                    margin: auto;
                    max-width: 500px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px #ccc;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Welcome to My Cloud Application!</h1>
                <h2>Name: Bhoomi Tiwari</h2>
                <p>Application Version: ${APP_VERSION}</p>
                <p>Deployed using Docker and AWS EC2.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
