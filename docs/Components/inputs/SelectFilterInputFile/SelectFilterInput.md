# SelectFilterInput

## Descripción

El componente `SelectFilterInput` proporciona un selector de opciones filtrables con múltiples selecciones. Permite al usuario seleccionar una o varias opciones de una lista y notifica los cambios a través de una función de callback. Además, puede validar si la selección es obligatoria.

## Props

| Prop                | Tipo                                 | Descripción                                        | Opcional | Valor por defecto       |
| ------------------- | ------------------------------------ | -------------------------------------------------- | -------- | ----------------------- |
| `options`           | `{ id: string; label: string; }[]`   | Lista de opciones disponibles para seleccionar.    | ❌       | -                       |
| `title`             | `string`                             | Título que se mostrará sobre el selector.          | ✅       | `"Selecciona opciones"` |
| `onSelectionChange` | `(selectedValues: string[]) => void` | Función que se ejecuta cuando cambia la selección. | ✅       | `undefined`             |
| `required`          | `boolean`                            | Indica si la selección es obligatoria.             | ✅       | `false`                 |

## Ejemplo de uso

```tsx
import SelectFilterInput from "./components/SelectFilterInput";

function App() {
  const options = [
    { id: "1", label: "Opción 1" },
    { id: "2", label: "Opción 2" },
    { id: "3", label: "Opción 3" },
  ];

  const handleSelection = (selectedValues: string[]) => {
    console.log("Seleccionados:", selectedValues);
  };

  return (
    <div>
      <h1>Ejemplo de SelectFilterInput</h1>
      <SelectFilterInput
        options={options}
        title="Selecciona una opción"
        onSelectionChange={handleSelection}
        required={true}
      />
    </div>
  );
}
```
