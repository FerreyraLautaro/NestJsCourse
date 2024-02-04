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
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

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
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Body() body: any, @Param('id', ParseUUIDPipe) id: string) {
    return body;
  }

  @Delete(':id')
  delete(@Body() body: any, @Param('id', ParseUUIDPipe) id: string) {
    return body;
  }
} 
