const ResKey = {
  data: "data",
  message: "message",
  stack: "stack",
  statusCode: "statusCode",
  userInfo: "userInfo",
  accessToken: "atk",
  status: "status", // 1-success, 0-fail
};

const RESPONSE = (data, message) => {
  const result = {};
  if (data) result.data = data;
  if (message) result.message = message;

  return result;
};
export { ResKey, RESPONSE };
