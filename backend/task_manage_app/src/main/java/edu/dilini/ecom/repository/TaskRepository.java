package edu.dilini.ecom.repository;

import edu.dilini.ecom.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<TaskEntity,Long> {

    List<TaskEntity> findAllByStatus(String status);
}
