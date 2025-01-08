---
title: Boton de configuración
---

# Boton de configuración

El componente `OptionButtonsAccount` permite generar una lista de botones configurables, cada uno con su propio ícono, nombre y función de clic. Es ideal para crear menús o secciones de acciones específicas dentro de una aplicación.

---

## Propiedades

| Prop           | Tipo                  | Descripción                                                                                                                       | Requerido |
| -------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `buttonConfig` | `Array<ButtonConfig>` | Un array de objetos que define la configuración de cada botón. Cada objeto debe incluir las propiedades descritas a continuación. | Sí        |

### **Estructura de `ButtonConfig`**

Cada objeto dentro del array `buttonConfig` debe tener la siguiente estructura:

| Prop         | Tipo        | Descripción                                             | Requerido |
| ------------ | ----------- | ------------------------------------------------------- | --------- |
| `icon`       | `ReactNode` | Ícono que se mostrará en el botón.                      | Sí        |
| `nameButton` | `string`    | Texto que se mostrará como nombre o etiqueta del botón. | Sí        |
| `onClick`    | `function`  | Función que se ejecutará al presionar el botón.         | Sí        |

---

## **Uso**

### **Ejemplo básico**

```tsx
import OptionButtonsAccount from "./OptionButtonsAccount";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const buttonConfig = [
  {
    icon: <FaUser />,
    nameButton: "Perfil",
    onClick: () => alert("Ir a Perfil"),
  },
  {
    icon: <FaCog />,
    nameButton: "Configuración",
    onClick: () => alert("Ir a Configuración"),
  },
  {
    icon: <FaSignOutAlt />,
    nameButton: "Cerrar Sesión",
    onClick: () => alert("Cerrar Sesión"),
  },
];

function App() {
  return <OptionButtonsAccount buttonConfig={buttonConfig} />;
}

export default App;
```
