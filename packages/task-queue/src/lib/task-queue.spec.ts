import { taskQueue } from './task-queue';

describe('taskQueue', () => {
  it('should work', () => {
    expect(taskQueue()).toEqual('task-queue');
  });
});
