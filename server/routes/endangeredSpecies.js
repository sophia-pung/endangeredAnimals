import express from "express";
var router = express.Router();
import cors from "cors";
const app = express();
app.use(cors());

let mockSpecies = [
  { id: 3, common_name: "hippp", scientific_name: "Hippopotamus amphibius", number_living_in_wild: "200000", conservation_status_code: "G5", record_creation: current_date},
  { id: 4, common_name: "goldfish", scientific_name: "Carassius auratus", number_living_in_wild: "10000000", conservation_status_code: "G5", record_creation: current_date},
  { id: 5, common_name: "turtle", scientific_name: "Testudines", number_living_in_wild: "1000000", conservation_status_code: "G4", record_creation: current_date},
];

//updates my database on the response end
router.post("/", (req, res) => {
  const animal = {
    //name is what you called it, body is the body of the page, if you add a plus sign before, will convert to integer
    id: +req.body.id,
    common_name: req.body.common_name,
    scientific_name: req.body.scientific_name,
    number_living_in_wild: req.body.number_living_in_wild,
    conservation_status_code: req.body.conservation_status_code,
    record_creation: current_date,
  };
  console.log(animal);
  //req.json(user);
  mockUsers.push(user);
  //return req.send(user);
  return res.redirect("/");
});
console.log("HERE");

//this placeholder inside the route is params.id > params is an object, the thing after the colon is the key inside the params object
// router.delete("/:id", function (req, res) {
//   const filteredUsers = mockUsers.filter((user) => {
//     let deletedId = req.params.id;
//     console.log("deleteId", deletedId);
//     return user.id != deletedId;
//   });
//   mockUsers = filteredUsers;
//   //users is an arbitrary name used as the title
//   res.json({ users: filteredUsers });
// });

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.body, "the body");
  res.json({ animals: mockAnimals });
});

export default router;
