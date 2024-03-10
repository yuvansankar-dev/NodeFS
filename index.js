import { format } from "date-fns";
import express from "express";
import fs from "fs";
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App listening to the port ${PORT}`);
});

let path;

app.get("/write-file", (req, res) => {
  const data = format(new Date(), "dd-mm-yyyy hh-mm-ss");
  path = "TimeStamp/" + data + ".txt";
  fs.writeFileSync(path, data, "utf8");
  res.send("File Created Successfully");
});

app.get("/read-file", (req, res) => {
  const data = fs.readFileSync(path, "utf8");
  res.send(data);
});
