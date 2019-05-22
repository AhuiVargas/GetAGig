import axios from "axios";
const baseURL = "http://localhost:3000";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    });
  }
  signup = form => {
    return this.service
      .post("/signup", form)
      .then(({ data }) => data)
      .catch(err => err);
  };
  login = form => {
    return this.service
      .post("/login", form)
      .then(response => {
        console.log(response, "wtf");
        return response;
      })
      .catch(err => {
        return { err: "Password incorrect" };
      });
  };

  logout = () => {
    localStorage.removeItem("user");
    return this.service
      .get("/logout")
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  // logout() {
  //   localStorage.clear();
  //   window.location.href = "/";
  // }
}

export default AuthService;
