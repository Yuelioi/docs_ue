# GetDefaultLanguage

Get the default language (for localization) used by this platform. Note: This is typically the same as GetDefaultLocale unless the platform distinguishes between the two. Note: This should be returned in IETF language tag form:

  * A two-letter ISO 639-1 language code (eg, "zh")

  * An optional four-letter ISO 15924 script code (eg, "Hans")

  * An optional two-letter ISO 3166-1 country code (eg, "CN")





Target is Kismet System Library

## 图示

![]($-20221218-14261268.png)

## Inputs

## Outputs

Return Value: String. The language as an IETF language tag (eg, "zh-Hans-CN").

