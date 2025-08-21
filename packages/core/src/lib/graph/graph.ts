import { Integration } from '@polyrun/contracts';
import type { TaskGraph, TaskGraphAbstractFactory } from '@polyrun/contracts';

export async function createTaskGraphAsync(command: string, integration: Integration): Promise<TaskGraph> {
  const factory = taskGraphAbstractFactory(command, integration);
  const taskGraph = await factory(command);

  return taskGraph;
}

const taskGraphAbstractFactory: TaskGraphAbstractFactory = (command, integration) => {
  switch (integration) {
    case Integration.NX:
      return async () => {
        const { createTaskGraphAsync } = await import('@polyrun/nx');
        return createTaskGraphAsync(command);
      };
    case Integration.TURBOREPO:
      throw new Error(`Turborepo integration is not yet supported`);
    default:
      throw new Error(`Unknown integration: ${integration}`);
  }
};