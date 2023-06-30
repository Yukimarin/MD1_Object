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
let courses = [
  { id: 1, courseName: "HTML", complete: false },
  { id: 2, courseName: "CSS", complete: false },
  { id: 3, courseName: "Basic of Javascript", complete: false },
  { id: 4, courseName: "NPM", complete: false },
  { id: 5, courseName: "Git", complete: false },
];
// In dữ liệu
function render() {
  for (let i = 0; i < courses.length; i++) {
    console.log(`${i + 1}.${courses[i].courseName} `);
    console.log(`Complete:${courses[i].complete}`);
  }
}
let state = true;
while (state) {
  // Cho người dùng nhập vào CRUDE
  let input = prompt("Nhập vào C/R/U/D/E").toUpperCase();
  if (input == "C") {
    // Cho người dùng nhập vào tên khóa học mới
    let addNameCourse = prompt("Nhập tên khóa học muốn thêm").toUpperCase();
    // Khai báo 1 đối tượng khóa học chứa các thuộc tính id, courseName,complete
    let addCouse = {
      id: Math.floor(Math.random() * 10000),
      courseName: addNameCourse,
      complete: false,
    };
    //   Thêm cái đối tượng vừa tạo vào mảng courses (các khóa học)
    courses.push(addCouse);
    console.log("Sau khi thêm khóa học");
    render();
  } else if (input == "R") {
    console.log("In lại danh sách khóa học");
    render();
  } else if (input == "U") {
    let inputUpdate = Number(prompt("Nhập vào vị trí muốn update"));
    if (inputUpdate - 1 < courses.length && 0 <= inputUpdate - 1) {
      let updateNameCourse = prompt(
        "Nhập vào tên khóa học muốn update"
      ).toUpperCase();
      // inputUpdate-1 chính là vị trí index của khóa học muốn sửa trong mảng khóa học
      courses[inputUpdate - 1].courseName = updateNameCourse;
      // Update luôn complete thành true
      courses[inputUpdate - 1].complete = true;
    } else {
      console.log("Không tìm thấy");
    }
    console.log("Sau khi update");
    render();
  } else if (input == "D") {
    let inputDelete = Number(prompt("Nhập vào vị trí muốn xóa"));
    // Tam bỏ qua điều kiện tồn tại
    courses.splice(inputDelete - 1, 1);
    render();
  } else if (input == "E") {
    console.log("Cảm ơn bạn đã sử dụng app");
    state = false;
    render();
  } else {
    alert("Nhập lại đi bạn ");
  }
}
