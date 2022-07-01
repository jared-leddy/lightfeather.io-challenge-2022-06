// NPM Modules
import { Injectable } from '@nestjs/common';
import axios from 'axios';

// Custom Modules
import { BackendTicketDTO, BackendSupervisorListDTO } from './dto';
import { Request, Response } from 'express';

// create injectable auth service
@Injectable()
export class BackendService {
    // create constructor
    constructor() {}

    // create get supervisors method
    async getSupervisors(req: Request, res: Response) {
        // code here
        const supervisorList = await axios({
            method: 'get',
            url: 'https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers'
        })
            .then(function (res) {
                return res.data;
            })
            .catch(function (error) {
                res.send({
                    status: '500',
                    message: error
                });
            });

        const filteredList: any[] = supervisorList.filter((item: BackendSupervisorListDTO) => {
            if (parseInt(item.jurisdiction) != Number(item.jurisdiction)) {
                return item;
            }
            return;
        });

        const sortArray = (a, b) => {
            return (
                // sort by jurisdiction
                a.jurisdiction.localeCompare(b.jurisdiction) ||
                // sort by last name
                a.lastName.localeCompare(b.lastName) ||
                // sort by first name
                a.firstName.localeCompare(b.firstName)
            );
        };
        const finalList = filteredList.sort(sortArray);

        return finalList;
    }

    // create post submit method
    async postSubmit(data: BackendTicketDTO) {
        // code here
    }
}
