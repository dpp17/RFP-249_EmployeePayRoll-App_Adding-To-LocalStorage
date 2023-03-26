window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error')
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = '';
            return;
        }

        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = '';
        } catch (e) {
            textError.textContent = e;
        }
    })
    function getSalary() {
        output.textContent = salary.value;
    }

    const salary = document.querySelector('#salary')
    const output = document.querySelector('.salary-output')
    output.textContent = salary.value
    salary.addEventListener('input', getSalary)

});

// day 44 uc 3
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}