# BreakCollisionResponseContainer

Adds a node that breaks a 'CollisionResponseContainer' into its member fields

## 图示

![]($-20221218-14323500.png)

## Inputs

Collision Response Container: Collision Response Container Structure (by ref).  

## Outputs

World Static: ECollisionResponse Enum. World Static:. Reserved Engine Trace Channels: Note - If you change this (add/remove/modify). you should make sure it matches with ECollisionChannel (including DisplayName). They has to be mirrored if serialized.

World Dynamic: ECollisionResponse Enum. World Dynamic:. 0.

Pawn: ECollisionResponse Enum. Pawn:. 1..

Visibility: ECollisionResponse Enum. Visibility:. 2.

Camera: ECollisionResponse Enum. Camera:. 3.

Physics Body: ECollisionResponse Enum. Physics Body:. 4.

Vehicle: ECollisionResponse Enum. Vehicle:. 5.

Destructible: ECollisionResponse Enum. Destructible:. 6.

Engine Trace Channel 1: ECollisionResponse Enum. Engine Trace Channel 1:. Unspecified Engine Trace Channels.

Engine Trace Channel 2: ECollisionResponse Enum. Engine Trace Channel 2:. 8.

Engine Trace Channel 3: ECollisionResponse Enum. Engine Trace Channel 3:. 9.

Engine Trace Channel 4: ECollisionResponse Enum. Engine Trace Channel 4:. 10.

Engine Trace Channel 5: ECollisionResponse Enum. Engine Trace Channel 5:. 11.

Engine Trace Channel 6: ECollisionResponse Enum. Engine Trace Channel 6:. 12.

Game Trace Channel 1: ECollisionResponse Enum. Game Trace Channel 1:. in order to use this custom channels. we recommend to define in your local file: i.e. #define COLLISION_WEAPON ECC_GameTraceChannel1. and make sure you customize these it in INI file by: in DefaultEngine.ini: [/Script/Engine.CollisionProfile]. GameTraceChannel1="Weapon": also in the INI file, you can override collision profiles that are defined by simply redefining. note that Weapon isn't defined in the BaseEngine.ini file, but "Trigger" is defined in Engine. +Profiles=(Name="Trigger",CollisionEnabled=QueryOnly,ObjectTypeName=WorldDynamic, DefaultResponse=ECR_Overlap, CustomResponses=((Channel=Visibility, Response=ECR_Ignore), (Channel=Weapon, Response=ECR_Ignore))).

Game Trace Channel 2: ECollisionResponse Enum. Game Trace Channel 2:. 14.

Game Trace Channel 3: ECollisionResponse Enum. Game Trace Channel 3:. 15.

Game Trace Channel 4: ECollisionResponse Enum. Game Trace Channel 4:. 16.

Game Trace Channel 5: ECollisionResponse Enum. Game Trace Channel 5:. 17.

Game Trace Channel 6: ECollisionResponse Enum. Game Trace Channel 6:. 18.

Game Trace Channel 7: ECollisionResponse Enum. Game Trace Channel 7:. 19.

Game Trace Channel 8: ECollisionResponse Enum. Game Trace Channel 8:. 20.

Game Trace Channel 9: ECollisionResponse Enum. Game Trace Channel 9:. 21.

Game Trace Channel 10: ECollisionResponse Enum. Game Trace Channel 10:. 22.

Game Trace Channel 11: ECollisionResponse Enum. Game Trace Channel 11:. 23.

Game Trace Channel 12: ECollisionResponse Enum. Game Trace Channel 12:. 24.

Game Trace Channel 13: ECollisionResponse Enum. Game Trace Channel 13:. 25.

Game Trace Channel 14: ECollisionResponse Enum. Game Trace Channel 14:. 26.

Game Trace Channel 15: ECollisionResponse Enum. Game Trace Channel 15:. 27.

Game Trace Channel 16: ECollisionResponse Enum. Game Trace Channel 16:. 28.

Game Trace Channel 17: ECollisionResponse Enum. Game Trace Channel 17:. 28.

Game Trace Channel 18: ECollisionResponse Enum. Game Trace Channel 18:. 30.

