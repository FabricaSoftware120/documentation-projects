---
title: Barra de edición
---

# Barra de edición

Este componente renderiza una barra de edición que incluye tres botones: "Editar", "Guardar" y "Cancelar". Dependiendo del estado de `isEditable`, el botón "Editar" es visible o se muestran los botones "Guardar" y "Cancelar".

Las funciones para manejar las acciones de estos botones (editar, guardar, cancelar) pueden ser personalizadas a través de las props `onEdit`, `onSave`, y `onCancel`.

### Propiedades

| Prop         | Tipo       | Descripción                                                                                                                                | Requerido | Valor Predeterminado |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------------------- |
| `isEditable` | `boolean`  | Define si la barra está en modo de edición. Si es `true`, el botón "Editar" se muestra; si es `false`, se muestran "Guardar" y "Cancelar". | No        | `false`              |
| `onEdit`     | `Function` | Función que se ejecuta al hacer clic en el botón "Editar". Por defecto es una función vacía.                                               | No        | `() => {}`           |
| `onSave`     | `Function` | Función que se ejecuta al hacer clic en el botón "Guardar". Por defecto es una función vacía.                                              | No        | `() => {}`           |
| `onCancel`   | `Function` | Función que se ejecuta al hacer clic en el botón "Cancelar". Por defecto es una función vacía.                                             | No        | `() => {}`           |

### Ejemplo de uso

```tsx
<EditBar
  isEditable={true}
  onEdit={() => console.log("Editar acción")}
  onSave={() => console.log("Guardar acción")}
  onCancel={() => console.log("Cancelar acción")}
/>
```
