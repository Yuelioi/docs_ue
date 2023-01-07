# SetCurrentLanguage

只设置当前语言（用于本地化）。注意：除非你在做一些高级的事情，否则你可能想用 SetCurrentLanguageAndLocale 或 SetCurrentCulture 代替。

目标是 Kismet 国际化库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14262143.png)

## Inputs

在。Exec.

文化。字符串。要设置的语言，作为 IETF 语言标签（例如，"zh-Hans-CN"）。

保存到配置。布尔值。如果为真，将新的设置保存到用户的 "GameUserSettings "配置中，以便在重新加载后持续存在。

## Outputs

输出。执行：执行。

返回值。布尔值。如果语言被设置为真，否则为假。

<hr>

Set only the current language (for localization).. Note: Unless you're doing something advanced, you likely want SetCurrentLanguageAndLocale or SetCurrentCulture instead.

Target is Kismet Internationalization Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14262143.png)

## Inputs

In: Exec.

Culture: String. The language to set, as an IETF language tag (eg, "zh-Hans-CN")..

Save to Config: Boolean. If true, save the new setting to the users' "GameUserSettings" config so that it persists after a reload..

## Outputs

Out: Exec.

Return Value: Boolean. True if the language was set, false otherwise..
