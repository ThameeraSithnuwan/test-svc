export const getUserOrders = async (userId: string): Promise<any> => {
  return "users";
};

// TODO Pub sub should be implemented here
export const createUserOrder = async (userId: string): Promise<any> => {
  return "user created";
};

export const deleteOrderById = async (orderId: string): Promise<any> => {
  return "order deleted";
};

export const deleteAllOrders = async (userId: string): Promise<any> => {
  return "all order deleted";
};
