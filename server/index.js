import express from 'express';
import cors from 'cors';
import endangeredSpecies from "./routes/endangeredSpecies.js"

const app = express();
const PORT = 8080;

app.use(cors());
app.use('/species', endangeredSpecies);

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
