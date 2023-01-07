# TransactObject

通知当前事务（如果有的话），这个对象即将被修改，应该被放入撤销缓冲区。注意：在内部，这将在给定的对象上调用修改，所以也将标记所有者包脏。注意：只在编辑器中可用。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21142076.png)

## Inputs

在。执行。

对象。对象参考。即将被修改的对象。

## Outputs

出：执行。

<hr>

Notify the current transaction (if any) that this object is about to be modified and should be placed into the undo buffer.. Note: Internally this calls Modify on the given object, so will also mark the owner package dirty.. Note: Only available in the editor.

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21142076.png)

## Inputs

In: Exec.

Object: Object Reference. The object that is about to be modified..

## Outputs

Out: Exec.
