export const mapperCustomer = (values: Record<string, any>) => {
  return {
    id: values.viewer?.id,
    name: values.viewer?.name,
    balance: values.viewer?.balance,
  };
};
