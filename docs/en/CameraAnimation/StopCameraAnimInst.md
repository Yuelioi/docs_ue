# StopCameraAnimInst

Stops the given CameraAnimInst from playing. The given pointer should be considered invalid after this.

Target is Player Camera Manager

## 图示

![]($-20221218-18135072.png)

## Inputs

In: Exec.

Target: Player Camera Manager Object Reference.

Anim Inst: Camera Anim Inst Object Reference.

Immediate: Boolean. True to stop it right now and ignore blend out, false to let it blend out as indicated..  

## Outputs

Out: Exec.

