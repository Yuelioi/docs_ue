# GetMousePositionScaledbyDPI

获取玩家控制器的鼠标位置，通过DPI缩放。如果你想从原始的鼠标屏幕空间坐标转到全屏的部件空间，你需要把鼠标转换到DPI缩放的空间。这个函数可以执行这种缩放。

MousePositionScaledByDPI = MousePosition * (1 / ViewportScale).。//UE_DEPRECATED(4.17, "使用GetMousePositionOnViewport()代替。可选择的和更多的选项，你可以使用GetViewportWidgetGeometry和GetPlayerScreenWidgetGeometry是新引入的，给你提供视口和播放器屏幕的几何形状，以帮助小部件在空间之间转换。")

目标是Widget Layout Library

## 图示

![]($-20221218-21251100.png)

## Inputs

玩家。播放器控制器对象参考。  

## Outputs

位置X：浮点数（单精度）。

位置Y。Float（单精度）。

返回值。布尔值。获取玩家控制器的鼠标位置，按DPI缩放。如果你想从原始的鼠标屏幕空间坐标转到全屏小部件空间，你需要将鼠标转换到DPI缩放空间。这个函数可以执行这种缩放。MousePositionScaledByDPI = MousePosition * (1 / ViewportScale).。//UE_DEPRECATED(4.17, "使用GetMousePositionOnViewport()代替。可选择的和更多的选项，你可以使用GetViewportWidgetGeometry和GetPlayerScreenWidgetGeometry是新引入的，给你提供视口和播放器屏幕的几何形状，以帮助小部件在空间之间转换。"）。

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

