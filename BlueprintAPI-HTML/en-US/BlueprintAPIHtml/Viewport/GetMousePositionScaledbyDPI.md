# GetMousePositionScaledbyDPI

Gets the mouse position of the player controller, scaled by the DPI. If you're trying to go from raw mouse screenspace coordinates. to fullscreen widget space, you'll need to transform the mouse into DPI Scaled space. This function performs that scaling.

MousePositionScaledByDPI = MousePosition * (1 / ViewportScale).. //UE_DEPRECATED(4.17, "Use GetMousePositionOnViewport() instead. Optionally and for more options, you can use GetViewportWidgetGeometry and GetPlayerScreenWidgetGeometry are newly introduced to give you the geometry of the viewport and the player screen for widgets to help convert between spaces.")

Target is Widget Layout Library

## 图示

![]($-20221218-21251100.png)

## Inputs

Player: Player Controller Object Reference.  

## Outputs

Location X: Float (single-precision).

Location Y: Float (single-precision).

Return Value: Boolean. Gets the mouse position of the player controller, scaled by the DPI. If you're trying to go from raw mouse screenspace coordinates. to fullscreen widget space, you'll need to transform the mouse into DPI Scaled space. This function performs that scaling.: MousePositionScaledByDPI = MousePosition * (1 / ViewportScale).. //UE_DEPRECATED(4.17, "Use GetMousePositionOnViewport() instead. Optionally and for more options, you can use GetViewportWidgetGeometry and GetPlayerScreenWidgetGeometry are newly introduced to give you the geometry of the viewport and the player screen for widgets to help convert between spaces.").

