---
title: Botón carta
---

# Botón carta

El componente `CardButtons` permite crear botones estilizados con funcionalidad de redirección y soporte para íconos principales y adicionales. Es útil para crear interfaces de usuario visualmente atractivas.

---

## Propiedades

| Prop         | Tipo                     | Descripción                                                                 | Requerido | Default |
| ------------ | ------------------------ | --------------------------------------------------------------------------- | --------- | ------- |
| `nameButton` | `string`                 | Texto visible en el botón.                                                  | Sí        | -       |
| `mainIcon`   | `ReactNode`              | Ícono principal que aparece en el centro del botón.                         | Sí        | -       |
| `icons`      | `ReactNode[]` (opcional) | Array de íconos adicionales que se mostrarán alrededor del ícono principal. | No        | `[]`    |
| `link`       | `string`                 | URL o ruta a la que se redirigirá cuando se haga clic en el botón.          | Sí        | -       |

---

## **Uso**

### **Ejemplo básico**

```tsx
import CardButtons from "./CardButtons";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const App = () => {
  return (
    <CardButtons
      nameButton="Inicio"
      mainIcon={<FaHome />}
      icons={[<FaUser key="1" />, <FaCog key="2" />]}
      link="/home"
    />
  );
};

export default App;
```
