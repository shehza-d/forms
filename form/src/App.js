import './App.css';

function App() {
  return (
    <div className="App">
      <form onsubmit="form_valadtion(); return false" class="form">

        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
        <div class="subtitle" id="inputError"></div>


        <div class="input-container ic1">
          <input class="input" type="text" placeholder=" " name="name" />
          <div class="cut"></div>
          <label for="userName" class="placeholder">Name</label>
        </div>
        <div class="input-container ic2">
          <input class="input" type="email" placeholder=" " name="email" required />
          <div class="cut"></div>
          <label for="Email" class="placeholder">Email</label>
        </div>
        <div class="input-container ic2">
          <input id="password" class="input" type="password" placeholder=" " name="password" required />
          <div class="cut cut-short"></div>
          <label for="Password" class="placeholder">Password </label>
        </div>

        <input type="checkbox" onclick="show_password()"/><span class="showPassword">Show Password</span>

          <div class="input-container ic2">
            <input id="repeat_password" class="input" type="password" placeholder=" " name="password" required />
            <div class="cut cut-short"></div>
            <label for="Password" class="placeholder">Repeat Password</label>
          </div>

          <p id="error_msg"></p>

          <div class="mainDiv">
            <button type="text" class="submit secondBTN">SUBMIT </button>
          </div>

          <div class="subtitle">by Shehzad</div><br/>
          </form>
        </div>
        );
}

        export default App;
