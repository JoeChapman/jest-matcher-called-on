import calledOnModule from '../../';
import * as utils from 'jest-matcher-utils';

describe('jest-matcher-called-on', () => {

  test('exports the calledOnModule with the calledOn function', () => {
    expect(calledOnModule).toHaveProperty('calledOn',
      expect.any(Function)
    );
  });

  describe('expect.extend(calledOnModule)', () => {

    let fn;
    let context;
    let context2;

    beforeEach(() => {
      fn = jest.fn();
      context = new (jest.fn())();
      context2 = new (jest.fn())();
    });

    test('passes when the function was called as a method of the given context', () => {
      fn.call(context);
      expect.extend(calledOnModule);
      expect(fn).calledOn(context);
    });

    test('fails when the function was not called as a method of the given context', () => {
      fn.call(context2);
      expect.extend(calledOnModule);
      expect(fn).not.calledOn(context);
    });

  });

  describe('message', () => {

    let fn;
    let context1;
    let context2;
    const received = {
      mock: {
        instances: []
      }
    };

    beforeEach(() => {
      fn = jest.fn();
      context1 = new (jest.fn())();
      context2 = new (jest.fn())();
      received.mock.instances = [context2];
      // because the message is called as a method of calledOnModule
      // this means we can use the utils in message execution context
      calledOnModule.utils = utils;
    });

    test('contains `Expected stub to be called on` for positive falures', () => {
      expect(calledOnModule.calledOn(received, context1).message())
        .toContain('Expected stub to be called on');
    });

    test('contains `Expected stub to not be called on` for inverse falures', () => {
      expect(calledOnModule.calledOn(received, context2).message())
        .toContain('Expected stub to not be called on');
    });
  });

});
