export const CheckCondition = (name: string) => {
  return ["condition", "operator", "operatorItem", "combiner"].find((item) =>
    name.startsWith(`${item}-`)
  );
};
