# SetCurrentAssetGroupCulture

Set the given asset group category culture from an IETF language tag (eg, "zh-Hans-CN").

Target is Kismet Internationalization Library

## 图示

![]($-20221218-14261969.png)

## Inputs

In: Exec.

Asset Group: Name. The asset group to set the culture for..

Culture: String. The culture to set, as an IETF language tag (eg, "zh-Hans-CN")..

Save to Config: Boolean. If true, save the new setting to the users' "GameUserSettings" config so that it persists after a reload..  

## Outputs

Out: Exec.

Return Value: Boolean. True if the culture was set, false otherwise..

