---
title: Botón largo
---

# Botón largo

El componente `LargeButton` permite renderizar un botón de gran tamaño con funcionalidad de habilitación/deshabilitación. Es ideal para acciones destacadas en la interfaz de usuario.

---

## Propiedades

| Prop         | Tipo      | Descripción                                                                | Requerido |
| ------------ | --------- | -------------------------------------------------------------------------- | --------- |
| `nameButton` | `string`  | Texto que se muestra dentro del botón.                                     | Sí        |
| `isDisabled` | `boolean` | Indica si el botón está deshabilitado. El valor predeterminado es `false`. | No        |

---

## **Uso**

### **Ejemplo básico**

```tsx
import LargeButton from "./LargeButton";

function App() {
  return (
    <div>
      {/* Botón habilitado */}
      <LargeButton nameButton="Enviar" />

      {/* Botón deshabilitado */}
      <LargeButton nameButton="Cargando..." isDisabled={true} />
    </div>
  );
}

export default App;
```
