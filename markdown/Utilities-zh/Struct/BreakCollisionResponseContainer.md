# BreakCollisionResponseContainer

添加一个节点，将'CollisionResponseContainer'分解为其成员字段

## 图示

![]($-20221218-14323500.png)

## Inputs

碰撞响应容器。碰撞响应容器结构（通过引用）。 

## Outputs

世界静态。ECollisionResponse Enum。世界静态：。保留的引擎跟踪通道。注意 - 如果你改变这个（添加/删除/修改），你应该确保它与ECollisionChannel（包括DisplayName）匹配。如果被序列化，它们必须被镜像。

世界动态。ECollisionResponse枚举。世界动态：。0.

卒子。ECollisionResponse Enum. 卒：。1..

可见性。ECollisionResponse Enum. 可见性:. 2.

相机。ECollisionResponse Enum. 摄像机：。3.

Physics Body: ECollisionResponse Enum. 物理体：。4.

车辆。ECollisionResponse Enum. 车辆：。5.

可毁坏。ECollisionResponse Enum. 可毁坏：。6.

发动机跟踪通道1：ECollisionResponse枚举。发动机跟踪通道1：。未指定的引擎跟踪通道。

发动机跟踪通道2：ECollisionResponse Enum。发动机跟踪通道2：. 8.

发动机跟踪通道3：ECollisionResponse Enum。发动机跟踪通道3：. 9.

发动机跟踪通道4：ECollisionResponse Enum。发动机跟踪通道4：. 10.

发动机跟踪通道5：ECollisionResponse Enum。发动机跟踪通道5：. 11.

发动机跟踪通道6：ECollisionResponse枚举。发动机跟踪通道6：. 12.

游戏跟踪通道1：ECollisionResponse Enum. 为了使用这个自定义通道，我们建议在你的本地文件中定义：即#define COLLISION_WEAPON ECC_GameTraceChannel1.并确保你在INI文件中自定义这些：在DefaultEngine.ini中：[/Script/Engine.CollisionProfile]。GameTraceChannel1="Weapon": 同样在INI文件中，你可以通过简单的重新定义来覆盖已定义的碰撞配置文件。注意，在BaseEngine.ini文件中没有定义Weapon，但在Engine中定义了 "Trigger"。+Profiles=(Name="Trigger",CollisionEnabled=QueryOnly,ObjectTypeName=WorldDynamic, DefaultResponse=ECR_Overlap, CustomResponses=((Channel=Visibility, Response=ECR_Ignore), (Channel=Weapon, Response=ECR_Ignore)).

游戏追踪通道2：ECollisionResponse枚举。游戏追踪通道2：。14.

游戏追踪通道3：ECollisionResponse Enum。游戏追踪通道3：. 15.

游戏追踪通道4：ECollisionResponse Enum。游戏追踪通道4：. 16.

游戏追踪通道5：ECollisionResponse Enum。游戏追踪通道5：. 17.

游戏追踪通道6：ECollisionResponse Enum。游戏追踪通道6：. 18.

游戏追踪通道7：ECollisionResponse Enum。游戏追踪通道7：. 19.

游戏追踪通道8：ECollisionResponse枚举。游戏追踪频道8：。20.

游戏追踪通道9：ECollisionResponse Enum。游戏追踪频道9：. 21.

游戏追踪通道10：ECollisionResponse Enum。游戏追踪通道10：. 22.

游戏追踪通道11：ECollisionResponse Enum。游戏追踪通道11：. 23.

游戏追踪通道12：ECollisionResponse Enum。游戏追踪通道12：. 24.

游戏追踪通道13：ECollisionResponse Enum。游戏追踪通道13：. 25.

游戏追踪通道14：ECollisionResponse Enum。游戏追踪通道14：. 26.

游戏追踪通道15：ECollisionResponse Enum。游戏追踪通道15：. 27.

游戏追踪通道16：ECollisionResponse Enum。游戏追踪通道16：. 28.

游戏追踪通道17：ECollisionResponse Enum。游戏追踪通道17：. 28.

游戏追踪通道18：ECollisionResponse Enum。游戏追踪通道18：. 30.
