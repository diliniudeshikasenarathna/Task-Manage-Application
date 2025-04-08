import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../model/Task";

@Injectable({
    providedIn:"root"
})
export class TaskService{
    
    constructor(private http:HttpClient){

    }

    loadAllTask():Observable<Task[]>{
        return this.http.get<Task[]>("http://localhost:8080/task/get-all");
      }

      private apiUrl = 'http://localhost:8080/task/add';  

      
    
      addTask(task: Task):Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task);  
      }

}