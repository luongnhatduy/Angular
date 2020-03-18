import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  name: string;
  age: string;
  phone: string;
  constructor() {}

  ngOnInit(): void {
    const accountLogin = JSON.parse(localStorage.getItem("user"));
    this.name = accountLogin.name;
    this.age = accountLogin.age;
    this.phone = accountLogin.phone;
  }
}
