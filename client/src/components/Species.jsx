import React from "react";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import "./Species.css";
//import app from "../../../server/app.mjs";

//hardcoded objects into array
let mockSpecies = [
  {
    id: 3,
    common_name: "hippp",
    scientific_name: "Hippopotamus amphibius",
    number_living_in_wild: "200000",
    conservation_status_code: "G5",
    record_creation: "09/29/22",
  },
  {
    id: 4,
    common_name: "goldfish",
    scientific_name: "Carassius auratus",
    number_living_in_wild: "10000000",
    conservation_status_code: "G5",
    record_creation: "09/29/22",
  },
  {
    id: 5,
    common_name: "turtle",
    scientific_name: "Testudines",
    number_living_in_wild: "1000000",
    conservation_status_code: "G4",
    record_creation: "09/29/22",
  },
];

const Species = () => {
  const [speciesList, setSpecieslList] = useState([]);

  console.log("species", speciesList);

  const getSpecies = () => {
    fetch("http://localhost:4000/endangeredSpecies.js")
      .then((res) => res.json())
      .then((res) => setSpeciesList(res.species));
  };

  //   const postUsers = () => {
  //     fetch("http://localhost:4000/users", {
  //       method: "POST",
  //       body: JSON.stringify(newUser),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((json) => console.log(json));
  //   };

  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getSpecies();
  }, []);
  //stores users in an array, initialized from hardcode, ARRAY OF OBJECTS
  const [species, setSpecies] = useState([
    mockSpecies[0],
    mockSpecies[1],
    mockSpecies[2],
  ]);
  //stores the user input into new user
  //const [newUser, setNewUser] = useState({ name: "", email: "", id: "" });

  const initialState = {
    id: "",
    common_name: "",
    scientific_name: "",
    number_living_in_wild: "",
    conservation_status_code: "",
    record_creation: "",
  };

  //adding new species to the species list
  const [speciestList, setSpeciesList] = useState([]);
  console.log("speciesList", speciesList);

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component

  //must create the function because it's not pre-defined as useState is
  const reducer = (state, action) => {
    console.log(action, "this is the action");
    switch (action.type) {
      case "editId":
        console.log("STATE", state);
        console.log("Logged if the editName action is being dispatched");
        return { ...state, id: action.payload };

      case "editCommon_Name":
        console.log("STATE", state);
        return { ...state, common_name: action.payload };

      case "editScientific_Name":
        console.log("STATE", state);
        return { ...state, scientific_name: action.payload };

      case "editNumber_Living_In_Wild":
        console.log("STATE", state);
        return { ...state, number_living_in_wild: action.payload };

      case "editConservation_Status_Code":
        console.log("STATE", state);
        console.log("TESTTTT", action.payload);
        return { ...state, conservation_status_code: action.payload };

      case "editRecord_Creation_TimeStamp":
        console.log("STATE", state);
        console.log("TESTTTT", action.payload);
        return { ...state, record_creation: action.payload };
      case "clear":
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  //const [deleteId, setDeleteId] = useState("")

  //creates a new user profile with all of the updated values for name, id, email, and name
  //   const newUser = { id: id, name: name, email: email };
  //   fetch("http://localhost:4000/users", {
  //     method: "POST",
  //     body: JSON.stringify(newUser),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  //   //add newUser to users list, by unwrapping user array and adding a new user to it, ALWAYS saves the previous users
  //   setUsers([...users, newUser]);
  //   setName("");
  //   setEmail("");
  //   setId("");
  // };

  //   let addUser = () => {
  //     router.post("/", function (req, res, next) {
  //       // save request data to a variable in routes/users.js
  //       res.send(
  //         "some message about your data being saved, and a copy of that data"
  //       );
  //     });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpecies([...species, state]);
    dispatch({ type: "clear" });
    //call dispatch insted > setNewEvent({ name: newEvent.name });
    //add newUser to users list, by unwrapping user array and adding a new user to it
  };
  // const handleDelete = () => {
  //   console.log("handleDeleteId", deleteId) // <-- with reducer, `id` is part of `state`
  //   const filteredEvents = events.filter((event) => {
  //     return event.id != deleteId;
  //   });
  //   console.log("events", events)
  //   // set changes data and tells React to re-render the screen
  //   // console.log(events);
  //   // console.log(filteredEvents)
  //   setEvents( filteredEvents ); // <-- already an array
  //   setDeleteId('')
  //   //setNewUser({...newUser, name: "sam", email: 'sam.com', id: 123})
  // };
  // const handleDelete = (deletedId) => {
  //   const filteredUsers = users.filter((user) => {
  //     return user.id != deletedId;
  //   });
  //   // set changes data and tells React to re-render the screen
  //   setUsers(filteredUsers);
  //   //setNewUser({...newUser, name: "sam", email: 'sam.com', id: 123})
  // };

  return (
    <div className="species">
      <div className="speciesList">
        <h2>Species Management</h2>
        <div className="text">
          <h3>All Species</h3>
          <div className="lists">
          <ul id="species-list">
            {/* Display all Events here */}
            <ul>
              {species.map((specie, index) => {
                return (
                  <li key={index}>
                    {/* each thing inside map is an object */}
                    CommonName: {specie.common_name}, ScientificName:{" "}
                    {specie.scientific_name}
                  </li>
                );
              })}
            </ul>
          </ul>
          </div>
        </div>
      </div>
      <div className="addSpecies">
        <h3>Add Species</h3>
        <form id="add-event" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>CommonName: </label>
            <input
              type="text"
              value={state.common_name}
              id="add-common-name"
              placeholder="Hippo"
              onChange={(e) =>
                dispatch({
                  type: "editCommon_Name",
                  payload: e.target.value,
                })
              }
              //taking object out and assigning the key name to e.target.value
              // onChange={(e) => setNewEvent(i => i.name = e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Scientific Name: </label>
            <input
              type="text"
              id="add-species-id"
              value={state.scientific_name}
              placeholder="Hippopotamus amphibius"
              onChange={(e) =>
                dispatch({
                  type: "editScientific_Name",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          {/* <fieldset>
            <label>Date</label>
            <input
              type="date"
              id="add-user-email"
              value={state.date}
              onChange={(e) =>
                dispatch({
                  type: "editDate",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>Description</label>
            <input
              type="text"
              id="add-event-description"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>Category</label>
            <input
              type="text"
              id="add-event-category"
              value={state.category}
              onChange={(e) =>
                dispatch({
                  type: "editCategory",
                  payload: e.target.value,
                })
              }
            />
          </fieldset> */}
          {/* Add more form fields here */}
          <input type="submit" />
        </form>
      </div>
      {/* why is delete event not in user and events */}
      <div>
        {/* <h3>Delete Event</h3>
        <form id="delete-event" action="#" onSubmit={handleDelete}>
          <fieldset>
            <label>Event ID</label>
            <input type="number" value={deleteId} min="1" id="delete-event-id" onChange={(e) => setDeleteId(e.target.value)}/>
          </fieldset>
          <input type="submit"/>
        </form> */}
      </div>
    </div>
  );
};

export default Species;
