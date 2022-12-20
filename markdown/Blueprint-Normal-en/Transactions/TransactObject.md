# TransactObject

Notify the current transaction (if any) that this object is about to be modified and should be placed into the undo buffer.. Note: Internally this calls Modify on the given object, so will also mark the owner package dirty.. Note: Only available in the editor.

Target is Kismet System Library

## 图示

![]($-20221218-21142076.png)

## Inputs

In: Exec.

Object: Object Reference. The object that is about to be modified..  

## Outputs

Out: Exec.

