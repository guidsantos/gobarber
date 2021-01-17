import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';
import FakeUsersTokensRepository from '../repositories/fakes/FakeUsersTokensRepository';

let fakeUsersRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;
let fakeUsersTokensRepository: FakeUsersTokensRepository;
let sendForgotPassowordEmailService: SendForgotPasswordEmailService;

describe('SendForgotPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUsersTokensRepository = new FakeUsersTokensRepository();

    sendForgotPassowordEmailService = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUsersTokensRepository,
    );
  });

  it('should be able recover the password using the email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'legolas junior',
      email: 'legolas.ba@gmail.com',
      password: '123123',
    });

    await sendForgotPassowordEmailService.execute({
      email: 'legolas.ba@gmail.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover a non-existing user password', async () => {
    await expect(
      sendForgotPassowordEmailService.execute({
        email: 'legolas.ba@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgot password token', async () => {
    const generateToken = jest.spyOn(fakeUsersTokensRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'legolas junior',
      email: 'legolas.ba@gmail.com',
      password: '123123',
    });

    await sendForgotPassowordEmailService.execute({
      email: 'legolas.ba@gmail.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
