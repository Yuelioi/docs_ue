# AttachComponentToComponent

将这个组件附加到另一个场景组件上，可以选择在一个指定的套接字上。无论组件是否已被注册，对其调用此功能都是有效的。

目标是场景组件

## 图示

![]($-20221218-21144228.png)

## Inputs

在。执行。

目标。场景组件对象参考。

父级：场景组件对象参考。父类要附加到...

插座名称。名称。可选的套接字，用于附加到父代的...

位置规则。EAttachmentRule枚举。如何处理翻译时附加...

旋转规则。EAttachmentRule枚举。粘贴时如何处理旋转。

规模规则。EAttachmentRule枚举。如何处理在附加时的比例。

焊接模拟体。布尔值。是否将模拟物理体焊接在一起。  

## Outputs

出：执行。

返回值。布尔值。如果连接成功（或已经连接到请求的父/套接字），则为真；如果连接被拒绝，且AttachParent中没有变化，则为假。

Attach this component to another scene component, optionally at a named socket. It is valid to call this on components whether or not they have been Registered.

Target is Scene Component

## 图示

![]($-20221218-21144228.png)

## Inputs

In: Exec.

Target: Scene Component Object Reference.

Parent: Scene Component Object Reference. Parent to attach to..

Socket Name: Name. Optional socket to attach to on the parent..

Location Rule: EAttachmentRule Enum. How to handle translation when attaching..

Rotation Rule: EAttachmentRule Enum. How to handle rotation when attaching..

Scale Rule: EAttachmentRule Enum. How to handle scale when attaching..

Weld Simulated Bodies: Boolean. Whether to weld together simulated physics bodies..  

## Outputs

Out: Exec.

Return Value: Boolean. True if attachment is successful (or already attached to requested parent/socket), false if attachment is rejected and there is no change in AttachParent..

