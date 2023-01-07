# LoadControlBusMixFromProfile

将控制总线混合从配置文件加载到 UObject 混合定义中，从 ini 文件中反序列化。

目标是音频调制静态

## 图示

![](/uploads/projects/ue-bluprint/20221218-18045669.png)

## Inputs

在。Exec.

混合。声音控制总线混合对象参考。

激活。布尔值。如果为真，在从配置文件加载时激活混音。

配置文件索引。整数。配置文件的索引，允许将多个配置文件加载到单个混合对象。如果<=0，则从默认配置文件加载（无后缀）。

## Outputs

输出。执行：执行。

Stages（舞台）。声音控制总线混合阶段结构的阵列。Stages - 从配置文件加载的舞台值（如果配置文件不存在或没有序列化的值，则为空）。

<hr>

Loads control bus mix from a profile into UObject mix definition, deserialized from an ini file.

Target is Audio Modulation Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18045669.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference.

Activate: Boolean. If true, activate mix upon loading from profile..

Profile Index: Integer. Index of profile, allowing multiple profiles to be loaded to single mix object. If <= 0, loads from default profile (no suffix)..

## Outputs

Out: Exec.

Stages: Array of Sound Control Bus Mix Stage Structures. Stages - Stage values loaded from profile (empty if profile did not exist or had no values serialized)..
