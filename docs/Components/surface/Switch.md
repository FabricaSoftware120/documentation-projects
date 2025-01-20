---
id: switch
title: Switch
---

# Switch

Este componente representa un interruptor (switch) que permite al usuario activar o desactivar una opción. Es útil para situaciones en las que se necesita un control de estado binario (encendido/apagado).

El componente permite controlar el estado interno (activo/desactivado) de manera controlada o no controlada, según lo que el usuario decida al momento de utilizarlo. Además, el componente puede estar habilitado o deshabilitado según la necesidad del usuario.

### Propiedades

| Prop             | Tipo       | Descripción                                                                                                                                                      | Requerido | Valor Predeterminado |
| ---------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| `initialChecked` | `boolean`  | Estado inicial del switch. Indica si el switch debe estar activado o desactivado al cargar el componente. El valor predeterminado es `false` (desactivado).      | No        | `false`              |
| `isChecked`      | `boolean`  | Si se proporciona, controla el estado del switch de manera externa (componente controlado). Si no se proporciona, el componente gestiona su estado internamente. | No        | N/A                  |
| `onChange`       | `function` | Función que se ejecuta cada vez que el estado del switch cambia. Recibe el nuevo estado (`true` o `false`) como argumento.                                       | No        | N/A                  |
| `isDisabled`     | `boolean`  | Si se establece en `true`, el switch será deshabilitado y no podrá ser interactuado. El valor predeterminado es `false` (habilitado).                            | No        | `false`              |

### Comportamiento

- El switch se puede controlar de manera interna o externa. Si no se pasa la propiedad `isChecked`, el componente maneja su propio estado.
- Si el switch está deshabilitado (`isDisabled=true`), el usuario no podrá interactuar con él.
- El estado del switch cambia cuando el usuario hace clic sobre él, y el nuevo estado se pasa a través de la función `onChange`.

### Ejemplo de uso

```tsx
<Switch initialChecked={true} onChange={(checked) => console.log(checked)} />
<Switch isChecked={false} onChange={(checked) => console.log(checked)} />
<Switch isChecked={true} isDisabled={true} onChange={(checked) => console.log(checked)} />
```
