import React  from "react";
const List =()=>{
    return(
        <div>
            <h1>The ingredients are an unordered list with the following contents:</h1>
            <ul>
                <li>Spaghetti</li>
                <li>Marinara Sauce</li>
                <li> Salt</li>
                <li>Water</li>
            </ul>
            <div>
                <h1>The instructions are an ordered list with the following contents:</h1>
                <ol>
                    <li>Bring water to a boil.</li>
                    <li>Add spaghetti to boiling water.
                        <ol>
                            <li>Add salt to taste.</li>
                            <li> Cook for 10 minutes, stirring occasionally.</li>
                        </ol>
                    </li>
                        <li> Add marinara sauce to a pan, bringing to a simmer.</li>
                        <li>Mix cooked spaghetti with marinara sauce.</li>
                        <li> Enjoy!</li>
                </ol>
            </div>
        </div>
    )
}
export default List;