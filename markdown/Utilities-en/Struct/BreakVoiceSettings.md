# BreakVoiceSettings

Adds a node that breaks a 'VoiceSettings' into its member fields

## 图示

![]($-20221218-14452065.png)

## Inputs

Voice Settings: Voice Settings Structure (by ref).  

## Outputs

Component To Attach To: Scene Component Object Reference. Component to Attach To:. Optionally attach the voice source to a Scene Component to give the appearance. that the voice is coming from that scene component.. If this is not set, the voice will not be spatialized..

Attenuation Settings: Sound Attenuation Object Reference. Attenuation Settings:. Optional attenuation settings to attach to this player's voice.. This should only be used when ComponentToAttachTo is set..

Source Effect Chain: Sound Effect Source Preset Chain Object Reference. Source Effect Chain:. Optional audio effects to apply to this player's voice..

