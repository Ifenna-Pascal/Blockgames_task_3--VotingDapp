export default function App() {
  

  return (

<>
<nav className="navbar navbar-light bg-success">
  <div className="container-fluid">
    <a href = "" className="navbar-brand text-white">UTeam</a>
    <form className="d-flex">
     
      <button className="btn btn-outline-light" type="submit">Connect</button>
    </form>
  </div>
</nav>

 <div className="container">
  <div className="row justify-content-center">
    <div className="col">
      
    </div>
    <div className="col-6">
    <label >Select :Role </label>
  <select className="form-control col-6" id="sel1"  name="visibility" aria-label="Default select example" >
    <option>Select</option>
 <option value="Teacher">Teacher</option>
 <option value="Student">Student</option> 
 <option value="Chairman">Chairman</option> 
 
  </select>
    </div>
    <div class="col">
      
    </div>
  </div> 
  <div className="row justify-content-evenly">
    <div className="col">
    <div className="card">
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 className="card-title">Admin</h5>
    <p className="card-text"> <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
  <label class="form-check-label" for="flexSwitchCheckChecked">Allow Voting</label>
</div>.</p>
<p><div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
  <label class="form-check-label" for="flexSwitchCheckChecked">Make Votes Public</label>
</div></p>
<form class="row g-3">
 
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">ADD CANDIDATES</label>
    <input type="test" class="form-control" id="inputPassword2" placeholder="Address/name" />
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-success mb-3">Add Candidate</button>
  </div>
</form>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
      <div className="col">
      <div className="card" >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">Teachers</h5>
    <p className="card-text"><div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
  <label class="form-check-label" for="flexSwitchCheckChecked">Make Votes Public</label>
</div></p>
<p className="text-white"> Teacher </p>


<form class="row g-3">
 
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">ADD CANDIDATES</label>
    <input type="test" class="form-control" id="inputPassword2" placeholder="Address/name" />
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-success mb-3">Add Candidate</button>
  </div>
</form>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
      </div>
  </div>
  </div>


<div className="container" >
 <div className="row justify-content-evenly" >
 <div className="col-6">
 <form class="column g-3">
   <legend>VOTE</legend>
<div class="form-check">
<label class="form-check-label" for="flexRadioDefault1">
   Candidate A
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"   />

</div>


<div class="form-check">
<label class="form-check-label" for="flexRadioDefault2">
   Candidate B
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
 
</div>

<div class="form-check">
<label class="form-check-label" for="flexRadioDefault2">
   Candidate C
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
 
</div>

<div class="form-check">
<label class="form-check-label" for="flexRadioDefault2">
   Candidate D
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
 
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-success mb-3">VOTE</button>
  </div>
</form>
 </div>
 </div>
 </div>


<table class="table">
  <thead >
    <tr >
      <th scope="col">SN</th>
      <th scope="col">Address</th>
      <th scope="col">Number of Votes</th>
      <th scope="col">Winner</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>0x0000xx</td>
      <td>2</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>-</td>
      <td>-</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>-</td>
      <td>-</td>
      <td></td>
    </tr>
  </tbody>
</table>
</>
  );
}

