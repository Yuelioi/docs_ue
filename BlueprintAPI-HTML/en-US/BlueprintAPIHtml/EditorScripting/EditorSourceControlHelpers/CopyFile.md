# CopyFile

Use currently set source control provider to copy a file.. Note: Blocks until action is complete.

Target is Source Control Helpers

## 图示

![]($-20221218-18500450.png)

## Inputs

In: Exec.

In Source File: String. Source file string to copy from - can be either fully qualified path, relative path, long package name, asset path or export text path (often stored on clipboard).

In Dest File: String. Source file string to copy to - can be either fully qualified path, relative path, long package name, asset path or export text path (often stored on clipboard). If package, then uses same extension as source file..

Silent: Boolean. if false (default) then write out any error info to the Log. Any error text can be retrieved by LastErrorMsg() regardless..  

## Outputs

Out: Exec.

Return Value: Boolean. true if succeeded, false if failed and can call LastErrorMsg() for more info..

