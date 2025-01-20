---
id: check-box
title: CheckBox
---

# CheckBox

Este componente renderiza un checkbox personalizado con soporte para una etiqueta asociada. Permite que el usuario haga clic tanto en el checkbox como en la etiqueta para cambiar su estado. Además, se puede usar para manejar un conjunto de checkboxes donde solo uno puede estar marcado a la vez, gestionando el estado de los checkboxes a través de una función de control.

### Propiedades

| Prop        | Tipo       | Descripción                                                                                                                                                          | Requerido | Valor Predeterminado |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| `label`     | `string`   | Texto que se mostrará como etiqueta junto al checkbox.                                                                                                               | Sí        | -                    |
| `id`        | `string`   | Identificador único para enlazar el checkbox con su etiqueta. Este ID es utilizado para asociar el checkbox con su label de forma accesible.                         | Sí        | -                    |
| `isChecked` | `boolean`  | Determina si el checkbox está marcado o no. Es una propiedad controlada por el estado global del componente padre.                                                   | Sí        | -                    |
| `onCheck`   | `Function` | Función que se ejecuta cuando el estado del checkbox cambia. Se utiliza para actualizar el estado global y asegurar que solo un checkbox esté seleccionado a la vez. | Sí        | -                    |

### Ejemplo de uso

```jsx
<CheckBox
  label="Roles y transacciones"
  id="rolesAndTransactions"
  isChecked={selectedCheckbox === "rolesAndTransactions"}
  onCheck={handleCheckboxChange}
/>
```
