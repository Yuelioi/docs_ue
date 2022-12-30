# BreakVREditorFloatingUICreationC-

添加一个打破'VREditorFloatingUICreationContext'的节点到其成员字段中

## 图示

![]($-20221218-14453566.png)

## Inputs

VREditor浮动UICreation Context。VREditor浮动UICreation Context结构（通过参考）。  

## Outputs

小工具类。User Widget Class Reference.小工具类:.在VR窗口中打开的Widget.null用于关闭一个打开的窗口（如果与PanelID匹配）。

小组ID：名称。面板ID：。UI系统将用于识别面板的ID。必须是唯一的！。

父代演员。Actor Object Reference.父演员。

面板再生偏移。转变。面板再生偏移：。窗口打开时与HMD的可选偏移。传递FTransform::Identity为默认逻辑 - 窗口将在控制器位置打开。

面板尺寸。矢量2D结构。面板尺寸：。面板尺寸。应与传入的UMG的尺寸一致。

面板网格。静态网格对象参考。Panel Mesh:.可选的自定义网格，用于VR窗口。

编辑UISize。Float（单精度）。编辑器UISize:.对 "VREd.EditorUISize "的可选覆盖。默认情况下保留为0。

隐藏窗口把手。Boolean.隐藏窗口手柄：。关闭窗口下的手柄（X-To-Close，移动条...）。

屏蔽掉小工具的背景。Boolean.屏蔽掉小工具的背景：。关闭小工具的背景以创造一个透明的外观。

没有关闭按钮。布尔型。没有关闭按钮：。如果bHideWindowHandles为false，这个窗口没有关闭按钮。(.
