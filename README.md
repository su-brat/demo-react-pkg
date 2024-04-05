# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Note to configure for a react package with vite
- Configure build and give the entry as per your entry point file name. (Refer `vite.config.js`)
- Configure `main`, `module`, `exports` and `files` in `package.json` as per your build destination. (Refer `package.json`, the build destination folder by default is `dist` here)
- Name of the package is the name you provide in `package.json` (Which should be unique to publish at npm; you can also use @organization_name/package_name format to add to a specific organization in your npm profile)