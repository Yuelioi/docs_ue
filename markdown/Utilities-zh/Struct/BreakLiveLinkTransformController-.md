# BreakLiveLinkTransformController-

添加一个节点，将'LiveLinkTransformControllerData'分解成其成员字段

## 图示

![]($-20221218-14393386.png)

## Inputs

Live Link Transform Controller数据。Live Link Transform Controller数据结构（通过参考）。  

## Outputs

世界转换。布尔型。世界转换：。设置组件在世界空间和本地参考框架中的变换。

扫荡。布尔型。扫频：。我们是否清扫到目标位置，沿途触发重叠，如果有东西阻挡，就在目标位置前停止。只有根组件被清扫，并检查是否有阻挡碰撞，子组件的移动不被清扫。如果碰撞是关闭的，这没有影响。

传送。布尔型。Teleport:.我们是否传送物理状态（如果此对象的物理碰撞被启用）。如果是true，这个物体的物理速度是不变的（所以布娃娃部分不受位置变化的影响）。如果是假的，物理学速度会根据位置的变化而更新（影响布娃娃的部分）。如果CCD是打开的，并且没有传送，这将影响沿整个扫描体积的物体。
