import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateTareaDto {
    
    @IsString()
    title_task: string;

    @IsString()
    @IsOptional()
    description?: string;
    
    @IsString()
    @IsPositive()
    @Type(()=>Number)
    note: number;

    @IsString()
    @IsOptional()
    asignature?: string;

    @IsDateString()
    @IsNotEmpty()
    deliver_date: string;
    
}
