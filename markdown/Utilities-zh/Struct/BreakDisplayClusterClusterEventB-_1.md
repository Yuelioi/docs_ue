# BreakDisplayClusterClusterEventB-_1

添加一个节点，将 "DisplayClusterClusterEventBinary "分解成其成员字段。

## 图示

![]($-20221218-14342406.png)

## 输入

显示群集事件二进制。Display Cluster Cluster Event Binary Structure (by ref).  

## Outputs

事件标识。整数。Event Id:. 事件ID（用于丢弃过时的事件）。

事件数据。字节数组。事件数据：。二进制事件数据。

是系统事件。'True'是保留给N个显示内部的。Boolean. 是系统事件：。是nDisplay内部事件（对终端用户来说不应该是真的）。

Should Discard On Repeat（重复时应丢弃）：布尔值。Should Discard on Repeat:.重复时应丢弃：。如果收到新的事件，具有相同名称/类型/类别（对于JSON）或ID（对于二进制）的旧事件应被丢弃。
