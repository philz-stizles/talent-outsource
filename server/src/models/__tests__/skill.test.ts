import Skill from '@src/models/skill';

describe('Skill Model', () => {
  it('has all the required attributes', () => {
    const requiredAttributes = ['name'];

    const modelAttributes = Object.keys(Skill.schema.paths);

    const hasRequiredAttributes = requiredAttributes.every(requiredAttribute =>
      modelAttributes.includes(requiredAttribute)
    );

    expect(hasRequiredAttributes).toEqual(true);
  });
});
