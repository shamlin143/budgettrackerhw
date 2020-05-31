const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => {
  console.log(body)
  console.log("here is the post API call")
  Transaction.create(body)
    .then(dbTransaction => {
      console.log("here is the response")
      console.log(dbTransaction)
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({body}, res) => {
  console.log(body)
  console.log("bulk api call")
  Transaction.insertMany(body)
    .then(dbTransaction => {
      console.log("here is the response")
      console.log(dbTransaction)
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;