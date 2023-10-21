export const fetcher = async () => {
  try {
    const response = await fetch('');

    if (!response.ok) {
      new Error('An error occurred while creating the event');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
