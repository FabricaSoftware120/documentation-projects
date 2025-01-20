---
id: panel-photo
title: Foto de perfil
---

# Foto de perfil

## Descripción

El componente `PanelPhoto` muestra un conjunto de botones en un formato vertical, proporcionando una interfaz interactiva para que el usuario realice acciones, como cargar o eliminar una foto. Los botones se configuran a través de las propiedades `buttons` pasadas como props, donde cada botón tiene un texto (`label`) y una función asociada a un evento de clic (`onClick`).

## Propiedades

| Propiedad | Tipo                                            | Descripción                                                                         |
| --------- | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| `buttons` | `Array<{ label: string, onClick: () => void }>` | Un arreglo de objetos que representa los botones a mostrar. Cada objeto debe tener: |
|           |                                                 | - `label`: El texto que se mostrará en el botón.                                    |
|           |                                                 | - `onClick`: La función que se ejecutará cuando el botón sea presionado.            |

## Estilos

- Los botones están estilizados con un fondo azul (`#007bff`), texto blanco, bordes redondeados y un cursor en forma de puntero, lo que indica que son interactivos.
- Los botones están dispuestos en una columna con un espacio de 8px entre ellos (utilizando la propiedad `gap` de CSS).

## Uso

Este componente es ideal para situaciones donde se necesita mostrar varios botones con diferentes acciones, como en la interfaz de carga y eliminación de imágenes. Los botones se renderizan según la configuración proporcionada a través de la propiedad `buttons`.

### Ejemplo de uso:

```tsx
import PanelPhoto from "./PanelPhoto";

// Configuración de botones
const buttons = [
  { label: "Cargar Foto", onClick: handleUpload },
  { label: "Eliminar Foto", onClick: handleDelete },
];

// Uso del componente PanelPhoto
<PanelPhoto buttons={buttons} />;
```
