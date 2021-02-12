interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'dev@gdsaiadev.awsapps.com',
      name: 'Dev GDSIA Gobarber',
    },
  },
} as IMailConfig;
