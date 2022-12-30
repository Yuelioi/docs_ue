# MontageSetNextSection

在运行时，在SectionNameToChange之后重新链接新的下一节。你可以在编辑器中以你喜欢的方式链接章节顺序，但在运行时，如果你想动态地改变它，可以使用这个函数来重新链接下一个章节。例如，你可以有Start->Loop->Loop->Loop....，但当你想让它结束时，你可以重新链接。Loop的下一节是End，以完成蒙太奇，在这种情况下，它通过Loop->End停止循环。

目标是Anim Instance

## 图示

![]($-20221218-20071655.png)

## Inputs

在。执行。

目标。Anim 实例对象参考。

要改变的章节名称。名称：这应该是蒙太奇章节的名称，你想在它后面插入一个新的下一个章节。

下一节。名称。 : 新的下一节。

蒙太奇:Anim Montage Object Reference.  

## Outputs

出：执行。
