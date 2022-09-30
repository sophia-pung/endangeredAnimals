import { useState } from "react";
import "./addSpecies.css";

const AddSpecies = (props) => {

  const toBeEdited = props.initialSpecie;
  console.log("TBE", toBeEdited)
  const [newSpeciesName, setNewSpeciesName] = useState(toBeEdited);

  const handleCommonNameChange = (event) => {
    const common_name = event.target.value;
    //changing initial state, getting the toBeEdited is an object, to extend objects too, you need to pass the whole object to the function
    setNewSpeciesName((newSpeciesName) => ({ ...newSpeciesName, common_name }));
  };

  const handleScientificNameChange = (event) => {
    const scientific_name = event.target.value;
    //changing initial state, getting the toBeEdited is an object, to extend objects too, you need to pass the whole object to the function
    setNewSpeciesName((newSpeciesName) => ({ ...newSpeciesName, scientific_name }));
  };

  const editSpeciesName = (e, newSpeciesName) => {
    e.preventDefault();
    console.log("EDITED", newSpeciesName);
    props.dataToStudent(newSpeciesName);
  };

  return (
    <div>
      <form>
        <fieldset className="fieldset">
          <label className="LabelTwo">Common Name</label>
          <input
            className="boxOne"
            type="text"
            id="add-specie-name"
            placeholder="Common Name"
            required
            value={newSpeciesName.common_name}
            onChange={handleCommonNameChange}
          />
          <label>Scientific Name</label>
          <input
            className="boxTwo"
            type="text"
            id="add-scientific-name"
            placeholder="Scientific Name"
            required
            value={newSpeciesName.scientific_name}
            onChange={handleScientificNameChange}
          />
          <button
            type="submit"
            onClick={(e) => {
              editSpeciesName(e, newSpeciesName);
            }}
          >
            AddButton
          </button>
        </fieldset>
        {/* can't call a function inside a function unless anonymous parameter */}
      </form>
    </div>
  );
};

export default AddSpecies;
