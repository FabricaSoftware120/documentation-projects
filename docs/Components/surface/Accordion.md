---
id: accordion
title: Acordeon
---

# Acordeon

El componente `Accordion` proporciona una interfaz para mostrar y ocultar contenido de forma dinámica a través de un acordeón colapsable. Permite mostrar información adicional cuando el acordeón está expandido.

### Propiedades

| Prop                   | Tipo              | Descripción                                                                                                                                   | Requerido | Valor Predeterminado |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| `identification`       | `string`          | La identificación del usuario que se mostrará dentro del acordeón.                                                                            | Sí        | -                    |
| `typeOfIdentification` | `string`          | El tipo de identificación (e.g., "DNI", "Pasaporte") que se mostrará junto con la identificación.                                             | Sí        | -                    |
| `nameUser`             | `string`          | El nombre del usuario que se mostrará dentro del acordeón.                                                                                    | Sí        | -                    |
| `titleSection`         | `string`          | El título de la sección que se mostrará en el acordeón.                                                                                       | Sí        | -                    |
| `children`             | `React.ReactNode` | Contenido que se mostrará dentro del acordeón cuando esté expandido.                                                                          | Sí        | -                    |
| `isInformation`        | `boolean`         | Controla si se muestra la información del usuario. Si se pasa `true`, se mostrará la información de usuario, si se pasa `false`, se ocultará. | No        | `false`              |

### Estado

- **`isExpanded`**: Indica si el acordeón está expandido o colapsado.

### Ejemplo de uso

```jsx
<Accordion
  identification="12345678"
  typeOfIdentification="DNI"
  nameUser="Juan Pérez"
  titleSection="Detalles del Usuario"
  isInformation={true}
>
  <p>
    Este es el contenido adicional que aparece cuando se expande el acordeón.
  </p>
</Accordion>
```
