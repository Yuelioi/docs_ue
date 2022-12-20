# BreakGameplayCueNotify_SpawnResu-

Adds a node that breaks a 'GameplayCueNotify_SpawnResult' into its member fields

## 图示

![]($-20221218-14363763.png)

## Inputs

Gameplay Cue Notify Spawn Result: Gameplay Cue Notify Spawn Result Structure (by ref).  

## Outputs

Fx System Components: Array of FXSystem Component Object References. Fx System Components:. List of FX components spawned. There may be null pointers here as it matches the defined order..

Audio Components: Array of Audio Component Object References. Audio Components:. List of audio components spawned. There may be null pointers here as it matches the defined order..

Camera Shakes: Array of Camera Shake Base Object References. Camera Shakes:. List of camera shakes played. There will be one camera shake per local player controller if shake is played in world..

Camera Anim: Camera Anim Inst Object Reference. Camera Anim:. Camera animation played..

Camera Lens Effects: Array of Camera Lens Effect Interface Interfaces. Camera Lens Effects:. List of camera len effects spawned. There will be one camera lens effect per local player controller if the effect is played in world..

Force Feedback Component: Force Feedback Component Object Reference. Force Feedback Component:. Force feedback component that was spawned. This is only valid when force feedback is set to play in world..

Decal Component: Decal Component Object Reference. Decal Component:. Spawned decal component. This may be null..

