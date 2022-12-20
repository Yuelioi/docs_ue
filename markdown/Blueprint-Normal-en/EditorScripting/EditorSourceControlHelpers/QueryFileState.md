# QueryFileState

Use currently set source control provider to query a file's source control state.. Note: Blocks until action is complete.

Target is Source Control Helpers

## 图示

![]($-20221218-18501705.png)

## Inputs

In: Exec.

In File: String. The file to query - can be either fully qualified path, relative path, long package name, asset path or export text path (often stored on clipboard).

Silent: Boolean. if false (default) then write out any error info to the Log. Any error text can be retrieved by LastErrorMsg() regardless..  

## Outputs

Out: Exec.

Return Value: Source Control State Structure. Source control state - see USourceControlState. It will have bIsValid set to false if it could not have its values set..

