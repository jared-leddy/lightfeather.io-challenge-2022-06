export const getSupervisors = () => {
    console.log('getSupervisors: Begin');
    return $.ajax({
        method: 'get',
        url: '/api/supervisors/'
    })
        .done(function (response) {
            console.log('GET: /api/supervisors/ | status: success');
            console.log(response.data);

            return response.data.forEach((item) => {
                const jurisdiction = item.jurisdiction;
                const firstName = item.firstName;
                const lastName = item.lastName;
                $(supervisorList).append(
                    `<p class='lightfeather-list-row'>${jurisdiction} - ${lastName}, ${firstName}</p>`
                );
            });
        })
        .fail(function (error) {
            console.log('GET: /api/supervisors/ | status: error');
            console.log(`Error Received: ${error}`);
            console.dir(error);
            console.table(error);
        })
        .always(function () {
            console.log('GET: /api/supervisors/ | status: completed');
        });
};

export const postSubmitTicket = (firstName, lastName, email, phoneNumber, Supervisor) => {
    console.log('postSubmitTicket: Begin');
    $.ajax({
        method: 'post',
        url: '/api/submit/',
        data: {
            firstName,
            lastName,
            email,
            phoneNumber,
            Supervisor
        }
    })
        .done(function (response) {
            console.log('POST: /api/submit/ | status: success');
            console.log('response data', response.data);
            return response.data;
        })
        .fail(function (error) {
            console.log('POST: /api/submit/ | status: error');
            console.log(`Error Received: ${error}`);
            console.dir(error);
            console.table(error);
        })
        .always(function () {
            console.log('POST: /api/submit/ | status: completed');
        });
};
