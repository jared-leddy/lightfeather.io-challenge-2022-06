import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class BackendSupervisorListDTO {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsPhoneNumber()
    phone: string;

    @IsString()
    @IsNotEmpty()
    identificationNumber: string;

    @IsString()
    @IsNotEmpty()
    jurisdiction: string;
}
