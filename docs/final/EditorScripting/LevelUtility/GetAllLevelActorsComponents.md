# GetAllLevelActorsComponents

在世界编辑器中找到一个演员所拥有的所有加载的 ActorComponent。排除在 PIE、PreviewEditor 中正在等待杀戮的演员，...。

目标是编辑演员子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18505607.png)

## Inputs

在。执行。

目标。编辑器演员子系统对象参考。

## Outputs

出：执行。

返回值。演员组件对象的数组参考。找到的 ActorComponent 的列表。

<hr>

Find all loaded ActorComponent own by an actor in the world editor. Exclude actor that are pending kill, in PIE, PreviewEditor, ...

Target is Editor Actor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18505607.png)

## Inputs

In: Exec.

Target: Editor Actor Subsystem Object Reference.

## Outputs

Out: Exec.

Return Value: Array of Actor Component Object References. List of found ActorComponent.
