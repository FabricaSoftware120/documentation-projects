---
title: Botón simple
---

# Botón simple

El componente `SimpleButton` permite crear un botón personalizable que puede incluir texto, íconos, o ambos. Soporta estilos secundarios, habilitación/deshabilitación y permite elegir la posición del ícono.

---

## Propiedades

| Prop           | Tipo                | Descripción                                                                       | Requerido | Valor Predeterminado |
| -------------- | ------------------- | --------------------------------------------------------------------------------- | --------- | -------------------- |
| `nameButton`   | `string`            | Texto que se mostrará en el botón. Si no se proporciona, el contenedor se oculta. | No        | `undefined`          |
| `icon`         | `ReactNode`         | Ícono que se mostrará junto al texto del botón.                                   | No        | `undefined`          |
| `onClick`      | `() => void`        | Función que se ejecutará al hacer clic en el botón.                               | Sí        | -                    |
| `isDisabled`   | `boolean`           | Indica si el botón está deshabilitado.                                            | No        | `false`              |
| `isSecondary`  | `boolean`           | Define si el botón debe usar un estilo secundario.                                | No        | `false`              |
| `iconPosition` | `"left" \| "right"` | Determina si el ícono se posiciona a la izquierda o a la derecha del texto.       | No        | `"left"`             |

---

## **Uso**

### **Ejemplo básico**

```tsx
import SimpleButton from "./SimpleButton";
import { FaCheck, FaTimes } from "react-icons/fa";

function App() {
  return (
    <div>
      {/* Ícono a la izquierda del texto */}
      <SimpleButton
        nameButton="Aceptar"
        icon={<FaCheck />}
        onClick={() => console.log("Aceptar presionado")}
        iconPosition="left"
      />

      {/* Ícono a la derecha del texto */}
      <SimpleButton
        nameButton="Cancelar"
        icon={<FaTimes />}
        onClick={() => console.log("Cancelar presionado")}
        iconPosition="right"
      />

      {/* Solo texto */}
      <SimpleButton
        nameButton="Continuar"
        onClick={() => console.log("Continuar presionado")}
      />

      {/* Solo ícono */}
      <SimpleButton
        icon={<FaCheck />}
        onClick={() => console.log("Ícono presionado")}
      />

      {/* Botón deshabilitado */}
      <SimpleButton
        nameButton="No disponible"
        isDisabled={true}
        onClick={() => console.log("No debería ejecutarse")}
      />
    </div>
  );
}

export default App;
```
