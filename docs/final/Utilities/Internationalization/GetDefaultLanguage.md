# GetDefaultLanguage

获取该平台使用的默认语言（用于本地化）。注意：这通常与 GetDefaultLocale 相同，除非平台对这两者进行区分。注意：这应该以 IETF 语言标签形式返回。

- 一个两个字母的 ISO 639-1 语言代码（例如，"zh"）。

- 一个可选的四个字母的 ISO 15924 脚本代码（例如，"Hans"）。

- 一个可选的两个字母的 ISO 3166-1 国家代码（例如，"CN"）。

目标是 Kismet 系统库

## 图示

![](/uploads/projects/ue-bluprint/20221218-14261268.png)

## Inputs

## Outputs

返回值。字符串。作为 IETF 语言标签的语言（例如，"zh-Hans-CN"）。

<hr>

Get the default language (for localization) used by this platform. Note: This is typically the same as GetDefaultLocale unless the platform distinguishes between the two. Note: This should be returned in IETF language tag form:

- A two-letter ISO 639-1 language code (eg, "zh")

- An optional four-letter ISO 15924 script code (eg, "Hans")

- An optional two-letter ISO 3166-1 country code (eg, "CN")

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-14261268.png)

## Inputs

## Outputs

Return Value: String. The language as an IETF language tag (eg, "zh-Hans-CN").
