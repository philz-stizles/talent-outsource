import config from '@src/config';
import logger from '@src/config/logger';
import nodemailer from 'nodemailer';

// Create a transporter - find a service that nodemailer works with and retrieve their config for host, port etc
// e.g for prod sendgrid, mailgun, AWS SES
// e.g for dev mailtrap to fake emails
const transporter = nodemailer.createTransport(config.email.smtp);
if (config.env !== 'test') {
  transporter
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() =>
      logger.warn(
        'Unable to connect to email server. Make sure you have configured the SMTP options in .env'
      )
    );
}

type IMailOptions = {
  from: string;
  to: string;
  subject: string;
  message: string;
};

export const sendPlainEmail = async ({
  from,
  to,
  subject,
  message,
}: IMailOptions): Promise<void> => {
  await transporter.sendMail({ from, to, subject, text: message });
};

export const sendHTMLEmail = async ({
  from,
  to,
  subject,
  message,
}: IMailOptions): Promise<void> => {
  await transporter.sendMail({ from, to, subject, html: message });
};
