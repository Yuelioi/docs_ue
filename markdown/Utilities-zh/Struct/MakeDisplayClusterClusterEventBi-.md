# MakeDisplayClusterClusterEventBi-

添加一个节点，从其成员中创建一个'DisplayClusterClusterEventBinary'。

## 图示

![]($-20221218-14504856.png)

## Inputs

事件标识。整数。Event Id:.事件ID（用于丢弃过时的事件）。

事件数据。字节数组。事件数据：。二进制事件数据。

是系统事件。'True'是保留给N个显示内部的。Boolean.是系统事件：。是nDisplay内部事件（对终端用户来说不应该是真的）。

重复时应丢弃：布尔值。重复时应丢弃：。如果收到新的事件，具有相同名称/类型/类别（对于JSON）或ID（对于二进制）的旧事件应被丢弃。  

## Outputs

显示群集事件的二进制。显示集群集群事件二进制结构。
