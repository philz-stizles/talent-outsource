import Joi from 'joi';

const create = {
  body: Joi.object().keys({
    name: Joi.string().required()
  }),
};

const update = {
  body: Joi.object().keys({
    name: Joi.string().required()
  }),
};

export default {
  create,
  update,
};
