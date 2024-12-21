# React + TypeScript + Vite
![Slide 16_9 - 1](https://github.com/user-attachments/assets/de81a999-06dc-4070-821b-b6d64b999c2a)
![Скриншот 18-12-2024 175920](https://github.com/user-attachments/assets/b7383175-eb11-4bbb-8bc2-eb2c018e5bae)
![Скриншот 18-12-2024 175911](https://github.com/user-attachments/assets/fc4fc4b5-5515-4a35-b891-453cd68a59c8)
![Скриншот 18-12-2024 175900](https://github.com/user-attachments/assets/9c0d1af4-3ae8-4289-8ecc-a06feeaca0d3)
![Скриншот 18-12-2024 175854](https://github.com/user-attachments/assets/8145d4df-3760-4ab4-bc2c-289aa43fc375)
![Скриншот 18-12-2024 175847](https://github.com/user-attachments/assets/d17e0db1-15c8-4b39-88a4-db4807e171c1)
![Скриншот 18-12-2024 175839](https://github.com/user-attachments/assets/53ed261a-6bd7-4cef-a3b2-8f40ef743aad)
![Скриншот 18-12-2024 175826](https://github.com/user-attachments/assets/f95524fa-7c98-4b5c-81d6-83de1de5fddc)
![Скриншот 18-12-2024 175821](https://github.com/user-attachments/assets/1e6d68f3-40e5-47b3-8789-dddd6583a172)
![Скриншот 18-12-2024 175815](https://github.com/user-attachments/assets/9a16692b-df59-4902-933b-58c7ffeba63e)
![Скриншот 18-12-2024 175807](https://github.com/user-attachments/assets/0b5092ea-6489-4154-9914-8680220ba0bc)
![Скриншот 18-12-2024 175757](https://github.com/user-attachments/assets/3316d360-029b-4351-9385-7cea8a0e22ba)
![Скриншот 18-12-2024 175745](https://github.com/user-attachments/assets/b9d0c0d6-fe1c-4841-8473-2846694d4292)
![Скриншот 18-12-2024 175648](https://github.com/user-attachments/assets/1a29849d-6806-427d-8d01-8be9ffd720b5)
![Скриншот 18-12-2024 1756482](https://github.com/user-attachments/assets/8c10189f-3461-496e-ad7e-d9646db08dbb)
![Скриншот 18-12-2024 175940](https://github.com/user-attachments/assets/b8f8613c-0daf-4874-9e1d-421064a476ae)
![Скриншот 18-12-2024 175932](https://github.com/user-attachments/assets/f98e4adf-9424-4d15-9d8c-c84817661070)

![chrome-capture-2024-11-19](https://github.com/user-attachments/assets/969770a6-c2d5-40cd-88a4-661bd323504f)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
