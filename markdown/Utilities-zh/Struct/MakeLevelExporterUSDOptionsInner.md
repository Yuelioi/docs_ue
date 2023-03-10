# MakeLevelExporterUSDOptionsInner

添加一个节点，从其成员中创建一个'LevelExporterUSDOptionsInner'。

## 图示

![]($-20221218-14563566.png)

## Inputs

只选择。布尔型。仅选择：。是否只输出选定的演员，以及他们使用的资产。

导出演员文件夹。布尔型。Export Actor Folders:（导出演员文件夹）。是否使用UE演员文件夹作为空底片。

忽略序列器动画。Boolean.Ignore Sequencer Animations:.忽略序列动画。如果为真，并且在导出过程中，如果我们有一个关卡序列在做动画，那么在写入USD之前，它将把任何角色或组件恢复到其无动画的状态。

在演员层上导出树叶。Boolean.在演员层上导出叶子：。默认情况下，叶子实例将被导出到与它们在编辑器中放置的组件相同的层。启用这个选项可以将叶子实例导出到与它们所属的叶子演员相同的层。如果这些树叶实例是用 "放置在当前层 "选项放置的，这就很有用。

资产文件夹。目录路径结构。资产文件夹：。将所有生成的资产文件放在哪里。

资产期权。Usd Mesh资产期权结构。资产选项：。适当时用于所有导出资产的选项（例如静态和骨架网格、材料等）。

最低景观LOD：整数。最低景观LOD：。输出景观的最低LOD指数（使用0表示全分辨率）。

最高景观LOD：整数。最高景观LOD：。输出景观时的最高LOD指数。每一个高于0的值都会使分辨率减半。最大值取决于每个景观的组件数量和每个组件的部分，并且可以被夹紧。

景观烘烤分辨率。Int点结构。Landscape Bake Resolution（景观烘焙分辨率）：。将景观材质烘焙成纹理时使用的分辨率。

输出子层。布尔型。导出子层：。如果为真，将导出子层作为单独的图层（引用为子层）。如果是假的，将把所有子层折叠在一个单一的导出的根层中。

忽略的级别。弦乐组。忽略的级别：。在收集要输出的角色时应该忽略的级别名称（例如，"持久级别"、"Level1"、"MySubLevel "等）。  

## Outputs

级别出口USDOptions内部。Level Exporter USDOptions Inner 结构。
