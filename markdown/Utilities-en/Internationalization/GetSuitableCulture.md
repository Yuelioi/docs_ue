# GetSuitableCulture

Given a list of available cultures, try and find the most suitable culture from the list based on culture prioritization.. eg) If your list was [en, fr, de] and the given culture was "en-US", this function would return "en".. eg) If your list was [zh, ar, pl] and the given culture was "en-US", this function would return the fallback culture.

Target is Kismet Internationalization Library

## 图示

![]($-20221218-14261882.png)

## Inputs

Available Cultures: Array of Strings. List of available cultures to filter against (see GetLocalizedCultures)..

Culture to Match: String. Culture to try and match (see GetCurrentLanguage)..

Fallback Culture: String. The culture to return if there is no suitable match in the list (typically your native culture, see GetNativeCulture)..  

## Outputs

Return Value: String. The culture as an IETF language tag (eg, "zh-Hans-CN")..

