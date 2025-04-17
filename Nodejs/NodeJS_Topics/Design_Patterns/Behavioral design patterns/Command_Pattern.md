Command Pattern
The Command Pattern encapsulates actions as objects, enabling the separation of actions from their execution. It involves three primary components:

Command: Represents an operation to be performed, encapsulating the necessary information for execution.
Receiver: The object that knows how to perform the actions associated with the command.
Invoker: Responsible for triggering the command’s execution, often without knowing the specific command type.
This pattern promotes flexibility, decoupling, and undo/redo functionality in your applications.

Key Use Cases
Asynchronous operations: Queuing, scheduling, and executing commands asynchronously.
Undo/redo functionality: Creating a history of commands for reversibility.
Transactions: Encapsulating operations within a transaction for atomic execution.
Event handling: Representing actions triggered by events in a decoupled manner.
Customizable workflows: Defining sequences of commands for flexible execution.
Code Samples
Basic Command Implementation

class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    // Implementation deferred to subclasses
  }
}

class LightOnCommand extends Command {
  execute() {
    this.receiver.turnOn();
  }
}

class Light {
  turnOn() {
    console.log('Light turned on');
  }
}

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
lightOnCommand.execute(); // Output: "Light turned on"
Using a Command Queue

class CommandQueue {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach(command => command.execute());
  }
}
Pros
Decoupling: Separates actions from their execution, promoting loose coupling.
Flexibility: Commands can be queued, stored, or passed around for versatile execution.
Extensibility: New commands can be added without modifying existing code.
Undo/redo: Enables reversing actions by maintaining a command history.
Testability: Commands can be tested in isolation.
Cons
Increased complexity: Adds a layer of abstraction that might complicate simple scenarios.
Overhead: Creation and management of command objects can incur overhead.