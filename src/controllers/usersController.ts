import { Get, Post, Route, Body, Query, Path, SuccessResponse, Controller, Header } from 'tsoa'
import { getRepository } from 'typeorm'
import { User, UserCreationRequest } from '../entity/user'

@Route('Users')
export class UsersController extends Controller {
  @Get()
  public async getUserList(): Promise<User[]> {
    return await getRepository(User).find()
  }

  @Get('{id}')
  public async getUser(id: number, @Query() name: string): Promise<User> {
    return await getRepository(User).findOne({ id })
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(@Body() requestBody: UserCreationRequest): Promise<void> {
    await getRepository(User)
    this.setStatus(201)
    return Promise.resolve()
  }
}
