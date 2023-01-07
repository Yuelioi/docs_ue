# AttachActorToComponent

将此 Actor 的 RootComponent 附加到所提供的组件上，可以选择在一个指定的套接字上。在没有注册的组件上调用这个是无效的。

目标是演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-21144112.png)

## Inputs

在。执行。

目标。演员对象参考。

父级：场景组件对象参考。父类要附加到...

插座名称。名称。可选的套接字，用于附加到父代的...

位置规则。EAttachmentRule 枚举。如何处理翻译时附加...

旋转规则。EAttachmentRule 枚举。粘贴时如何处理旋转。

规模规则。EAttachmentRule 枚举。如何处理在附加时的比例。

焊接模拟体。布尔值。是否将模拟物理体焊接在一起。

## Outputs

出：执行。

<hr>

Attaches the RootComponent of this Actor to the supplied component, optionally at a named socket. It is not valid to call this on components that are not Registered.

Target is Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-21144112.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Parent: Scene Component Object Reference. Parent to attach to..

Socket Name: Name. Optional socket to attach to on the parent..

Location Rule: EAttachmentRule Enum. How to handle translation when attaching..

Rotation Rule: EAttachmentRule Enum. How to handle rotation when attaching..

Scale Rule: EAttachmentRule Enum. How to handle scale when attaching..

Weld Simulated Bodies: Boolean. Whether to weld together simulated physics bodies..

## Outputs

Out: Exec.
