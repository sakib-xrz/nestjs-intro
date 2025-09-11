import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  public getAllUsers(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    console.log(`Page is ${page} and type of the page is ${typeof page}`);
    console.log(`Limit is ${limit} and type of the line is ${typeof limit}`);

    return 'Users retrieved successful';
  }

  @Post()
  public createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return 'User created successfully';
  }

  @Get('/:id')
  public getSingleUser(@Param() params: any) {
    console.log(params);
    return 'Users retrieved successful';
  }
}
