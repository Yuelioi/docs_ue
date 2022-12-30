# SpawnEmitterAttached

播放指定的效果，附加在指定的组件之后。当效果完成后，系统将消失。不复制。

目标是游戏规则

## 图示

![]($-20221218-18551342.png)

## Inputs

在。执行。

发射器模板。粒子系统对象参考。要创建的粒子系统。

附加到组件。场景组件对象参考。

附加点名称。名称。在AttachComponent中可选的命名点，用于生成发射器。

位置。矢量。根据LocationType的值，这是一个从附加组件/点开始的相对偏移，或者是一个绝对的世界位置，将被翻译成相对偏移（如果LocationType是KeepWorldPosition）。

Rotation（旋转）。旋转器。取决于LocationType的值，它要么是一个从附加组件/点开始的相对偏移，要么是一个绝对的世界旋转，它将被翻译成一个相对偏移（如果LocationType是KeepWorldPosition）。

Scale（刻度）。矢量。取决于LocationType的值，它要么是一个来自附加组件的相对比例，要么是一个绝对的世界比例，它将被转换为一个相对比例（如果LocationType是KeepWorldPosition）。

位置类型。EAttachLocation枚举。指定Location是相对偏移还是绝对世界位置。

Auto Destroy：布尔值。当粒子系统完成播放时，该组件是否会自动销毁，或者是否可以重新激活。

池化方法。EPSCPoolMethod枚举。用于池化该组件的方法。默认为无。

Auto Activate（自动激活）。Boolean（布尔）。该组件是否在创建时自动激活。

## Outputs

输出。执行。

返回值。粒子系统组件对象参考。