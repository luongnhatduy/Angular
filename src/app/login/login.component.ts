import { LoginService } from "./../services/login.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  userName: string;
  passWord: string;
  messenge: string;
  ngOnInit(): void {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    if (accountLogin) this.router.navigate(["/home"]);
  }

  login() {
    if (this.userName !== "" && this.passWord !== "") {
      this.loginService.login(
        this.userName,
        this.passWord,
        this._display.bind(this)
      );
    }
  }
  _display(messenge) {
    this.messenge = messenge;
  }
}
