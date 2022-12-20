# DrawMaterialtoRenderTarget

Renders a quad with the material applied to the specified render target.. This sets the render target even if it is already set, which is an expensive operation.. Use BeginDrawCanvasToRenderTarget / EndDrawCanvasToRenderTarget instead if rendering multiple primitives to the same render target.

Target is Kismet Rendering Library

## 图示

![]($-20221218-20362342.png)

## Inputs

In: Exec.

Texture Render Target: Texture Render Target 2D Object Reference.

Material: Material Interface Object Reference.  

## Outputs

Out: Exec.

