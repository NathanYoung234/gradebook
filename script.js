let students = [];



$('#submission-form').on('submit', function (e) {
    e.preventDefault();
    let fd = new FormData(e.target);
    const data = {
        name: fd.get('name'),
        grade: fd.get('grade')
    };

    students.push(data);
    console.log(data);

    let gradeclass = "grade-fail";
    if (data.grade > 60) {
        gradeclass = "grade-pass";
    }

    $('#grade-table').find('tbody').append(`<tr>
    <td><input type="checkbox" class="selectrow"></td>
    <td>${data.name}</td>
    <td class="${gradeclass}">${data.grade}</td>
    </tr>`);
});