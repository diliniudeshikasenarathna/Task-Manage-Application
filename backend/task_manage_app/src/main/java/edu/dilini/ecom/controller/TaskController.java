package edu.dilini.ecom.controller;

import edu.dilini.ecom.dto.Task;
import edu.dilini.ecom.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/task")
@RequiredArgsConstructor
public class TaskController {
    final TaskService service;

    @PostMapping("/add")
    public void addTask(@RequestBody Task task){
        service.addTask(task);
    }

    @GetMapping("/get-all")
    public List<Task> getAllTask(){
      return service.getAll();

    }
    @DeleteMapping("/delete/{id}")
    public void deleteTask(@PathVariable Long id){
        service.deleteTask(id);
    }

    @GetMapping("/search/{id}")
    public Task searchTask(@PathVariable Long id){
       return service.getTaskById(id);
    }

    @PutMapping("/update")
    public void update(@RequestBody Task task){
        service.updateTask(task);
    }

    @GetMapping("/search-by-status/{status}")
    public List<Task> searchTask(@PathVariable String status){
        return service.getAllByStatus(status);
    }


}
