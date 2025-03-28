let selectedRow = null; // Global variable for editing

document.getElementById("employeeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    if (selectedRow === null) {
        onFormSubmit();
    } else {
        updateRecord();
    }
    resetForm();
});

function onFormSubmit() {
    const formData = readFormData();
    insertNewRecord(formData);
}

function readFormData() {
    return {
        fullName: document.getElementById("fullName").value,
        empCode: document.getElementById("empCode").value,
        salary: document.getElementById("salary").value,
        city: document.getElementById("city").value
    };
}

function insertNewRecord(data) {
    const table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = data.fullName;
    newRow.insertCell(1).innerHTML = data.empCode;
    newRow.insertCell(2).innerHTML = data.salary;
    newRow.insertCell(3).innerHTML = data.city;
    newRow.insertCell(4).innerHTML = `
        <a href="#" onclick="onEdit(this)">Edit</a> |
        <a href="#" onclick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord() {
    selectedRow.cells[0].innerHTML = document.getElementById("fullName").value;
    selectedRow.cells[1].innerHTML = document.getElementById("empCode").value;
    selectedRow.cells[2].innerHTML = document.getElementById("salary").value;
    selectedRow.cells[3].innerHTML = document.getElementById("city").value;
    selectedRow = null;
}

function onDelete(td) {
    if (confirm("Are you sure you want to delete this record?")) {
        const row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
