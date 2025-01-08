---
title: NavBar
---

# NavBar

Una barra de navegación interactiva que incluye elementos de navegación, notificaciones y un panel de información de usuario.

Este componente es flexible y personalizable, permitiendo manejar acciones como clics en notificaciones, navegación a diferentes rutas, y opciones del menú. También puede mostrar el nombre y la foto del usuario actual.

## Propiedades

| Prop                  | Tipo             | Descripción                                                                                                             | Requerido | Valor Predeterminado |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| `navItems`            | `Array<NavItem>` | Lista de elementos de navegación que se mostrarán en la barra. Cada elemento puede incluir nombre, ruta y submenús.     | Sí        | -                    |
| `notificationCount`   | `number`         | Número de notificaciones que se mostrarán en el icono de campana. Si el número excede 99, se mostrará "+99".            | Sí        | -                    |
| `photo`               | `string`         | URL de la foto de perfil del usuario, que se muestra junto al nombre en el panel de usuario.                            | No        | `undefined`          |
| `userName`            | `string`         | Nombre del usuario que se mostrará en la barra de navegación.                                                           | No        | `undefined`          |
| `onNotificationClick` | `Function`       | Función opcional que se ejecuta al hacer clic en el icono de notificaciones.                                            | No        | `undefined`          |
| `onOptionsMenuClick`  | `Function`       | Función opcional que se ejecuta al hacer clic en el icono de menú de opciones.                                          | No        | `undefined`          |
| `onNavigate`          | `Function`       | Función que se ejecuta al hacer clic en un elemento del menú de navegación. Recibe la ruta del elemento como argumento. | Sí        | -                    |

## Comportamiento

- Detecta clics fuera del componente para cerrar menús desplegados.
- Permite la navegación mediante los elementos del menú, con soporte para submenús anidados.
- Muestra notificaciones con un contador interactivo.
- Proporciona accesibilidad mediante eventos de clic y comportamiento responsivo.

## Ejemplo de uso

```tsx
const navItems = [
  {
    name: "Inicio",
    link: "/home",
    subItems: [
      { name: "Perfil", link: "/home/profile" },
      { name: "Ajustes", link: "/home/settings" },
    ],
  },
  { name: "Acerca de", link: "/about" },
];

<NavBar
  navItems={navItems}
  notificationCount={5}
  photo="https://example.com/photo.jpg"
  userName="Juan Pérez"
  onNotificationClick={() => console.log("Notificaciones abiertas")}
  onOptionsMenuClick={() => console.log("Menú de opciones abierto")}
  onNavigate={(link) => console.log(`Navegando a: ${link}`)}
/>;
```
