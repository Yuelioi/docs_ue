# RevertUnchangedFiles

Use currently set source control provider to revert files provided no changes have been made.. Note: Blocks until action is complete.

Target is Source Control Helpers

## 图示

![]($-20221218-18502226.png)

## Inputs

In: Exec.

In Files: Array of Strings. Files to check out - can be either fully qualified path, relative path, long package name, asset path or export text path (often stored on clipboard).

Silent: Boolean. if false (default) then write out any error info to the Log. Any error text can be retrieved by LastErrorMsg() regardless..  

## Outputs

Out: Exec.

Return Value: Boolean. true if succeeded, false if failed and can call LastErrorMsg() for more info..

