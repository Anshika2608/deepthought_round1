const express = require('express');
const cors = require('cors');
//const fetch = require('node-fetch');
const https = require('https');
const app = express();
const PORT = 3000;
const agent = new https.Agent({
    rejectUnauthorized: false,
});
app.use(cors());

app.get('/fetch-data', async (req, res) => {
    try {
        const response = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
