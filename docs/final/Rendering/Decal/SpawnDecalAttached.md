# SpawnDecalAttached

生成一个附着在指定组件上的贴花，并跟随该组件。不复制。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-20362218.png)

## Inputs

在。执行。

贴花材料。材料界面对象参考。贴花的材料。

水贴尺寸。向量。水贴的尺寸。

附加到组件。场景组件对象参考。

附加点名称。名称。在 AttachComponent 中可选择的命名点，以催生发射器。

地点：向量。矢量。根据 Location Type 的值，这要么是一个与附加组件/点的相对偏移，要么是一个将被转换为相对偏移的绝对世界位置。

旋转。旋转器。根据 LocationType 的值，这要么是一个从附加组件/点的相对偏移，要么是一个绝对的世界旋转，将被翻译成一个实际的偏移。

位置类型。EAttachLocation 枚举。指定 Location 是相对偏移还是绝对世界位置。

寿命。浮点数（单精度）。在时间用完后销毁贴花组件（0 = 无限）。

## Outputs

出：执行。

返回值。贴花组件对象参考。

<hr>

Spawns a decal attached to and following the specified component. Does not replicate.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-20362218.png)

## Inputs

In: Exec.

Decal Material: Material Interface Object Reference. decal's material.

Decal Size: Vector. size of decal.

Attach to Component: Scene Component Object Reference.

Attach Point Name: Name. Optional named point within the AttachComponent to spawn the emitter at.

Location: Vector. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world position that will be translated to a relative offset.

Rotation: Rotator. Depending on the value of LocationType this is either a relative offset from the attach component/point or an absolute world rotation that will be translated to a realative offset.

Location Type: EAttachLocation Enum. Specifies whether Location is a relative offset or an absolute world position.

Life Span: Float (single-precision). destroy decal component after time runs out (0 = infinite).

## Outputs

Out: Exec.

Return Value: Decal Component Object Reference.
