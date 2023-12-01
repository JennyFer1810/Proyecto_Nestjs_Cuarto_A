import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";
import { CreateTareaDto } from "../dto/create-tarea.dto";
import { Docente } from "./docente.entity";
import { Alumno } from "./alumno.entity";

@Entity('tarea', { schema: 'public' })
export class Tarea {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {
        name: 'title_task',
        nullable: false,
        comment: 'title task'
    })
    title_task: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'task description'
    })
    description: string;

    @Column('integer', {
        name: 'note',
        nullable: false,
        comment: 'task note'
    })
    note: number;

    @Column('varchar', {
        name: 'asignature',
        nullable: false,
        comment: 'asignature name'
    })
    asignature: string;

    @Column('date', {
        name: 'deliver_date',
        nullable: false,
        comment: 'deliver date'
    })
    deliver_date: string;

    // Relación Tarea - Docente 
    @ManyToOne(() => Docente, docente => docente.tareas)
    docente: Docente;

    // Relación Tarea - Alumnos 
    @ManyToMany(() => Alumno)
    @JoinTable()
    alumnos: Alumno[];
}
