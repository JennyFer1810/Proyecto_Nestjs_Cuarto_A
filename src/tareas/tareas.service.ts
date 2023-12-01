import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarea } from './entities/tarea.entity';
import { Repository } from 'typeorm';
import { PaginacionDto } from 'src/common/dto/paginacion.dto';

@Injectable()
export class TareasService {

  constructor(
    @InjectRepository(Tarea)
    private readonly producRepository: Repository<Tarea>,) { }

  async create(createTareaDto: CreateTareaDto) {
    try {
      const tareas = this.producRepository.create(createTareaDto);
      await this.producRepository.save(tareas);
      return tareas

    } catch (error) {
      console.log(error)
      throw new Error("No se realizo el ingreso a la Base de datos")
    }
    
  }

  findAll(paginacionDto: PaginacionDto) {
    const { limit = 10, offset = 1 } = paginacionDto;
    return this.producRepository.find({
      relations: ['tarea'],
      take: limit,
      skip: offset
    });
  }

  async findOne(id: number) {
    const tareas = await this.producRepository.findOneBy({id});
    if(!tareas)
    throw new NotFoundException(id)
    return tareas   
  }

  async update(id: number, updateTareaDto: UpdateTareaDto) {
    const tareas = await this.producRepository.preload({
      id: id,
      ...updateTareaDto
    })

    if(!tareas)
    throw new NotFoundException("No se pudo actualizar");
    await this.producRepository.save(tareas);
    return tareas
  }

  async remove(id: number) {
    const tareas = await this.findOne(id);
    this.producRepository.delete(tareas);
  }
}
