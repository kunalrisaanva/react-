
function customRendor (reactElement,container){

    // const domeElement = document.createElement(reactElement.type)
    // domeElement.innerHTML = reactElement.children
    // domeElement.setAttribute('href',reactElement.props.href)
    // domeElement.setAttribute('target',reactElement.props.target)


    // container.appendChild(domeElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if(prop == 'children') continue;

       domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement)
}



const reactElement = {
     type: "a",
     props:{
        href:"https://google.com",
        target: "_blank"
     },
     children: " click me to visit google"
}

const mainContainer = document.querySelector("#root")




customRendor(reactElement,mainContainer)



