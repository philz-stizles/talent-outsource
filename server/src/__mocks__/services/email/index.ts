const sendOTP = jest
  .fn()
  .mockImplementation((email: string, otp: string) => {});

export default { sendOTP };


// export const stripe = {
//   charges: {
//     create: jest.fn().mockResolvedValue({}),
//   },
// };