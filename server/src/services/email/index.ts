import config from '@src/config';
import * as Mailer from './node-mailer';

const from = config.email.from;
const clientBaseUrl = config.clientBaseUrl;

const sendEmailVerification = async (email: string, token: string) => {
  const subject = 'Email Verification';
  const verificationEmailUrl = `${clientBaseUrl}/verify-email?token=${token}`;
  const message = `Dear ${email},
To verify your email, click on this link: ${verificationEmailUrl}
`;
  await Mailer.sendPlainEmail({ from, to: email, subject, message });
};

const sendOTP = async (email: string, otp: string) => {
  const subject = 'Email Verification';
  const message = `Dear ${email},
  Congratulations for creating a TalentOutsource account.
Please find your confirmation code below -

${otp} 

Enter the code into the open browser window to confirm your email address.

Best,
Team TalentOutsource.
`;
  await Mailer.sendPlainEmail({ from, to: email, subject, message });
};

const sendResetPassword = async (email: string, token: string) => {
  const subject = 'Reset password';
  const resetPasswordUrl = `${clientBaseUrl}/reset-password?token=${token}`;
  const message = `Dear ${email},
To reset your password, click on this link: ${resetPasswordUrl}
If you did not request any password resets, then ignore this email.`;
  await Mailer.sendPlainEmail({ from, to: email, subject, message });
};

export default { sendEmailVerification, sendOTP, sendResetPassword };
