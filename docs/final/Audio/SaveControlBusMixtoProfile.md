# SaveControlBusMixtoProfile

将控制总线混合保存为一个配置文件，序列化为一个 ini 文件。如果混合被加载，使用当前代理的状态。如果没有，则使用默认的 UObject 表示。

目标是音频调制静态

## 图示

![](/uploads/projects/ue-bluprint/20221218-18073908.png)

## Inputs

在。Exec.

混合。声音控制总线混合对象参考。

配置文件索引。整数。配置文件的索引，允许为单个混音对象保存多个配置文件。如果是 0，则保存到默认的 ini 配置文件（没有后缀）。

## Outputs

输出。执行：执行。

<hr>

Saves control bus mix to a profile, serialized to an ini file. If mix is loaded, uses current proxy's state.. If not, uses default UObject representation.

Target is Audio Modulation Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18073908.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference.

Profile Index: Integer. Index of profile, allowing multiple profiles can be saved for single mix object. If 0, saves to default ini profile (no suffix)..

## Outputs

Out: Exec.
