"use client"
//making the new button component we will also have to add the new ui to the package.json of the ui
export const NewButton = () => {
    return <div>
        <button onClick={() => {
            alert("hellow from the new button component!!");
        }}>new button</button>
    </div>
}