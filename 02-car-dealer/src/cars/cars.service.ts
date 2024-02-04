import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto copy';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Fiat', model: 'Uno' },
    { id: uuid(), brand: 'Corvette', model: 'Corvette' },
  ];

  findAll() {
    return this.cars
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id)
    if (!car) throw new NotFoundException(`car whith id ${id} not found`);
    return car
  }

  create(createCarDto: CreateCarDto) {

    let newCar: Car = {
      id: uuid(),
      ...createCarDto
    }
    this.cars.push(newCar)

    // this.cars.push({
    //   id: uuid(),
    //   brand: createCarDto.brand,
    //   model: createCarDto.model
    // })

    return newCar
  }

  update(id: string, updateCarDto: UpdateCarDto) {

    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException('Car id is not vallinside body')
    }

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id }
        return car;
      }
    })
    return carDB
  }

  delete (id: string){
    let carDB = this.findOneById(id);
    this.cars = this.cars.filter( car => car.id !== id)
  }
}
