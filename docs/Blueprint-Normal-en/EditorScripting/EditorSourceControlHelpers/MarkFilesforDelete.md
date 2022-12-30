# MarkFilesforDelete

Use currently set source control provider to remove files from source control and delete the files.. Note: Blocks until action is complete.

Target is Source Control Helpers

## 图示

![]($-20221218-18501569.png)

## Inputs

In: Exec.

In Files: Array of Strings.

Silent: Boolean. if false (default) then write out any error info to the Log. Any error text can be retrieved by LastErrorMsg() regardless..  

## Outputs

Out: Exec.

Return Value: Boolean. true if succeeded, false if failed and can call LastErrorMsg() for more info..

