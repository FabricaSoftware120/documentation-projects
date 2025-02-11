# ButtonsNavigation

## Descripción

`ButtonsNavigation` es un botón de navegación que permite cambiar la ruta activa dentro de la aplicación.  
Puede incluir un icono opcional junto con una etiqueta de texto.

## Props

| Prop          | Tipo                      | Descripción                                      |
| ------------- | ------------------------- | ------------------------------------------------ |
| `label`       | `string`                  | Texto que se muestra en el botón.                |
| `route`       | `string`                  | Ruta asociada al botón.                          |
| `handleClick` | `(route: string) => void` | Función que cambia la ruta activa al hacer clic. |
| `icon`        | `ReactNode` _(opcional)_  | Icono opcional a mostrar junto al texto.         |

## Ejemplo de uso

```tsx
import { ButtonsNavigation } from "./ButtonsNavigation";
import { FaHome } from "react-icons/fa";

export default function Example() {
  const handleRouteChange = (route: string) => {
    console.log("Ruta activa:", route);
  };

  return (
    <ButtonsNavigation
      label="Inicio"
      route="home"
      handleClick={handleRouteChange}
      icon={<FaHome />}
    />
  );
}
```
