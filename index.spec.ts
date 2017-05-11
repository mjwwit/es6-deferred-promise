import 'mocha';
import * as chai from 'chai';
import { expect } from 'chai';
import { spy } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { Deferred } from './index';
chai.use(sinonChai);

describe('A Deferred', () => {
  it('should have a method to resolve a promise', async () => {
    const deferred = new Deferred<string>();
    const promise = deferred.promise;

    deferred.resolve('success');

    const result = await promise;

    expect(result).to.equal('success');
  });

  it('should have a method to reject reject a promise', async () => {
    const deferred = new Deferred<string>();
    const failureSpy = spy(r => Promise.reject(r));
    const promise = deferred.promise
      .catch(failureSpy);

    deferred.reject('failure');

    try {
      await promise;
    } catch(e) {
      expect(e).to.equal('failure');
    }
    expect(failureSpy).to.have.been.calledOnce;
    expect(failureSpy).to.have.been.calledWith('failure');
  });
});
