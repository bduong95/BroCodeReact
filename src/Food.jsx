
function Food(){

    const food1 = "Orange"
    const food2 = "Banana"

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li> 
            {/* Remember the {} is for js */}
            <li>Minion says "{food2.toUpperCase()}"</li>
        </ul>
    );
}

export default Food 
