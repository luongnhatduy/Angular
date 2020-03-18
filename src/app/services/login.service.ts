// import { SignupComponent } from "./../signup/signup.component";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  account = [
    {
      useName: "luongnhatduy",
      passWord: "12345678",
      name: "Lương Nhật Duy",
      age: 22,
      phone: "0389129393"
    },
    {
      useName: "anhduy",
      passWord: "123456",
      name: "Lương Nhật Duy",
      age: 22,
      phone: "0389129393"
    }
  ];

  constructor(
    private router: Router,
    // private signupComponent: SignupComponent
    private http: HttpClient
  ) {}

  login(userName, passWord, cb) {
    this.http
      .post("http://localhost:3000/login", {
        userName: userName,
        passWord: passWord
      })
      .subscribe({
        next: respon => {
          this.router.navigate(["/home"]);
          localStorage.setItem("user", JSON.stringify(respon));
        },
        error: e => {
          cb(e.error.errors);
        },
        complete: () => {}
      });
  }

  signUp(userName, passWord, name, age, phone, callback) {
    this.http
      .post("http://localhost:3000/signUp", {
        userName: userName,
        passWord: passWord,
        name: name,
        age: age,
        phone: phone
      })
      .subscribe({
        next: respon => {
          this.router.navigate(["/home"]);
          localStorage.setItem("user", JSON.stringify(respon));
        },
        error: e => {
          callback(e.error.errors);
        },
        complete: () => {}
      });
  }
}
