---
id: edit-bar
title: Barra de edición
---

## Componente `EditBar`

Este componente proporciona una barra de edición con los botones **Editar**, **Agregar**, **Guardar**, **Cancelar** y **Volver**. Su comportamiento depende del estado de `isEditable` y de la acción de agregar (`isAdding`).

### 📌 **Estados y Comportamiento**

- **Modo normal (`isEditable=false`, `isAdding=false`)**: Muestra los botones **Editar** y, opcionalmente, **Agregar**.
- **Modo agregar (`isAdding=true`)**: Se oculta la barra y se muestra solo un botón **Volver** para regresar al estado anterior.
- **Modo edición (`isEditable=true`)**: Se ocultan **Editar** y **Agregar**, y se muestran **Guardar** y **Cancelar**.

### 🔧 **Props**

| Prop               | Tipo       | Default        | Descripción |
|-------------------|------------|---------------|-------------|
| `isEditable`      | `boolean`  | `false`       | Define si el componente está en modo de edición. |
| `showAddButton`   | `boolean`  | `true`        | Define si se muestra el botón **Agregar**. |
| `onEdit`          | `function` | `() => {}`    | Función que se ejecuta al hacer clic en **Editar**. |
| `onAdd`           | `function` | `() => {}`    | Función que se ejecuta al hacer clic en **Agregar**. |
| `onCancel`        | `function` | `() => {}`    | Función que se ejecuta al hacer clic en **Cancelar**. |
| `onSave`          | `function` | `() => {}`    | Función que se ejecuta al hacer clic en **Guardar**. |
| `onBack`          | `function` | `() => {}`    | Función que se ejecuta al hacer clic en **Volver**. |

### 📝 **Ejemplo de Uso**

```tsx
<EditBar
  isEditable={false}
  showAddButton={true}
  onEdit={() => console.log("Modo edición activado")}
  onAdd={() => console.log("Agregando nuevo elemento")}
  onCancel={() => console.log("Cancelando edición")}
  onSave={() => console.log("Guardando cambios")}
  onBack={() => console.log("Volviendo a la vista anterior")}
/>