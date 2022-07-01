import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class BackendTicketDTO {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsPhoneNumber()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    Supervisor: string;
}
