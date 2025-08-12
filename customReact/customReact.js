
// step1
 let container=document.getElementById('root')
// making a Element
   const ReactElement ={
    type:'a',
    props:{
        href:'https//www.google.com',
        target:'_blank'
    },
      Children:'Click Me'
   }
// making a function
// way too Hectic
function RenderReactElement(ReactElement,container) {
    const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.Children
    domElement.setAttribute('href',ReactElement.props.href)
    domElement.setAttribute('target',ReactElement.props.target)
    container.appendChild(domElement)
}

RenderReactElement(ReactElement,container)
// making a Element
   const ReactElement2 ={
    type:'a',
    props:{
        href:'https//www.google.com',
        target:'_blank'
    },
      Children:'Click Me'
   }
   //making a function using forin loop to set attributes efficently
   function RenderReactElement2(ReactElement2,container) {
    const domElement=document.createElement(ReactElement2.type)
    domElement.innerHTML=ReactElement2.Children
    domElement.style.margin='40px'
for (const prop in ReactElement2.props) {
    if(prop==='Children') continue;
    domElement.setAttribute(prop,ReactElement2.props[prop])         
    }
    container.appendChild(domElement)
}
// Calling A function
RenderReactElement2(ReactElement2,container)   