import axios from 'axios';

type TechStack = {
  title: string;
  description: string;
};

const endpoint = '/tech-stacks';

export const createTechStack = async (data: TechStack) => {
  try {
    const response = await axios.post(endpoint, data);

    return await response.data;
  } catch (error) {
    throw error;
  }
};

export async function fetchTechStacks(): Promise<TechStack[]> {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
