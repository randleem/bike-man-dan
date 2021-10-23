import logo from "./logo.svg";
import "./App.css";

//Componenets
import GetJobById from "./Components/GetJobById/GetJobById";

function App() {
  // MVP
  //cards - like trello - list of jobs in workshop
  // enter parts - airtable form
  // see a list of parts added
  // Get a list of jobs in the workshop
  // Jordan add labour and parts to a the job
  // This them shows him the labour and parts
  // He clicks a button to send to customer for approval

  // Airtable - URL to app in airtable - via a formula add unique job id to query string parameter
  // Will fetch correct record
  // Jordan then add labour - creating records in labour/jobs table that link to job id
  // Submit

  // MLP
  // The customer then sees a list of jobs
  // some included in service
  // required/necessary to be safe - opt out
  // recommended/adviced - opt in
  // Customer then sees a list of what they have opted in and out of
  // Total for labour
  // Estimate for parts
  // disclaimer and submit button/ basket/ confirm/ work agreed

  return (
    <div className="app">
      <h1>Jordans App</h1>
      <GetJobById />
    </div>
  );
}

export default App;
