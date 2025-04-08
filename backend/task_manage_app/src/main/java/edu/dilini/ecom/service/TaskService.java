package edu.dilini.ecom.service;

import edu.dilini.ecom.dto.Task;

import java.util.List;

public interface TaskService {
    List<Task> getAll();
    Task getTaskById(Long id);
    void addTask(Task task);
    void updateTask(Task task);
    void deleteTask(Long id);
    List<Task> getAllByStatus(String status);
}
