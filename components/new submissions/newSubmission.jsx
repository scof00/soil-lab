import { useEffect, useState } from "react";
import { Label } from "reactstrap";
import {
  getAllCounties,
  getAllCropCodes,
  getAllSoilTextureCodes,
  getAllTillageCodes,
} from "../../services/submissionFormServices";
import "./newSubmission.css";

export const NewSubmission = () => {
  const [tillageCodes, setTillageCodes] = useState([]);
  const [cropCodes, setCropCodes] = useState([]);
  const [counties, setCounties] = useState([]);
  const [soilCodes, setSoilCodes] = useState([]);

  useEffect(() => {
    getAllCropCodes().then((array) => setCropCodes(array));
  }, []);

  useEffect(() => {
    getAllCounties().then((array) => setCounties(array));
  }, []);

  useEffect(() => {
    getAllTillageCodes().then((array) => setTillageCodes(array));
  }, []);

  useEffect(() => {
    getAllSoilTextureCodes().then((array) => setSoilCodes(array));
  }, []);

  return (
    <div>
      <h2>New Submission page</h2>
      <form>
        <fieldset>
          <div className="customer-info">
            <div className="row1">
              <label>WV Resident? </label>
              <br></br>
              <input
                type="checkbox"
                required
                className="customer-info-input"
              ></input>
              <label>Yes</label>
              <input
                type="checkbox"
                required
                className="customer-info-input"
              ></input>
              <label>No</label>
            </div>
            <div className="row1">
              <label>First Name: </label>
              <input
                type="text"
                required
                placeholder="First Name"
                className="customer-info-input"
              ></input>
            </div>
            <div className="row1">
              <label>Last Name: </label>
              <input
                type="text"
                required
                placeholder="Last Name"
                className="customer-info-input"
              ></input>
            </div>
            <div className="row2" id="home-address">
              <label>Home Address: </label>{" "}
              <input
                type="text"
                required
                placeholder="Street/PO Box"
                id="home-input"
              ></input>
            </div>
            <div className="row2" id="city">
              <label>City: </label>
              <input
                type="text"
                required
                placeholder="City"
                className="customer-info-input"
              ></input>
            </div>
            <div className="row3">
              <label>State: </label>
              <input
                type="text"
                required
                placeholder="State"
                className="customer-info-input"
              ></input>
            </div>
            <div className="row3">
              <label>Zip Code:</label>
              <input
                type="number"
                required
                placeholder="Zip Code"
                className="customer-info-input"
              ></input>
            </div>
            <div className="row3">
              <label>Phone: </label>
              <input
                type="tel"
                required
                placeholder="Phone"
                className="customer-info-input"
              ></input>
            </div>
            <div className="row4" id="email">
              <label>Primary Email: </label>{" "}
              <input
                type="email"
                required
                placeholder="Email"
                id="email-input"
              ></input>
            </div>
            <div className="row5" id="email">
              <label>Secondary Email: </label>{" "}
              <input
                type="email"
                required
                placeholder="Email"
                id="email-input"
              ></input>
            </div>
          </div>
          <hr></hr>
          <h2>Sample Data</h2>
          <div className="sample-data">
            <div className="row1">
              <label>Your Sample ID: </label> {" "}
              <input type="text" required placeholder="Your Sample ID"></input>
            </div>
            <div className="row1">
              <label>County Where Taken: </label>{" "}
              <select>
                <option value="0">Select County</option>
                {counties.map((county) => {
                  return (
                    <option key={county.id} value={county.id}>
                      {county.countyName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="row2" id="previous-management">
              <label>Previous Management (crop, cover): </label>
              <br></br>
              <input type="text" required placeholder="Previous Management" id="previous-management-input"></input>
            </div>
            <div className="row2">
              <label>High Tunnel Sample? </label>{" "}
              <input type="checkbox" required></input>
              <label>Yes</label>
            </div>
            <div className="row3" id="sample-size">
              <label>Size of Sample Area: </label> {" "}
              <input type="number" required placeholder="Size" id="sample-size-input"></input>{" "}
              <label>Acre(s)</label>
              <p>or</p>
              <input type="number" required placeholder="Size"  id="sample-size-input"></input>
              <label>Sq. Ft</label>
            </div>
            <div className="row3">
              <label>Predominant Soil Series: </label>{" "}
              <select>
                <option value="0">Choose Soil Series</option>
              </select>
            </div>
            <div className="row4">
              <label>Crop Code: </label>{" "}
              <select>
                <option value="0">Choose Crop Code</option>
                {cropCodes.map((crop) => {
                  return (
                    <option key={crop.id} value={crop.id}>
                      {crop.code}-{crop.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="row4">
              <label>Date Sampled: </label>{" "}
              <input type="date"></input>
            </div>
            <div className="row5">
              <label>Soil Texture Code: </label>{" "}
              <select>
                <option value="0">Choose Soil Texture</option>
                {soilCodes.map((soil) => {
                  return (
                    <option key={soil.id} value={soil.id}>
                      {soil.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="row5">
              <label>Tillage Code: </label>{" "}
              <select>
                <option value="0">Choose Tillage Code</option>
                {tillageCodes.map((tillage) => {
                  return (
                    <option key={tillage.id} value={tillage.id}>
                      {tillage.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="row6" id="add-ons">
              <div className="row1">
                <label>Sample area limed within the last 12 months: </label>{" "}
                <input type="checkbox" required></input>
                <label>Yes</label>
              </div>
              <div className="row2">
                <label>Cost Share Program Participant: </label>{" "}
                <input type="checkbox" required></input>
                <label>Yes</label>
              </div>
              <div className="row3">
                <label>Organic Matter- OM: </label>{" "}
                <input type="checkbox" required></input>
                <label>Yes</label>
              </div>
              <div className="row1">
                <label>Electrical Conductivity - EC: </label>{" "}
                <input type="checkbox" required></input>
                <label>Yes</label>
              </div>
              <div className="row2">
                <label>Micro Nutrient Package- MN: </label>{" "}
                <input type="checkbox" required></input>
                <label>Yes</label>
              </div>
            </div>
            <div className="row9" id="comments">
              <label>Comments: </label>
              <br></br>
              <input
                type="text"
                required
                placeholder="Comments"
                id="comment-input"
              ></input>
            </div>
          </div>
          <br></br>
          <hr></hr>
          <div className="lab-input">
            <div className="row1">
              <label>WVU Lab ID: </label>{" "}
              <input type="number" required placeholder="Lab ID"></input>
            </div>
            <div className="row1">
              <label>Date Received: </label>{" "}
              <input type="date" required></input>
            </div>
            <div className="row1">
              <label>Sample Quality: </label>{" "}
              <input type="text" id="test-data"></input>
            </div>
            <div className="row2">
              <label>pH: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row2">
              <label>Buffer pH: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row2">
              <label>Mg: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row2">
              <label>Mn: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row3">
              <label>Ca: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row3">
              <label>K: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row3">
              <label>Na: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row3">
              <label>Ni: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row4">
              <label>P: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row4">
              <label>B: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row4">
              <label>Zn: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row4">
              <label>Cu: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row5">
              <label>Fe: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row5">
              <label>Al: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row5">
              <label>Organic: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
            <div className="row5">
              <label>EC: </label>{" "}
              <input type="number" required id="test-data"></input>
            </div>
          </div>
          <button>Save and Submit</button>
        </fieldset>
      </form>
    </div>
  );
};
