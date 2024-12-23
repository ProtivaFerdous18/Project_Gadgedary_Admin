import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';


describe('LoginController', () => {
  let loginController: LoginController;

  beforeEach(async () => {
    const login: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [LoginService],
    }).compile();

    loginController = login.get<LoginController>(LoginController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(loginController.getLogin()).toBe('Hello World!');
    });
  });
});
