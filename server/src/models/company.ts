import { Schema, model } from 'mongoose';

const CompanySchema = new Schema({
  name: String,
  description: String,
});

const Company = model('Company', CompanySchema);

export default Company;
