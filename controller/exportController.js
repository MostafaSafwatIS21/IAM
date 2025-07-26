import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { log } from "console";
import AppError from "../utils/AppError.js";
import fastCSV from "fast-csv";

// simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exportPath = path.join(__dirname, "../export.csv");

export const exportCSV = async (req, res, next) => {
  try {
    const dataJson = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../utils/data/data.json"), "utf-8")
    );

    const ws = fs.createWriteStream(exportPath);

    ws.on("close", () => {
      log("CSV file has been fully written and closed.");
      res.download(exportPath, (err) => {
        if (err) {
          log("Error downloading CSV:", err);
          return next(new AppError("Download failed", 500));
        }
      });
    });

    fastCSV.write(dataJson, { headers: true }).pipe(ws);
  } catch (error) {
    log("Error in exportCSV controller:", error);
    return next(new AppError(`Export failed: ${error.message}`, 500));
  }
};
