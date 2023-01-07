# SetCurrentAssetGroupCulture

从一个 IETF 语言标签（例如，"zh-Hans-CN"）设置给定的资产组类别文化。

目标是 Kismet 国际化库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14261969.png)

## Inputs

在。执行。

资产组。名称。要设置文化的资产组。

文化。字符串。要设置的文化，作为一个 IETF 语言标签（例如，"zh-Hans-CN"）。

Save to Config: 布尔值。如果为真，将新的设置保存到用户的 "GameUserSettings "配置中，以便在重新加载后持续存在。

## Outputs

输出。执行：执行。

返回值。布尔值。如果文化被设置，则为真，否则为假。

<hr>

Set the given asset group category culture from an IETF language tag (eg, "zh-Hans-CN").

Target is Kismet Internationalization Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14261969.png)

## Inputs

In: Exec.

Asset Group: Name. The asset group to set the culture for..

Culture: String. The culture to set, as an IETF language tag (eg, "zh-Hans-CN")..

Save to Config: Boolean. If true, save the new setting to the users' "GameUserSettings" config so that it persists after a reload..

## Outputs

Out: Exec.

Return Value: Boolean. True if the culture was set, false otherwise..
