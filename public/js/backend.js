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

export const register = (firstName, lastName, email, password, passwordConfirm) => {
    console.log('Begin capture form data.');
    $.ajax({
        method: 'post',
        url: '/api/v1/account/register/',
        data: {
            firstName,
            lastName,
            email,
            password,
            passwordConfirm
        }
    })
        .done(function () {
            console.log('POST: /api/v1/account/register/ | status: success');
            setTimeout(() => {
                window.location.assign('/');
            }, 3000);
        })
        .fail(function (error) {
            console.log('POST: /api/v1/account/register/ | status: error');
            console.log(`Error Received: ${error}`);
            console.dir(error);
            console.table(error);
        })
        .always(function () {
            console.log('POST: /api/v1/account/register/ | status: completed');
        });
};
