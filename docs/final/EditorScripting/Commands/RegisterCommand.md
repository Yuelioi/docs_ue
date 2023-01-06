# RegisterCommand

在给定的上下文和集合中注册一个命令。该集合必须事先注册。

目标是UICommands脚本子系统

## 图示

![]($-20221218-18483340.png)

## Inputs

在。执行。

目标。UICommands Scripting Subsystem Object Reference。

命令信息。脚本命令信息结构。命令信息，如名称、标签、描述和输入的字符串。

在执行命令时。委托。处理该命令时要执行的委托。

覆盖现有的。布尔值。是否应覆盖具有匹配上下文、集合和名称的现有命令。

## Outputs

出：执行。

返回值。布尔值。该命令是否被成功注册。
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

