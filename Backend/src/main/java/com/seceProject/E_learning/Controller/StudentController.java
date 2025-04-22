package com.seceProject.E_learning.Controller;


import com.seceProject.E_learning.Entity.Student;
import com.seceProject.E_learning.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")

public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/register")
    public String createStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "Student created successfully!";
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getStudent(@PathVariable Long id) {
        Optional<Student> student = studentService.getStudentById(id);
        if (student.isPresent()) {
            return ResponseEntity.ok(student.get()); // Return full student details including enrolled courses
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }

    @PutMapping("/{id}")
    public String updateStudent(@PathVariable Long studentId, @RequestBody Student student) {
        studentService.updateStudent(studentId, student);
        return "Student updated successfully!";
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return "Student deleted successfully!";
}

    @PostMapping("/{id}/enroll/{c_id}")
    public String enrollInCourse(@PathVariable Long id, @PathVariable Long c_id) {
        studentService.enrollStudentInCourse(id, c_id);
        return "Student enrolled in the course successfully!";
    }

    @GetMapping("/{id}/enrolledCoursesCount")
    public int getEnrolledCourseCount(@PathVariable Long id) {
        return studentService.getEnrolledCourseCount(id);
    }


    @PostMapping("/login")
    public ResponseEntity<String> studentLogin(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        if (studentService.validateStudentLogin(email, password)) {
            return ResponseEntity.ok("Login Successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
    }

}
