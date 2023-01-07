# SetCurrentLanguageandLocale

设置当前语言（用于本地化）和地域（用于国际化）。

目标是 Kismet 国际化库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14262230.png)

## Inputs

在。Exec.

文化。字符串。要设置的语言和地域，作为一个 IETF 语言标签（例如，"zh-Hans-CN"）。

保存到配置。布尔值。如果为真，将新的设置保存到用户的 "GameUserSettings "配置中，以便在重新加载后持续存在。

## Outputs

输出。执行：执行。

返回值。布尔值。如果语言和地域设置为真，否则为假。

<hr>

Set the current language (for localization) and locale (for internationalization).

Target is Kismet Internationalization Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14262230.png)

## Inputs

In: Exec.

Culture: String. The language and locale to set, as an IETF language tag (eg, "zh-Hans-CN")..

Save to Config: Boolean. If true, save the new setting to the users' "GameUserSettings" config so that it persists after a reload..

## Outputs

Out: Exec.

Return Value: Boolean. True if the language and locale were set, false otherwise..
