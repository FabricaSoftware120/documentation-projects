---
title: Ventana emergente
---

# Ventana emergente

Este componente representa una ventana emergente que muestra un título, una descripción y una lista de botones. Es ideal para mostrar mensajes informativos o de confirmación y permite al usuario realizar acciones a través de los botones proporcionados.

### Propiedades

| Prop               | Tipo                                                                                              | Descripción                                                                                                                           | Requerido | Valor Predeterminado |
| ------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| `titlePopUp`       | `string`                                                                                          | El título que se mostrará en la parte superior de la ventana emergente.                                                               | Sí        | N/A                  |
| `descriptionPopUp` | `string`                                                                                          | El contenido descriptivo que se mostrará debajo del título.                                                                           | Sí        | N/A                  |
| `buttons`          | `Array<{ nameButton: string, isDisabled?: boolean, isSecondary?: boolean, onClick: () => void }>` | Un arreglo de objetos que define los botones a mostrar en la ventana emergente. Cada objeto debe contener las siguientes propiedades: |
|                    |                                                                                                   | - `nameButton`: El texto que se mostrará en el botón.                                                                                 | Sí        | N/A                  |
|                    |                                                                                                   | - `isDisabled` (opcional): Indica si el botón está deshabilitado. El valor predeterminado es `false`.                                 | No        | `false`              |
|                    |                                                                                                   | - `isSecondary` (opcional): Indica si el botón debe tener un estilo secundario. El valor predeterminado es `false`.                   | No        | `false`              |
|                    |                                                                                                   | - `onClick`: La función que se ejecutará cuando se haga clic en el botón.                                                             | Sí        | N/A                  |

### Ejemplo de uso

```tsx
<PopUpWindow
  titlePopUp="Confirmación"
  descriptionPopUp="¿Estás seguro de que deseas continuar?"
  buttons={[
    {
      nameButton: "Aceptar",
      onClick: () => console.log("Aceptar clickeado"),
    },
    {
      nameButton: "Cancelar",
      isSecondary: true,
      onClick: () => console.log("Cancelar clickeado"),
    },
  ]}
/>
```
