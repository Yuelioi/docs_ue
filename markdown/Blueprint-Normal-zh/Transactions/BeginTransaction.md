# BeginTransaction

开始一个新的撤销交易。撤销交易的定义是：当用户选择 "撤销 "一次时发生的所有行动。注意：如果已经有一个正在进行的事务，那么这将增加该事务的动作计数器，而不是开始一个新的事务。注意：你必须在修改应该包括在这个撤销事务中的每个对象之前调用TransactObject。注意：只在编辑器中可用。

目标是Kismet系统库

## 图示

![]($-20221218-21141632.png)

## Inputs

在。执行。

语境。字符串。撤销会话的背景。通常是引起撤消操作的工具/编辑器。

描述。文本。撤销会话的描述。这是出现在 "编辑 "菜单中撤消项目旁边的文字。

主要对象。对象参考。撤销会话操作者的主要对象（可以是空的，大部分是）。  

## Outputs

出：执行。

返回值。整数。当调用BeginTransaction时，正在进行的行动的数量（大于0的值表示已经有一个正在进行的撤销交易），或者失败时为-1。
