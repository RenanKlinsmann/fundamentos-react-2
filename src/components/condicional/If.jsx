export default props => {

    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else';
    })[0]

    console.log(elseChild)

    const ifChild = props.children.filter(child => {
        return child !== elseChild;
    })

    console.log(ifChild)

    if(props.test){
        return ifChild;
    }else if(elseChild){
        return elseChild;
    }else {
        return false;
    }
}

export const Else = props => props.children;