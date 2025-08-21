import { Integration } from "./integrations";

export interface TaskGraph {
  tasks: Task[];
}

export type TaskId = string;

export interface Task {
  id: TaskId;
  command: string;
  dependsOn: TaskId[];
}


export type TaskGraphFactory = (command: string) => Promise<TaskGraph>;
export type TaskGraphAbstractFactory = (command: string, integration: Integration) => TaskGraphFactory;