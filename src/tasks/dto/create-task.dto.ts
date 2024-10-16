import { IsNumber, IsString, MinLength } from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    name: string
    @IsString()
    @MinLength(1)
    category: string
}

export class Task {
    @IsNumber()
    id: number
    @IsString()
    name: string
    @IsString()
    category: string
}