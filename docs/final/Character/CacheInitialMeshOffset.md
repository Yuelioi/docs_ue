# CacheInitialMeshOffset

缓存网格的偏移量。当网格以滞后平滑方式进行偏移时，该值将作为网络平滑插值的目标。在初始化过程中会自动调用；如果你打算改变默认的网格偏移量，请在运行时调用。参见。GetBaseTranslationOffset(), GetBaseRotationOffset()

目标是字符

## 图示

![]($-20221218-18153520.png)

## Inputs

在。执行。

目标。角色对象参考。

网格相对位置。Vector（向量）。

网格相对旋转。旋转器。 

## Outputs

输出。执行：执行。

Cache mesh offset from capsule. This is used as the target for network smoothing interpolation, when the mesh is offset with lagged smoothing.. This is automatically called during initialization; call this at runtime if you intend to change the default mesh offset from the capsule.. See: GetBaseTranslationOffset(), GetBaseRotationOffset()

Target is Character

## 图示

![]($-20221218-18153520.png)

## Inputs

In: Exec.

Target: Character Object Reference.

Mesh Relative Location: Vector.

Mesh Relative Rotation: Rotator.  

## Outputs

Out: Exec.

