# ExecutePythonCommand_Advanced

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

