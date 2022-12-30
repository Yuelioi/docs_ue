# ExportAnimSequence

  * * @InWorld 世界将出口

  * @InSequence 要输出的序列

  * @AnimSequence 要保存到的AnimSequence。

  * @ExportOption 序列的导出选项。

  * @InBinding 输出的绑定，上面有一个skelmesh组件。

  * @InAnimSequenceFilename 要创建的文件





目标是Sequencer Tools功能库

## 图示

![]($-20221218-18521405.png)

## Inputs

在。执行。

世界。世界对象参考。

序列。水平序列对象参考。

Anim Sequence:Anim Sequence Object Reference.

出口选项：Anim Seq出口选项对象参考。

绑定。定序器绑定代理结构（通过参考）。

## Outputs

出：执行。

返回值。布尔值。@InWorld 要输出的世界。@InSequence 要输出的序列。@AnimSequence 要保存到的AnimSequence。@ExportOption 该序列的导出选项。@InBinding 要导出的有skelmesh组件的Binding。@InAnimSequenceFilename 要创建的文件。