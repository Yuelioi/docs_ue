# MakeHairSimulationConstraints

添加一个节点，从其成员中创建一个 "HairSimulationConstraints"。

## 图示

![]($-20221218-14552140.png)

## Inputs

弯曲阻尼。Float（单精度）。弯曲阻尼：。弯曲约束的阻尼在0和1之间。

弯曲刚度。Float（单精度）。弯曲刚度：。弯曲约束的刚度，单位为GPa。

弹性阻尼。Float（单精度）。伸展阻尼：。拉伸约束的阻尼在0和1之间。

伸展的僵硬度。Float（单精度）。Stretch Stiffness:.拉伸约束的刚度，单位为GPa。

静态摩擦。Float（单精度）。静态摩擦：。用于对物理资产进行碰撞的静态摩擦。

动能摩擦。浮动（单精度）。Kinetic Friction:.用于对物理资产进行碰撞的动能摩擦。

钢绞线粘度。Float（单精度）。Strands Viscosity:.粘度参数，介于0和1之间，将用于自我碰撞。

碰撞半径。Float（单精度）。碰撞半径：。对物理资产进行碰撞检测时使用的半径。  

## Outputs

头发模拟约束。头发模拟约束结构。
