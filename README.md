# Calculadora de diferencias

[![hexlet-check](https://github.com/mgmontiitol-gabby/frontend-project-103/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mgmontiitol-gabby/frontend-project-103/actions)

<!-- Prueba automátizada y CI (paso 6) -->
[![CI](https://github.com/mgmontiitol-gabby/frontend-project-103/actions/workflows/ci.yml/badge.svg)](https://github.com/mgmontiitol-gabby/frontend-project-103/actions/workflows/ci.yml)

Aprenderás a crear aplicaciones de línea de comandos (CLI), analizar y formatear datos en JSON y YAML. Además, explorarás el diseño de la arquitectura de aplicaciones y la escritura de pruebas unitarias.

Proyecto de aprendizaje de Códica: https://app.codica.la/programs/frontend
Así debería funcionar: https://asciinema.org/a/Pe6QypnLEmFWssNAjCOJN1iii

## Stack

- JavaScript (ES Modules)
- commander, js-yaml, lodash
- vitest, ESLint

## Instalación

<!-- Describa la instalación: clonación, dependencias, variables de entorno -->
Utilidad de linea de comandos que permite comparar dos archivos de configuracion JSON o YAML.
Muestra las diferencias entre los archivos
Soporta estructuras anidadas y tres formatos de salida:
    - 'stylish' por defecto
    - 'plain'
    - 'json'

```bash
git clone https://github.com/mgmontiitol-gabby/frontend-project-103.git
cd frontend-project-103
make install
npm link
```
`npm link`crea el comando global `gendiff`
## Uso
```bash
gendiff -h
gendiff -f formato <archivo1> <archivo2>
```
```bash
gendiff __tests__/fixtures/file1.json __tests__/fixtures/file2.json
gendiff -f plain __tests__/fixtures/file1-group.yml __tests__/fixtures/file2-group.yml
```

## Pruebas y calidad

```bash
make lint
make test
make test-coverage
```
<!-- Agregue ejemplos de ejecución y una grabación de asciinema: esto es lo que miran los empleadores -->
## Demostraciones

**Archivos planos (JSON)**
[![asciicast](https://asciinema.org/a/7Z6yLbMDCSh7itQr.svg)](https://asciinema.org/a/7Z6yLbMDCSh7itQr)

**Archivos planos (YAML)**
[![asciicast](https://asciinema.org/a/OeLI4K00f3ds4lsE.svg)](https://asciinema.org/a/OeLI4K00f3ds4lsE)

**Estructuras anidadas (formato stylish)**
[![asciicast](https://asciinema.org/a/lkEK3sDh39VODZhH.svg)](https://asciinema.org/a/lkEK3sDh39VODZhH)

**Formato plain**
[![asciicast](https://asciinema.org/a/LWuSArXr04HeKJX6.svg)](https://asciinema.org/a/LWuSArXr04HeKJX6)

**Formato json**
[![asciicast](https://asciinema.org/a/Rl99cGv3VBlYScSb.svg)](https://asciinema.org/a/Rl99cGv3VBlYScSb)
---
 


<details>
<summary>Pruebas automáticas de Códica</summary>

Las pruebas se ejecutan en cada commit. El archivo `.github/workflows/hexlet-check.yml` es el responsable de ejecutarlas: no lo elimine ni lo renombre, y no cambie el nombre del repositorio.

</details>

## Acerca de Códica

[Códica](https://app.codica.la/) es una escuela de programación: programas de aprendizaje propios con práctica, apoyo de mentores y proyectos reales que quedan en su currículum. Este repositorio es uno de esos proyectos.

