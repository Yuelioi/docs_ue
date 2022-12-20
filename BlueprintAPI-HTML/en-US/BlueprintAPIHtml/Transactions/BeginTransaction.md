# BeginTransaction

Begin a new undo transaction. An undo transaction is defined as all actions which take place when the user selects "undo" a single time.. Note: If there is already an active transaction in progress, then this increments that transaction's action counter instead of beginning a new transaction.. Note: You must call TransactObject before modifying each object that should be included in this undo transaction.. Note: Only available in the editor.

Target is Kismet System Library

## 图示

![]($-20221218-21141632.png)

## Inputs

In: Exec.

Context: String. The context for the undo session. Typically the tool/editor that caused the undo operation..

Description: Text. The description for the undo session. This is the text that will appear in the "Edit" menu next to the Undo item..

Primary Object: Object Reference. The primary object that the undo session operators on (can be null, and mostly is)..  

## Outputs

Out: Exec.

Return Value: Integer. The number of active actions when BeginTransaction was called (values greater than 0 indicate that there was already an existing undo transaction in progress), or -1 on failure..

