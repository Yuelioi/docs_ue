# EndTransaction

Attempt to end the current undo transaction. Only successful if the transaction's action counter is 1.. Note: Only available in the editor.

Target is Kismet System Library

## 图示

![]($-20221218-21141857.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Return Value: Integer. The number of active actions when EndTransaction was called (a value of 1 indicates that the transaction was successfully closed), or -1 on failure..

