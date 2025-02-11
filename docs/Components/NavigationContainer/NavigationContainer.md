# Navigation Components

## `Navigation Container`

BottomNavigationContainer es un componente que gestiona la navegación entre diferentes secciones de la aplicación. Proporciona un contexto para manejar la ruta activa y renderiza los botones de navegación junto con el contenido asociado.

### Props

- `items`: Lista de elementos de navegación con etiqueta, icono opcional y ruta. _(Array&lt;&#123; label: string; icon?: ReactNode; route: string &#125;&gt;)_
- `children`: Contenido dinámico que se mostrará según la ruta activa. _(ReactNode)_

### Ejemplo de uso:

```tsx
import { BottomNavigationContainer } from "./BottomNavigationContainer";

const items = [
  { label: "Inicio", icon: "Icono", route: "home" },
  { label: "Perfil", icon: "Icono", route: "profile" },
  { label: "Configuración", icon: "Icono", route: "settings" },
];

export default function App() {
  return (
    <BottomNavigationContainer items={items}>
      <div>
        {/* Contenido dinámico según la ruta activa */}
      </div>
    </BottomNavigationContainer>
  );
}
```
