import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarea } from "./tarea.entity";

@Entity('docente', { schema: 'public' })
export class Docente {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'teacher name',
    })
    name: string;

    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'teacher email',
    })
    email: string;

    @Column('varchar', {
        name: 'comments_teacher',
        nullable: false,
        comment: 'teacher comments',
    })
    comments_teacher: string;

    @Column('varchar', {
        name: 'phone',
        nullable: false,
        comment: 'teacher phone',
    })
    phone: string;

    // Relación Docente - Tareas 
    @OneToMany(() => Tarea, tarea => tarea.docente)
    tareas: Tarea[];
}