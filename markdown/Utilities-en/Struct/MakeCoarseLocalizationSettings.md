# MakeCoarseLocalizationSettings

Adds a node that create a 'CoarseLocalizationSettings' from its members

## 图示

![]($-20221218-14483995.png)

## Inputs

Enable: Boolean. Enable:. If true coarse localization will be active.

Enable GPS: Boolean. Enable GPS:. If true GPS can be used for localization ("location" must also be enabled in Project Settings->Platforms->Hololens->Capabilities).

Enable Wifi: Boolean. Enable Wifi:. If true WiFi can be used for localization ("wiFiControl" must also be enabled in Project Settings->Platforms->Hololens->Capabilities).

BLEBeacon UUIDs: Array of Strings. BLEBeacon UUIDs:. List of bluetooth beacon uuids that can be used for localization ("bluetooth" must also be enabled in Project Settings->Platforms->Hololens->Capabilities).  

## Outputs

Coarse Localization Settings: Coarse Localization Settings Structure.

