import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  listTodo = [];
  constructor(private http: HttpClient) {}

  getData() {
    this.listTodo = []
    this.http.get("http://localhost:3000/all").subscribe({
      next: respon => {
        const newData = [];
        newData.push(respon);
        newData[0].forEach(element => {
          this.listTodo.push(element);
        });
      },
      error: e => {},
      complete: () => {}
    });
  }
  addTodo(titleTodo) {
    const newTodo = {
      title: titleTodo,
      detail: []
    };
    this.http.post("http://localhost:3000/addTodo", newTodo).subscribe({
      next: respon => {
        this.listTodo.push(respon[0]);
      },
      error: e => {},
      complete: () => {}
    });
  }

  delete(id) {
    this.http.post("http://localhost:3000/deleteTodo", { id: id }).subscribe({
      next: respon => {
        if (respon) {
          const arrayId = this.listTodo.map(i => i.id);
          this.listTodo.splice(arrayId.indexOf(id), 1);
        }
      },
      error: e => {},
      complete: () => {}
    });
  }

  editTodo(_id, title) {
    this.http
      .post("http://localhost:3000/updateTodo", { _id: _id, title: title })
      .subscribe({
        next: respon => {
          if (respon) {
            const arrayId = this.listTodo.map(i => i._id);
            this.listTodo[arrayId.indexOf(_id)].title = title;
          }
        },
        error: e => {},
        complete: () => {}
      });
  }

  addTodoDetail(title, _id, index) {
    this.http
      .post("http://localhost:3000/addTodoDetail", { _id: _id, title: title })
      .subscribe({
        next: respon => {
          if (respon) {
            this.listTodo[index].detail.push(respon);
          }
        },
        error: e => {},
        complete: () => {}
      });
  }
  deleteTodoDetail(_id, id, index) {
    this.http
      .post("http://localhost:3000/deleteTodoDetail", {
        _id: _id,
        idDetail: id
      })
      .subscribe({
        next: respon => {
          if (respon) {
            const arrayId = this.listTodo[index].detail.map(i => i.id);
            this.listTodo[index].detail.splice(arrayId.indexOf(id), 1);
          }
        },
        error: e => {},
        complete: () => {}
      });
  }
  editTodoDetail(_id, id, title, index) {
    this.http
      .post("http://localhost:3000/updateTodoDetail", {
        _id: _id,
        idDetail: id,
        title: title
      })
      .subscribe({
        next: respon => {
          if (respon) {
            console.log(respon, "okela");
            const arrayId = this.listTodo[index].detail.map(i => i.id);
            this.listTodo[index].detail[arrayId.indexOf(id)].title = title;
          }
        },
        error: e => {},
        complete: () => {}
      });
  }
}
