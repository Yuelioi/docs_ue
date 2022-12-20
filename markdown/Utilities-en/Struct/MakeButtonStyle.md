# MakeButtonStyle

Adds a node that create a 'ButtonStyle' from its members

## 图示

![]($-20221218-14475870.png)

## Inputs

Normal: Slate Brush Structure. Normal:. Button appearance when the button is not hovered or pressed.

Hovered: Slate Brush Structure. Hovered:. Button appearance when hovered.

Pressed: Slate Brush Structure. Pressed:. Button appearance when pressed.

Disabled: Slate Brush Structure. Disabled:. Button appearance when disabled, by default this is set to an invalid resource when that is the case default disabled drawing is used..

Normal Foreground: Slate Color Structure. Normal Foreground:. Foreground Color when the button is not hovered or pressed.

Hovered Foreground: Slate Color Structure. Hovered Foreground:. Foreground Color when hovered.

Pressed Foreground: Slate Color Structure. Pressed Foreground:. Foreground Color when pressed.

Disabled Foreground: Slate Color Structure. Disabled Foreground:. Foreground Color when disabled.

Normal Padding: Margin Structure. Normal Padding:. Padding that accounts for the border in the button's background image.. When this is applied, the content of the button should appear flush. with the button's border. Use this padding when the button is not pressed..

Pressed Padding: Margin Structure. Pressed Padding:. Same as NormalPadding but used when the button is pressed. Allows for moving the content to match. any "movement" in the button's border image..

Pressed Sound: Slate Sound Structure. Pressed Slate Sound:. The sound the button should play when pressed.

Hovered Sound: Slate Sound Structure. Hovered Slate Sound:. The sound the button should play when initially hovered over.  

## Outputs

Button Style: Button Style Structure.

