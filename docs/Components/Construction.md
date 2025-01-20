---
id: construction
title: Página en construcción
---

# Página en construcción

El componente `Construction` permite mostrar un mensaje visual indicando que una página se encuentra en estado de construcción. Incluye el nombre de la página y una representación gráfica.

---

## **Props**

| Prop       | Tipo     | Descripción                                                | Requerido | Valor Predeterminado |
| ---------- | -------- | ---------------------------------------------------------- | --------- | -------------------- |
| `namePage` | `string` | Nombre de la página que se está mostrando en construcción. | Sí        | -                    |

---

## **Uso**

### **Ejemplo básico**

```tsx
import Construction from "./Construction";

function App() {
  return <Construction namePage="Página de Ejemplo" />;
}
```
