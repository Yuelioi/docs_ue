# SetAngularDriveMode

在SLERP和Twist And Swing之间切换角度驱动模式

目标是物理约束组件

## 图示

![]($-20221218-20210022.png)

## Inputs

在。执行。

目标。物理约束组件对象参考。

驱动模式。EAngularDriveMode枚举。要使用的角度驱动模式。SLERP使用最短球面路径，但如果任何角度约束被锁定，则无法工作。扭转和摆动将路径分解为不同的角度自由度，但可能会出现万向节锁定。  

## Outputs

出：执行。
