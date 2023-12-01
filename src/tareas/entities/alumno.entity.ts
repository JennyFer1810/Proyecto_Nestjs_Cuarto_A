import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarea } from "./tarea.entity";

@Entity('alumno', { schema: 'public' })
export class Alumno {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'student name',
    })
    name: string;

    @Column('varchar', {
        name: 'course',
        nullable: false,
        comment: 'student course',
    })
    course: string;

    @Column('integer', {
        name: 'parallel',
        nullable: true,
        comment: 'student parallel',
    })
    parallel: number;

    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'student email',
    })
    email: string;

    // Relación Alumno - Tareas 
    @ManyToMany(() => Tarea, tarea => tarea.alumnos)
    @JoinTable()
    tareas: Tarea[];

}