# MakeRigControlSettings

添加一个节点，从其成员中创建一个 "RigControlSettings"。

## 图示

![]($-20221218-15001468.png)

## Inputs

控制类型。ERigControlType枚举。控制类型。

显示名称。名字。显示名称。

主轴：ERigControlAxis枚举。主轴：.用于浮动控制的主轴。

可动画化。Boolean.Animatable:.如果该控件在序列器中是可动画的。

启用的极限。Rig Control Limit Enabled结构的阵列。Limit Enabled:.如果控制有限制，则为真。

绘制限制。Boolean.绘制极限值：。如果要在调试时画出限制，则为真。要启用这个功能，你需要至少有一个最小和最大的限制打开。

最小值。钻机控制值结构。最小值：。控制的最小极限值。

最大值。钻机控制值结构。最大值：。控件值的最大极限。

形状已启用。Boolean.Shape Enabled：.如果形状在3D中被启用，则设置为真。

形状的可见性。Boolean.Shape Visible:.如果该形状目前在3D中是可见的，则设置为true。

形状名称。名称.形状名称：。这是可选的UI设置--这并不意味着总是使用这个，但操纵层使用这个是可选的。

形状颜色：线性颜色结构。形状的颜色。

是瞬态控制。布尔型。是瞬时控制：。如果该控件是瞬时的，并且只在控制装置编辑器中可见。  

## Outputs

钻机控制设置。钻机控制设置结构。
