import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { CreateTareaDto } from "../dto/create-tarea.dto";

@Entity('tarea', { schema: 'public' })
export class Tarea{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column('varchar',{
        name:'title_task',
        nullable: false,
        comment:'title task'
    })
    title_task:string;

    @Column('varchar',{
        name:'description',
        nullable:false,
        comment:'task description'
    })
    description:string;

    @Column('integer', {
        name: 'note',
        nullable: false,
        comment: 'task note'
    })
    note: number;

    @Column('varchar',{
        name:'asignature',
        nullable:false,
        comment:'asignature name'
    })
    asignature:string;

    @Column('date', {
        name: 'deliver_date',
        nullable: false,
        comment: 'deliver date'
    })
    deliver_date: string;
    
}
