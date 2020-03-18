import { HomeService } from "./../services/home.service";
import { Component, OnInit } from "@angular/core";
import { LoginService } from "./../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private router: Router) {}

  titleTodo: string;
  listTodo: object[] = [];
  idPass: string;
  titlePass: string;

  ngOnInit(): void {
    this.homeService.getData();
    this.listTodo = this.homeService.listTodo;
  }
  goProfile() {
    this.router.navigate(["/profile"]);
  }
  logOut() {
    this.router.navigate(["/login"]);
    localStorage.setItem("user", null);
  }

  addTodo() {
    this.homeService.addTodo(this.titleTodo);
  }

  editTodo() {
    this.homeService.editTodo(this.idPass, this.titleTodo);
  }

  deleteTodo(id) {
    this.homeService.delete(id);
  }
  passData(id, title) {
    this.idPass = id;
    this.titlePass = title;
  }
  goToDetail(id) {
    this.router.navigate([`/tododetail/${id}`]);
    localStorage.setItem("idTodo", JSON.stringify(id));
  }
}
