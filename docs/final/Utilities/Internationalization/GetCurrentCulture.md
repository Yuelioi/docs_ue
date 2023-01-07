# GetCurrentCulture

获取当前文化作为 IETF 语言标签。

- 一个两个字母的 ISO 639-1 语言代码（例如，"zh"）。

- 一个可选的四个字母的 ISO 15924 脚本代码（例如，"Hans"）。

- 一个可选的两个字母的 ISO 3166-1 国家代码（例如，"CN"）。注意：这个函数的存在是为了与 SetCurrentCulture 保持一致，相当于 GetCurrentLanguage。

目标是 Kismet 国际化库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14261009.png)

## Inputs

## Outputs

返回值。字符串。作为 IETF 语言标签的文化（例如，"zh-Hans-CN"）。

<hr>

Get the current culture as an IETF language tag:

- A two-letter ISO 639-1 language code (eg, "zh").

- An optional four-letter ISO 15924 script code (eg, "Hans").

- An optional two-letter ISO 3166-1 country code (eg, "CN").. Note: This function exists for legacy API parity with SetCurrentCulture and is equivalent to GetCurrentLanguage.

Target is Kismet Internationalization Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14261009.png)

## Inputs

## Outputs

Return Value: String. The culture as an IETF language tag (eg, "zh-Hans-CN")..
