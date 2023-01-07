# ExportAnimSequence

- - @InWorld 世界将出口

- @InSequence 要输出的序列

- @AnimSequence 要保存到的 AnimSequence。

- @ExportOption 序列的导出选项。

- @InBinding 输出的绑定，上面有一个 skelmesh 组件。

- @InAnimSequenceFilename 要创建的文件

目标是 Sequencer Tools 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18521405.png)

## Inputs

在。执行。

世界。世界对象参考。

序列。水平序列对象参考。

Anim Sequence:Anim Sequence Object Reference.

出口选项：Anim Seq 出口选项对象参考。

绑定。定序器绑定代理结构（通过参考）。

## Outputs

出：执行。

返回值。布尔值。@InWorld 要输出的世界。@InSequence 要输出的序列。@AnimSequence 要保存到的 AnimSequence。@ExportOption 该序列的导出选项。@InBinding 要导出的有 skelmesh 组件的 Binding。@InAnimSequenceFilename 要创建的文件。

<hr>

- - @InWorld World to export

- @InSequence Sequence to export

- @AnimSequence The AnimSequence to save into.

- @ExportOption The export options for the sequence.

- @InBinding Binding to export that has a skelmesh component on it

- @InAnimSequenceFilename File to create

Target is Sequencer Tools Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18521405.png)

## Inputs

In: Exec.

World: World Object Reference.

Sequence: Level Sequence Object Reference.

Anim Sequence: Anim Sequence Object Reference.

Export Option: Anim Seq Export Option Object Reference.

Binding: Sequencer Binding Proxy Structure (by ref).

## Outputs

Out: Exec.

Return Value: Boolean. @InWorld World to export: @InSequence Sequence to export: @AnimSequence The AnimSequence to save into.: @ExportOption The export options for the sequence.: @InBinding Binding to export that has a skelmesh component on it: @InAnimSequenceFilename File to create.
