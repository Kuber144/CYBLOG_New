const fetch = require("node-fetch");

const fetchData = async (req, res) => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=technology&sortBy=popularity&apiKey=c22c09c975254c75be22b69b38db0611"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
};
// fetchData();
export default fetchData;
