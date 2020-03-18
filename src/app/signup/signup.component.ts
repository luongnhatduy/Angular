import { Component, OnInit } from "@angular/core";
import { LoginService } from "./../services/login.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  userName: string;
  passWord: string;
  name: string;
  age: number;
  phone: number;
  display: string;

  ngOnInit(): void {
  }
  signUp() {
    this.loginService.signUp(
      this.userName,
      this.passWord,
      this.name,
      this.age,
      this.phone,
      this._display.bind(this)
    );
  }
  _display(messenge) {
    this.display = messenge;
  }
}
