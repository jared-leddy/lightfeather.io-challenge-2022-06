import { getSupervisors } from './backend';

$(document).ready(function () {
    // DOM Elements
    const supervisorList = $('#supervisorList');
    const showSupervisorList = $('#showSupervisorList');
    const registerForm = $('#registerForm');

    showSupervisorList.on('click', (event) => {
        event.preventDefault();
        getSupervisors();
    });

    registerForm.on('submit', (event) => {
        event.preventDefault();
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const passwordConfirm = $('#passwordConfirm').val();
        register(firstName, lastName, email, password, passwordConfirm);
    });
});
