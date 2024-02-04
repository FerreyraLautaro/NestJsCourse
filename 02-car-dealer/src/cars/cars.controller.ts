import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto copy';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    let car = this.carsService.findOneById(id);
    if (car) return car;
    return { Error: true, Message: `Car with index: ${id} NotFound` };
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  update(@Body() updateCarDto: UpdateCarDto, @Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  delete(@Body() body: any, @Param('id', ParseUUIDPipe) id: string) {
    this.carsService.delete(id);
  }
} 
