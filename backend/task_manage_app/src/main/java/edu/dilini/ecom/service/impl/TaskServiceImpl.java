package edu.dilini.ecom.service.impl;

import edu.dilini.ecom.dto.Task;
import edu.dilini.ecom.entity.TaskEntity;
import edu.dilini.ecom.repository.TaskRepository;
import edu.dilini.ecom.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@RequiredArgsConstructor

public class TaskServiceImpl implements TaskService {

    final TaskRepository repository;
    final ModelMapper mapper;

    @Override
    public List<Task> getAll() {
        List<Task> taskList=new ArrayList<>();
        List<TaskEntity> all=repository.findAll();

        all.forEach(taskEntity -> {
            taskList.add(mapper.map(taskEntity, Task.class));
        });

        return taskList;
    }

    @Override
    public Task getTaskById(Long id) {
        return mapper.map(repository.findById(id), Task.class);
    }

    @Override
    public void addTask(Task task) {
        repository.save(mapper.map(task,TaskEntity.class));

    }

    @Override
    public void updateTask(Task task) {
        repository.save(mapper.map(task, TaskEntity.class));

    }

    @Override
    public void deleteTask(Long id) {
        repository.deleteById(id);

    }

    @Override
    public List<Task> getAllByStatus(String status) {
        List<Task> taskList=new ArrayList<>();
        List<TaskEntity> all=repository.findAllByStatus(status);

        all.forEach(taskEntity -> {
            taskList.add(mapper.map(taskEntity, Task.class));
        });

        return taskList;
    }
}
