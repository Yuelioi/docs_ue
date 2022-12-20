# CalculateLensParameters

Target is Open CVLens Calibrator

## 图示

![]($-20221218-19402715.png)

## Inputs

In: Exec.

Target: Open CVLens Calibrator Object Reference.  

## Outputs

Out: Exec.

Lens Distortion Parameters: Open CVLens Distortion Parameters Structure. the calculated distortion data from the images passed into the calibrator..

Margin Of Error: Float (single-precision). returned reprojection error of the calibration.

Camera View Info: Open CVCamera View Info Structure. returned information about the camera view obtained from calibration parameters.

Return Value: Boolean. true if there was enough data to calculate the distortion.

