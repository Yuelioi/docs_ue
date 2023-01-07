# AttachActorToActor

将此 Actor 的 RootComponent 附加到所提供的 Actor 上，可以选择在一个指定的 socket 上。

目标是演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-21144001.png)

## Inputs

在。执行。

目标。演员对象参考。

父角色。Actor 对象参考。将此角色的 RootComponent 连接到的角色。

插座名称。名称。如果有的话，要附加到的插口名称。

位置规则。EAttachmentRule 枚举。如何处理翻译时附加...

旋转规则。EAttachmentRule 枚举。粘贴时如何处理旋转。

规模规则。EAttachmentRule 枚举。如何处理在附加时的比例。

焊接模拟体。布尔值。是否将模拟物理体焊接在一起。

## Outputs

出：执行。

<hr>

Attaches the RootComponent of this Actor to the supplied actor, optionally at a named socket.

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-21144001.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Parent Actor: Actor Object Reference. Actor to attach this actor's RootComponent to.

Socket Name: Name. Socket name to attach to, if any.

Location Rule: EAttachmentRule Enum. How to handle translation when attaching..

Rotation Rule: EAttachmentRule Enum. How to handle rotation when attaching..

Scale Rule: EAttachmentRule Enum. How to handle scale when attaching..

Weld Simulated Bodies: Boolean. Whether to weld together simulated physics bodies..

## Outputs

Out: Exec.
