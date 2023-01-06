# BreakHitResult

从一个HitResult中提取数据。

目标是游戏规则统计学

## 图示

![]($-20221218-18183642.png)

## Inputs

命中：命中结果结构（通过引用）。源HitResult。 

## Outputs

阻断命中：布尔值。如果有一个阻断命中，则为真，否则为假。

初始重合。布尔值。如果击中开始于初始重叠，则为真。在这种情况下，其他一些值应该有不同的解释。时间将为0，ImpactPoint将等于Location，法线将相等，表示一个穿透矢量。

时间。浮点数（单精度）。撞击的'时间'，如果有撞击的话，沿轨迹方向的范围为[0.0到1.0]，表示开始和结束之间的时间。如果没有击中，则等于1.0。

距离。浮点数（单精度）。从TraceStart到世界空间中的Location的距离。如果有初始重叠（追踪在另一个碰撞物体内开始），该值为0。

位置。矢量。碰撞点在世界空间中的位置。如果这是一个扫射形状的测试，这是我们可以在世界中放置形状的位置，它不会穿透。

撞击点。向量。跟踪形状与被击中物体表面的实际接触点的位置。在初始重合的情况下等于位置。

法线。向量。被击中物体在世界空间中的法线，对于被扫描的物体而言（例如，对于球体追踪而言，这指向球体中心）。对于直线测试，等同于冲击法线。

撞击法线。向量。在世界空间中被击中的物体的法线，对于被扫射的物体。

Phys Mat: 物理材料物体参考。被击中的物理材料。必须在查询参数中设置bReturnPhysicalMaterial为true才能返回。

Hit Actor: Actor对象参考。被追踪击中的角色。

Hit Component: Primitive Component对象参考。被追踪到的原始组件。

Hit Bone Name: 名称。被击中的骨骼名称（仅当我们击中一个骨骼网格时有效）。

Bone Name（骨头名称）。名称。被击中的骨骼名称（仅当我们击中骨骼网格时有效）。

Hit Item: 整数。基元特有的数据，记录了基元中哪个项被击中。

元素索引。整数。如果与具有多个部分的基元相撞，那么被撞的部分的索引。

面部索引。整数。如果与三面体或景观相撞，则是被撞的面的索引。

轨迹起点。矢量。

追踪结束。向量。

Extracts data from a HitResult.

Target is Gameplay Statics

## 图示

![]($-20221218-18183642.png)

## Inputs

Hit: Hit Result Structure (by ref). The source HitResult..  

## Outputs

Blocking Hit: Boolean. True if there was a blocking hit, false otherwise..

Initial Overlap: Boolean. True if the hit started in an initial overlap. In this case some other values should be interpreted differently. Time will be 0, ImpactPoint will equal Location, and normals will be equal and indicate a depenetration vector..

Time: Float (single-precision). 'Time' of impact along trace direction ranging from [0.0 to 1.0) if there is a hit, indicating time between start and end. Equals 1.0 if there is no hit..

Distance: Float (single-precision). The distance from the TraceStart to the Location in world space. This value is 0 if there was an initial overlap (trace started inside another colliding object)..

Location: Vector. Location of the hit in world space. If this was a swept shape test, this is the location where we can place the shape in the world where it will not penetrate..

Impact Point: Vector. Location of the actual contact point of the trace shape with the surface of the hit object. Equal to Location in the case of an initial overlap..

Normal: Vector. Normal of the hit in world space, for the object that was swept (e.g. for a sphere trace this points towards the sphere's center). Equal to ImpactNormal for line tests..

Impact Normal: Vector. Normal of the hit in world space, for the object that was hit by the sweep..

Phys Mat: Physical Material Object Reference. Physical material that was hit. Must set bReturnPhysicalMaterial to true in the query params for this to be returned..

Hit Actor: Actor Object Reference. Actor hit by the trace..

Hit Component: Primitive Component Object Reference. PrimitiveComponent hit by the trace..

Hit Bone Name: Name. Name of the bone hit (valid only if we hit a skeletal mesh)..

Bone Name: Name. Name of the trace bone hit (valid only if we hit a skeletal mesh)..

Hit Item: Integer. Primitive-specific data recording which item in the primitive was hit.

Element Index: Integer. If colliding with a primitive with multiple parts, index of the part that was hit..

Face Index: Integer. If colliding with trimesh or landscape, index of face that was hit..

Trace Start: Vector.

Trace End: Vector.

