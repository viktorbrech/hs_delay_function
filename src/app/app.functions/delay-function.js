
exports.main = async (context = {}) => {

  const sec_delay = 10;

  await new Promise((resolve) => setTimeout(resolve, sec_delay * 1000));

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Success after ${sec_delay} seconds delay.`)
  }

  return response;
};
