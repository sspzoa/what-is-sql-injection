const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const clientQuery = req.body.query;

    if (clientQuery === "SELECT * FROM users WHERE username = 'admin'" || clientQuery === "SELECT * FROM users WHERE username = 'admin' AND password = 'N0w_y0u_kn0w_SQL_Injection';") {
        res.send("성공!\n" + "DIMI{N0w_y0u_kn0w_SQL_Injection}");
    } else if (clientQuery === "SELECT * FROM users WHERE username = 'guest'" || clientQuery === "SELECT * FROM users WHERE username = 'guest' AND password = 'guest';") {
        res.send("GUEST 로그인 성공!");
    }
    else {
        res.send("실패!");
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
