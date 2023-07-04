// Tạo một đối tượng “staff” chứa các thuộc tính sau id, name, age, salary.
// Sau đó tạo một mảng “company” chứa các đối tượng “staff” và
// thực hiện thêm, sửa, xóa danh sách nhân viên
// Bước 1: Tạo một đối tượng staff và thêm chúng vào mảng company
// let staff = {
//   id: 1,
//   name: "Đức",
//   age: 20,
//   salary: 2000,
// };
// let company = [];
// company.push(staff);
// console.log(company);
// Bước 2: Thêm mới nhân viên vào trong mảng company
// let staff2 = {
//   id: 2,
//   name: "Đức",
//   age: 20,
//   salary: 2000,
// };
// company.unshift(staff2);
// console.log(company);
// Bước 3: Tăng lương cho ông có id 2 lên 5000
// 3.1 Tìm vị trí của ông có id:2 trong mảng company
// for (let i = 0; i < company.length; i++) {
//   if (company[i].id == 2) {
//     company[i].salary = 5000;
//   }
// }
// 3.2 Truy cập đến salary và update giá lên 5000
// console.log("Sau khi update lương cho id 2", company);

// Cách 2: Sử dụng findIndex
// let inputUpdate = Number(prompt("Nhập vào id muốn update"));
// let salaryUpdate = Number(prompt("Nhập vào số lương muốn update"));
// let a = company.findIndex((element) => inputUpdate == element.id);
// console.log(a); //a là chỉ số index của phần tử muốn tìm
// company[a].salary = salaryUpdate;
// console.log(company);
// Bước 4: Xóa thông tin cho nhân viên có id là 1 trong mảng “company”
// for (let i = 0; i < company.length; i++) {
//   if (company[i].id == 1) {
//     company.splice(i, 1);
//   }
// }
// console.log("Sau khi xóa nhân viên id =1", company);

// Bài 4 (BTTH)
// let courses = [
//   { id: 1, courseName: "HTML", complete: false },
//   { id: 2, courseName: "CSS", complete: false },
//   { id: 3, courseName: "Basic of Javascript", complete: false },
//   { id: 4, courseName: "NPM", complete: false },
//   { id: 5, courseName: "Git", complete: false },
// ];
// // In dữ liệu
// function render() {
//   for (let i = 0; i < courses.length; i++) {
//     console.log(`${i + 1}.${courses[i].courseName} `);
//     console.log(`Complete:${courses[i].complete}`);
//   }
// }
// let state = true;
// while (state) {
//   // Cho người dùng nhập vào CRUDE
//   let input = prompt("Nhập vào C/R/U/D/E").toUpperCase();
//   if (input == "C") {
//     // Cho người dùng nhập vào tên khóa học mới
//     let addNameCourse = prompt("Nhập tên khóa học muốn thêm").toUpperCase();
//     // Khai báo 1 đối tượng khóa học chứa các thuộc tính id, courseName,complete
//     let addCouse = {
//       id: Math.floor(Math.random() * 10000),
//       courseName: addNameCourse,
//       complete: false,
//     };
//     //   Thêm cái đối tượng vừa tạo vào mảng courses (các khóa học)
//     courses.push(addCouse);
//     console.log("Sau khi thêm khóa học");
//     render();
//   } else if (input == "R") {
//     console.log("In lại danh sách khóa học");
//     render();
//   } else if (input == "U") {
//     let inputUpdate = Number(prompt("Nhập vào vị trí muốn update"));
//     if (inputUpdate - 1 < courses.length && 0 <= inputUpdate - 1) {
//       let updateNameCourse = prompt(
//         "Nhập vào tên khóa học muốn update"
//       ).toUpperCase();
//       // inputUpdate-1 chính là vị trí index của khóa học muốn sửa trong mảng khóa học
//       courses[inputUpdate - 1].courseName = updateNameCourse;
//       // Update luôn complete thành true
//       courses[inputUpdate - 1].complete = true;
//     } else {
//       console.log("Không tìm thấy");
//     }
//     console.log("Sau khi update");
//     render();
//   } else if (input == "D") {
//     let inputDelete = Number(prompt("Nhập vào vị trí muốn xóa"));
//     // Tam bỏ qua điều kiện tồn tại
//     courses.splice(inputDelete - 1, 1);
//     render();
//   } else if (input == "E") {
//     console.log("Cảm ơn bạn đã sử dụng app");
//     state = false;
//     render();
//   } else {
//     alert("Nhập lại đi bạn ");
//   }
// }

// Bài 2 (bài tập)
// let student = {
//   id: 1,
//   name: "Nguyễn Văn A",
//   age: 20,
//   gender: "Nam",
//   mark: 1,
// };

// let newStudent = {
//   id: 2,
//   name: "Nguyễn Văn B",
//   age: 20,
//   gender: "Nam",
//   mark: 9,
// };

// let students = [];
// students.push(student, newStudent);
// console.log(students);

// let max = students[0].mark;
// for (let i = 0; i < students.length; i++) {
//   if (students[i].mark >= max) {
//     max = students[i].mark;
//   }
// }

// let findIndex = students.findIndex((element) => element.mark == max);
// console.log(students[findIndex]);

// let newStudent2 = {
//   id: 3,
//   name: "Nguyễn Văn C",
//   age: 20,
//   gender: "Nam",
//   mark: 5,
// };
// students.push(newStudent2);
// console.log("Sau khi thêm sinh viên thứ 3", students);
// // Buoc 1: tính tổng điểm các học sinh
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   sum = sum + students[i].mark;
// }
// let average = sum / students.length;
// console.log(average);

// if(average>7.5){

// }

// Bài 1 (BTTH)
// let products = [
//   { id: 1, name: "Butter", count: 100 },
//   { id: 2, name: "Yakult", count: 100 },
//   { id: 3, name: "Butter", count: 100 },
// ];

// let key = prompt("Nhap vao tu khoa can tim");
// let check = -1;
// for (let i = 0; i < products.length; i++) {
//   if (products[i].name == key) {
//     check = i;
//   }
// }

// if (check == -1) {
//   console.log("Không tìm thấy");
// } else {
//   console.log(products[check]);
// }

// Cách 2: find hoặc là findIndex
// let findIndex = products.findIndex((element) => element.name == key);
// console.log(findIndex);
// let find = products.find((element) => element.name == key);
// console.log(find);

// Bài 3:
// Bước 1: Tạo ra bản nguyên mẫu User (id,name, email, address,phone)
class User {
  constructor(id, name, email, address, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.role = 0;
  }
}
// Bước 2: Tạo ra bản nguyên mẫu Admin kế thừa từ User, thêm role =1
class Admin extends User {
  constructor(id, name, email, address, phone) {
    super(id, name, email, address, phone);
    this.role = 1;
  }
}
// Bước 3: Tạo ra mảng users rỗng và thêm 3 user + 1 admin
let users = [];

users.push(new User(1, "Nguyễn Văn A", "A@gmail.com", "Hà Nội", "0123456"));
users.push(new User(2, "Nguyễn Văn B", "B@gmail.com", "Hà Nội", "0123456"));
users.push(new User(3, "Nguyễn Văn C", "C@gmail.com", "Hà Nội", "0123456"));
users.push(new Admin(4, "Nguyễn Văn D", "D@gmail.com", "Hà Nội", "0123456"));

console.log("Sau khi thêm user", users);
// Bước 4: Xóa người dùng thông qua tên (không xóa thằng admin)
// let input = prompt("Nhập vào tên muốn xóa");
// let check = -1;
// for (let i = 0; i < users.length; i++) {
//   if (users[i].name == input && users[i].role != 1) {
//     check = i;
//   }
// }
// // Ra ngoài vòng for, sử dụng mệnh đề điều kiện với biến check
// if (check == -1) {
//   console.log("Không tìm thấy tên người dùng");
// } else {
//   users.splice(check, 1);
// }

// console.log("Sau khi xóa tên người dùng", users);
// Bước 5: Sửa thông tin thông qua id nhưng không sửa admin
// let inputID = Number(prompt("Nhập vào ID muốn sửa"));
// let checkID = -1;
// for (let i = 0; i < users.length; i++) {
//   if (users[i].id == inputID && users[i].role != 1) {
//     checkID = i;
//   }
// }
// if (checkID == -1) {
//   console.log("Không tìm thấy kết quả");
// } else {
//   let inputUpdate = prompt("Nhập vào tên muốn sửa");
//   users[checkID].name = inputUpdate;
// }

// console.log(users);
// Bước 6:
// Thêm 1 nick admin vào mảng danh sách người dùng.
// Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
users.push(new Admin(5, "Nguyễn Văn E", "E@gmail.com", "Hà Nội", "0123456"));
console.log("Sau khi thêm admin", users);
// Tìm và in ra toàn bộ tài khoản admin
for (let i = 0; i < users.length; i++) {
  if (input == users[i].name) {
  }
  if (users[i].role == 1) {
    console.log("Thông tin tài khoản admin", users[i]);
  }
}

let check = true;
while (check) {
  let input = prompt("Nhập ký tự của bạn: ");
  if (input == "E") {
    check == false;
    console.log("Cảm ơn .... ");
  }
}
