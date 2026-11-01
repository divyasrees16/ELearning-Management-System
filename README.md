# E-Learning Management System

A full-stack web application where **instructors** publish courses and **students** sign up and enroll in them. It pairs a **Spring Boot** REST API with a **React** single-page client, backed by **MySQL**.

## Features

- **Two user roles**: separate registration and login for students and instructors
- **Course management**: instructors can create and delete courses, each with a type, description, year, YouTube link and website link
- **Enrollment**: students can enroll in courses; the API reports how many courses a student is in and how many students a course has
- **REST API** with full CRUD for students, instructors and courses
- **Landing page** with sign-up and login entry points

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, React Router 7, Axios, Create React App (`react-scripts` 5) |
| Backend | Java 17, Spring Boot 3.4.3, Spring Web, Spring Data JPA (Hibernate) |
| Database | MySQL (via `mysql-connector-j`) |
| Build tools | Maven (backend), npm (frontend) |

## Project Structure

```
ELearning-Management-System/
├── Backend/                          # Spring Boot REST API
│   ├── pom.xml
│   └── src/
│       ├── main/
│       │   ├── java/com/seceProject/E_learning/
│       │   │   ├── ELearningApplication.java
│       │   │   ├── Controller/       # REST endpoints (Course, Instructor, Student)
│       │   │   ├── Service/          # Business logic
│       │   │   ├── Repository/       # Spring Data JPA repositories
│       │   │   └── Entity/           # JPA entities (Course, Instructor, Student)
│       │   └── resources/
│       │       └── application.properties
│       └── test/
└── Frontend/                         # React client
    ├── package.json
    ├── public/
    └── src/
        ├── App.js                    # Route definitions
        ├── index.js
        └── components/               # Home, Login, SignUp, StudentDashboard,
                                      # InstructorDashboard, CourseDetail, CourseEnrollment
```

## Getting Started

### Prerequisites

- **JDK 17**
- **Maven 3.9+**
- **Node.js 18+** and npm
- **MySQL 8** running locally on port `3306`

### 1. Clone the repository

```bash
git clone https://github.com/divyasrees16/ELearning-Management-System.git
cd ELearning-Management-System
```

### 2. Create the database

Tables are created automatically on first run (`spring.jpa.hibernate.ddl-auto=update`), but the database itself must exist:

```sql
CREATE DATABASE elearning;
```

### 3. Configure database credentials

The backend connects to `jdbc:mysql://localhost:3306/elearning`. Provide your own MySQL username and password through environment variables. Spring Boot picks these up automatically and they override anything in `application.properties`:

```bash
# macOS / Linux
export SPRING_DATASOURCE_USERNAME=your_mysql_user
export SPRING_DATASOURCE_PASSWORD=your_mysql_password
```

```powershell
# Windows PowerShell
$env:SPRING_DATASOURCE_USERNAME="your_mysql_user"
$env:SPRING_DATASOURCE_PASSWORD="your_mysql_password"
```

### 4. Run the backend

```bash
cd Backend
mvn spring-boot:run
```

The API starts on **http://localhost:8080**.

### 5. Run the frontend

In a second terminal:

```bash
cd Frontend
npm install
npm start
```

The app opens on **http://localhost:3000**. The frontend calls the API at `http://localhost:8080`, so start the backend first.


## API Reference

Base URL: `http://localhost:8080`

### Students: `/students`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/students/register` | Register a student (`name`, `email`, `phone`, `password`, `profession`) |
| POST | `/students/login` | Log in with `{ "email", "password" }` (200 on success, 401 otherwise) |
| GET | `/students` | List all students |
| GET | `/students/{id}` | Get a student by ID |
| PUT | `/students/{id}` | Update a student |
| DELETE | `/students/{id}` | Delete a student |
| POST | `/students/{id}/enroll/{c_id}` | Enroll a student in a course |
| GET | `/students/{id}/enrolledCoursesCount` | Number of courses the student is enrolled in |

### Instructors: `/instructors`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/instructors/register` | Register an instructor (`i_name`, `i_email`, `i_phone`, `i_password`, `specialization`, `institution_name`) |
| POST | `/instructors/login` | Log in with `{ "email", "password" }` (200 on success, 401 otherwise) |
| GET | `/instructors` | List all instructors |
| GET | `/instructors/{i_id}` | Get an instructor by ID |
| PUT | `/instructors/{i_id}` | Update an instructor |
| DELETE | `/instructors/{i_id}` | Delete an instructor |

### Courses: `/courses`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/courses` | List all courses |
| GET | `/courses/{c_id}` | Get a course by ID (404 if not found) |
| POST | `/courses/add` | Add a course (`c_type`, `c_name`, `c_description`, `c_year`, `youtube_url`, `website_url`) |
| DELETE | `/courses/{c_id}` | Delete a course |
| GET | `/courses/{c_id}/studentCount` | Number of students enrolled in the course |



## Frontend Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `Home` | Landing page |
| `/login` | `Login` | Student / instructor login |
| `/signup` | `SignUp` | Student / instructor registration |
| `/dashboard` | `StudentDashboard` | Student dashboard |
| `/course-detail` | `CourseDetail` | Course page with video and materials |
| `/course-enrollment` | `CourseEnrollment` | Browse and enroll in courses |
| `/instructor-dashboard` | `InstructorDashboard` | Add-course form for instructors |
