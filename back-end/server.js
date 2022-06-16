import express from "express";
import cors from "cors";
import "dotenv/config";

import connectToMongoose from "./util/mongoose_connect.js";
import todoRouter from "./routes/todoRoute.js";
import indexRouter from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false })); // use querysting library
app.use(express.json());

app.use(indexRouter);


app.use("/todo", todoRouter);

if (await connectToMongoose()) {
	app.listen(PORT, (err) => {
		if (err) console.error(err);
		console.log(`listening to Port ${PORT}`);
	});
}