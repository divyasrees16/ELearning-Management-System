package com.seceProject.E_learning.Repository;

import com.seceProject.E_learning.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

public interface StudentRepository extends JpaRepository<Student,Long> {

    @Query("SELECT SIZE(s.courses) FROM Student s WHERE s.id = :id")
    int getEnrolledCourseCount(@Param("id") Long id);
    Student findByEmail(String email);

}
