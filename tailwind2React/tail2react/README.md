# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# created a body color  changing button
## use usestate hook to apply chages
### use of tailwind css
#  style={{backgroundColor:color}} doubly squre bracket
# onClick={()=>setColor('red')}
# on click want function 
# cannot directly executed by {setColor()}
# 
### works perfectly fine
#### update 
# want to create props 
# to use single component
# fail to do so bcoz props areread only 
# cannot directly manupulate the dom
# can be possible but not at this stage 