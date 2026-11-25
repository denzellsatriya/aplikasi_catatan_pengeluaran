import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('expenses')
  findAll() {
    return this.appService.findAll();
  }

  @Get('expenses/stats')
  getStats(@Query('category') category?: string) {
    return this.appService.getStats(category);
  }

  @Get('expenses/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findOne(id);
  }

  @Post('expenses')
  create(@Body() payload: any) {
    return this.appService.create(payload);
  }

  @Patch('expenses/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.appService.update(id, payload);
  }

  @Delete('expenses/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appService.remove(id);
  }

  
}