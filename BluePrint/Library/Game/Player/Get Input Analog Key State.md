返回给定键/按钮的类比值。如不支持类比，则返回 1 作为下、0 作为上。

## 示例

按 Z 返回 1.0，不按返回 0.0

关卡蓝图里

```ad-tip

在 Character 或 Pawn 上，可以使用 Get Controller 并将其 cast 为 PlayerController

```


![[../../../../../_Config/Attatchment/Pasted image 20220427082601.png]]


角色蓝图里（没验证）

![[../../../../../_Config/Attatchment/Pasted image 20220427083837.png]]