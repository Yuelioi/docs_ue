# ExecutePythonCommand_Advanced

执行给定的Python命令。

目标是Python脚本库

## 图示

![]($-20221218-20311295.png)

## Inputs

在。执行。

Python命令。字符串。要运行的命令。这可以是Python的文字代码，也可以是你想运行的文件（有可选参数）。

执行模式。EPythonCommandExecutionMode枚举。控制用于执行命令的模式。

文件执行范围。EPythonFileExecutionScope枚举。控制执行Python文件时使用的范围。  

## Outputs

出：执行。

命令结果。字符串。运行该命令的结果。成功时，对于EvaluateStatement模式，这将是运行命令的实际结果，在所有其他情况下都是None。如果失败，这将是错误信息（通常是Python异常跟踪）。

日志输出。Python日志输出条目结构的数组。运行命令时捕获的日志输出...

返回值。布尔值。如果命令运行成功则为true，如果有错误则为false。

Execute the given Python command.

Target is Python Script Library

## 图示

![]($-20221218-20311295.png)

## Inputs

In: Exec.

Python Command: String. The command to run. This may be literal Python code, or a file (with optional arguments) that you want to run..

Execution Mode: EPythonCommandExecutionMode Enum. Controls the mode used to execute the command..

File Execution Scope: EPythonFileExecutionScope Enum. Controls the scope used when executing Python files..  

## Outputs

Out: Exec.

Command Result: String. The result of running the command. On success, for EvaluateStatement mode this will be the actual result of running the command, and will be None in all other cases. On failure, this will be the error information (typically a Python exception trace)..

Log Output: Array of Python Log Output Entry Structures. The log output captured while running the command..

Return Value: Boolean. true if the command ran successfully, false if there were errors..

