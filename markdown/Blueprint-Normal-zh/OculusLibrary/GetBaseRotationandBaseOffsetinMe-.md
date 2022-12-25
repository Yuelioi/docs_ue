# GetBaseRotationandBaseOffsetinMe-

返回当前的基座旋转和基座偏移。基准偏移量是当前使用的基准位置偏移量，之前通过.ResetPosition或SetBasePositionOffset调用设置的。它表示一个将HMD的位置转换为(0,0,0)点的矢量，单位是米。矢量的轴与虚幻中的相同。X-向前，Y-向右，Z-向上。

目标是Oculus功能库

## 图示

![]($-20221218-20150080.png)

## Inputs

## Outputs

外轮回。旋转器。(out) 具有基本旋转的旋转器对象。

出基地偏移量，单位：米。矢量。(out) 基准位置偏移，向量，以米为单位。
