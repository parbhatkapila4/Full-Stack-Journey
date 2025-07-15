let state = {
    count : 0

}


function onButtonPress(){
    state.count++;
}


return <button onClick={onButtonPress}>Count {props.count}</button>