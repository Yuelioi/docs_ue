# BeginTransaction

开始一个新的撤销交易。撤销交易的定义是：当用户选择 "撤销 "一次时发生的所有行动。注意：如果已经有一个正在进行的事务，那么这将增加该事务的动作计数器，而不是开始一个新的事务。注意：你必须在修改应该包括在这个撤销事务中的每个对象之前调用 TransactObject。注意：只在编辑器中可用。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21141632.png)

## Inputs

在。执行。

语境。字符串。撤销会话的背景。通常是引起撤消操作的工具/编辑器。

描述。文本。撤销会话的描述。这是出现在 "编辑 "菜单中撤消项目旁边的文字。

主要对象。对象参考。撤销会话操作者的主要对象（可以是空的，大部分是）。

## Outputs

出：执行。

返回值。整数。当调用 BeginTransaction 时，正在进行的行动的数量（大于 0 的值表示已经有一个正在进行的撤销交易），或者失败时为-1。

<hr>

Begin a new undo transaction. An undo transaction is defined as all actions which take place when the user selects "undo" a single time.. Note: If there is already an active transaction in progress, then this increments that transaction's action counter instead of beginning a new transaction.. Note: You must call TransactObject before modifying each object that should be included in this undo transaction.. Note: Only available in the editor.

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21141632.png)

## Inputs

In: Exec.

Context: String. The context for the undo session. Typically the tool/editor that caused the undo operation..

Description: Text. The description for the undo session. This is the text that will appear in the "Edit" menu next to the Undo item..

Primary Object: Object Reference. The primary object that the undo session operators on (can be null, and mostly is)..

## Outputs

Out: Exec.

Return Value: Integer. The number of active actions when BeginTransaction was called (values greater than 0 indicate that there was already an existing undo transaction in progress), or -1 on failure..
