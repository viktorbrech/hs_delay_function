exports.main = async (context = {}) => {
  const response = `This is coming from main!`;
  try {
    return response;
  } catch (error) {
    return error;
  }
};
