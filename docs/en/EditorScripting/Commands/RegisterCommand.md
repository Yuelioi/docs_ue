# RegisterCommand

Registers a command within the given context and set.. The set must be registered beforehand.

Target is UICommands Scripting Subsystem

## 图示

![]($-20221218-18483340.png)

## Inputs

In: Exec.

Target: UICommands Scripting Subsystem Object Reference.

Command Info: Scripting Command Info Structure. The command infos such as name, label, description and input chord..

On Execute Command: Delegate. The delegate to be executed for handling this command..

Override Existing: Boolean. Whether existing command with matching context, set and name should be overriden.  

## Outputs

Out: Exec.

Return Value: Boolean. Whether the command was succesfully registered.

