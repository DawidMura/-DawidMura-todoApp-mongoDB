import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to Todo App");
})

router.get("/forbidden", (req, res, next) => {
    const myError = new Error("my new error");
    myError.type = "notfound";
    next(myError);
});

router.get("/faulty", (req, res, next) => {
    const myError = new Error("new error");
    myError.type = "internal";
    next(myError);
});

router.get("/notfound", (req, res) => {
    res.status(404);
    res.send("Site not Found!");
});

router.get("/internalerror", (req, res, next) => {
    res.status(500);
    res.send("Server Error!");
});

router.get("/status", (req, res, next) => {
    const myError = new Error("new error");
    myError.type = "success";
    next(myError);
});

router.get("/success", (req, res) => {
    res.status(202);
    res.send("request accepted");
});

router.use((err, req, res, next) => {
    const date = new Date().toISOString();

    fs.writeFile(
        "./data/fehler.txt",
        `${date} ${err.type} ${req.originalUrl}\n`,
        { flag: "a" },
        (error) => {
            if (error) throw error;
            console.log("error is saved");
        }
    );
    next(err);
});

router.use((err, req, res, next) => {
    if (err.type === "notfound") {
        res.redirect("/notfound");
    } else if (err.type === "success") {
        res.redirect("/success");
    }
    // Sonst soll ein res.redirect() zu "/internalerror" stattfinden.
    else {
        res.redirect("/internalerror");
    }
});


export default router;