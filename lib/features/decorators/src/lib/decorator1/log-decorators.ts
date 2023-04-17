export const logClass = (target: object): void => {
  console.log(`Class decorator: ${target}`);
};

export const logMethod = (target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;
  descriptor.value = (...args: Array<unknown>) => {
    const targetName = target.constructor.name;
    const result = originalMethod.apply(this, args);
    console.log(`Method decorator: ${targetName} ${JSON.stringify(args)} -> ${JSON.stringify(result)}`);
    return result;
  };
  return descriptor;
};

export const logProperty = (target: object, propertyName: string): void => {
  let value: unknown;
  const setter = (newValue: unknown): void => {
    console.log(`Property decorator: Setting value ${newValue} to property ${propertyName}`);
    value = newValue;
  };
  const getter = (): unknown => {
    console.log(`Property decorator: getting value ${value} to property ${propertyName}`);
    return value;
  };
  Object.defineProperty(target, propertyName, {
    get: getter,
    set: setter
  });
};

export const logParameter = (target: object, methodName: string, parameterIndex: number): void => {
  console.log(`Parammeter decorator: ${methodName} ${parameterIndex}`);
};
