import { getSupervisors, postSubmitTicket } from './backend';

$(document).ready(function () {
    // DOM Elements
    const supervisorList = $('#supervisorList');
    const showSupervisorList = $('#showSupervisorList');
    const ticketForm = $('#ticketForm');
    const SupervisorSelect = $('#SupervisorSelect');

    showSupervisorList.on('click', (event) => {
        event.preventDefault();
        getSupervisors();
    });

    const data = getSupervisors();
    const updatedValue = data.map((item) => {
        const value = `<option value='${item}'>${item}</option>`;
        return value;
    });
    $(SupervisorSelect).append(updatedValue);

    ticketForm.on('submit', (event) => {
        event.preventDefault();
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const email = $('#email').val();
        const phoneNumber = $('#phoneNumber').val();
        const Supervisor = $('#SupervisorSelect').val();
        postSubmitTicket(firstName, lastName, email, phoneNumber, Supervisor);
    });
});
