export default {
  calledOn(received, context) {
    const instance = received.mock.instances[0];
    const instanceProto = instance.constructor.prototype;
    const contextProto = context.constructor.prototype;
    let pass;
    let message;
    if (!instance) {
      pass = false;
      message = () => {
        this.utils.matcherHint('.calledOn') +
          '\n\n' +
          `Expected stub to be called on\n` +
          ` ${this.utils.printExpected(context)}\n` +
          `Received:\n` +
          `  ${this.utils.printReceived(instance)}`;
      };

    } else if (Object.is(instanceProto,contextProto)) {
      message = () =>
        this.utils.matcherHint('not.calledOn') +
          '\n\n' +
          `Expected stub to not be called on\n` +
          ` ${this.utils.printExpected(context)}\n` +
          `Received:\n` +
          `  ${this.utils.printReceived(instance)}`;
      pass = true;
    } else {
      message = () =>
        this.utils.matcherHint('.calledOn') +
          '\n\n' +
          `Expected stub to be called on\n` +
          ` ${this.utils.printExpected(context)}\n` +
          `Received:\n` +
          `  ${this.utils.printReceived(instance)}`;
      pass = false;
    }
    return {
      pass: pass,
      message: message
    };
  }
};
