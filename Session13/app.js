// // 1. Khái niệm về Object (đối tượng)
// // Các thuộc tính của 1 sinh viên: mã sinh viên, tên, tuổi, địa chỉ, khóa học, ngành, có người yêu
// //  Là kiểu dữ liễu lưu trữ các thuộc của một đối tượng
// // 2. Cách khai báo object
// let student = {
//   id: 1,
//   name: "Bách",
//   age: 32,
//   address: "Hà Nội",
// };
// console.log("Log đối tượng student", student);
// // 3. Thao tác CRUD với kiểu dữ liệu Object
// // R (Read one - Read All)
// // Read one
// // Cú pháp: object_name.key => value tương ứng với key
// console.log("Lấy giá trị của thuộc tính name", student.name);
// // Read All
// for (const key in student) {
//   console.log(`${key}:${student[key]}`);
// }
// // C (Create)- Thêm mới thuộc tính cho đối tượng
// student.email = "bachnx@rikkeisoft.com";
// console.log("Sau khi thêm thuộc tính email", student);
// // U (Update)- Thay đổi value cho thuộc tính (key) của đổi tượng
// student.age = 18;
// console.log("Sau khi update age bằng 18", student);
// // D (Delete) - Xóa 1 thuộc tính của đối tượng
// delete student.address;
// console.log("sau khi xóa thuộc tính address của đối tượng", student);

// Constructor Function (tên viết hoa không bắt buộc nhưng quy ước chung thì sẽ viết Hoa)
// function User(lastName, firstName, age) {
//   this.lastName = lastName;
//   this.firstName = firstName;
//   this.age = age;
// }

// let student = new User("Nguyễn", "Bách", 20);
// let student2 = new User("Ninh", "Hoàng", 7);
// console.log(student);
// console.log(student2);

// Object constructor (tạm dịch - xây dựng đối tượng)
// Từ khóa class - extends(kế thừa)
// class User {
//   constructor(lastName, firstName, age) {
//     this.lastName = lastName;
//     this.firstName = firstName;
//     this.age = age;
//   }
// }

// let user = new User("Nguyễn", "Bách", 32);
// console.log(user);

// class Admin extends User {
//   constructor(lastName, firstName, age) {
//     // Phương thức super()
//     super(lastName, firstName, age);
//   }
// }

// let admin = new Admin("Ninh", "Hoàng", 10);
// let admin2 = new Admin("Lê", "Thủy", 18);
// console.log(admin2);
