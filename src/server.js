const app = require("./startup");

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
