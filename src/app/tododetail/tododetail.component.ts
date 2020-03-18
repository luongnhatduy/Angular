import { HomeService } from "./../services/home.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-tododetail",
  templateUrl: "./tododetail.component.html",
  styleUrls: ["./tododetail.component.css"]
})
export class TododetailComponent implements OnInit {
  id: number;
  constructor(
    private router: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    });
  }
  todoDetail: object[] = [];
  titleTodo: string;
  titleTodoDetail: string;
  idPass: string;
  titlePass: string;
  index: number;
  _id : string
  ngOnInit(): void {
    const idTodo = JSON.parse(localStorage.getItem("idTodo"));
    const arrayId = this.homeService.listTodo.map(i => i.id);
    this.index = arrayId.indexOf(this.id);
    this.todoDetail = this.homeService.listTodo[this.index].detail;
    this.titleTodo = this.homeService.listTodo[this.index].title;
    this._id = this.homeService.listTodo[this.index]._id;
  }

  addTodoDetail() {
    this.homeService.addTodoDetail(this.titleTodoDetail, this._id,this.index);
  }

  editTodoDetail() {
    this.homeService.editTodoDetail(
      this._id,
      this.idPass,
      this.titleTodoDetail,
      this.index
    );
  }

  deleteTodoDetail(id) {
    this.homeService.deleteTodoDetail(this._id,id, this.index);
  }
  passData(id, title) {
    this.idPass = id;
    this.titlePass = title;
  }
}
