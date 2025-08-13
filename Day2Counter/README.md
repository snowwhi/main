# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# First thing which i learn is that why use hooks
## want to manupliulate dom at various spot use use state hook so it contain
### const [state, setState] = useState(initialState)
# in my project it is like 
### const[ count,setcount]=useState(initialState)
# it can be any variable

# Usage
Adding state to a component
Updating state based on the previous state
Updating objects and arrays in state
Avoiding recreating the initial state
Resetting state with a key
Storing information from previous renders
## learned about new thing know as setcounter(callbackfunction)
## in order to add multiple increcement by single click
## commom sense approach counter + x
### alternative approach setcounter((perviousCounter)=>perviousCounter +1 )
### repeat it as many times you want
### main goal is core concept 
### Fiber works as batch
### in this way each step will be considered as seperate  