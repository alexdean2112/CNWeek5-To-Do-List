import { useState } from "react";
import dustbin from "../images/dustbin.png"
import quill from "../images/quill.png"
import arrow from "../images/arrow.png"

const Todo = () => {

    const [items, setItems] = useState([])
    const [doneItems, setDoneItems] = useState([])
    const [text, setText] = useState("")
    const [textEdit, setTextEdit] = useState(true)
    const [toDoItem, setToDoItem] = useState("")

    const addItem = (e) => {
        e.preventDefault()
        if (text === "" || !text)  {
            alert("Cannot input an empty string")
            return
        }
        const temp = [...items]
        temp.push(text)
        setItems(temp)
        setText("")
    }

    const removeItem = (index) => {
        const temp = [...items]
        const tempDone = [...doneItems]
        tempDone.push(temp.splice(index , 1))
        setItems(temp)
        setDoneItems(tempDone)
    }

    const deleteItem = (index) => {
        const temp = [...items]
        temp.splice(index , 1)
        setItems(temp)
    }

    const deleteItemDone = (index) => {
        const temp = [...doneItems]
        temp.splice(index , 1)
        setDoneItems(temp)
    }

    const onChangeHandler = (event) => {
        setText(event.target.value)
    }

    const onChangeHandler2 = (event) => {
        setToDoItem(event.target.value)
    }

    const editItem = (item, index) => {      
        if (textEdit === true) {
            setTextEdit(!textEdit)
        } else {
            if (item === "" || !item)  {
                alert("Cannot input an empty string")
                return
            }
            const temp = [...items]
            temp.splice(index, 1)
            temp.splice(index, 0, toDoItem)
            setItems(temp)
            setTextEdit(!textEdit)
            setToDoItem("")
        }
    }

    return (
        <div>
            <div className="topcontainer">
                <form onSubmit={addItem}>
                    <input type="text" value={text} onChange={onChangeHandler} />
                    <button>Add</button>
                </form>
            </div>
            <div className="todocontainer">
                <div className="container">
                    <h2>Things I Have To-Do</h2>
                    {items.map((item, index) => {
                        return (
                        <div className="item" key={item}>
                            <div className="itemText">
                                <p>{index+1}</p>
                                <p><input type="text" defaultValue={item} disabled={textEdit} id={item} onChange={onChangeHandler2}/></p>
                            </div>
                            <div className="itemImage">
                                <img src={quill} onClick={ () => editItem(item, index)}  className="quill"/>
                                <img src={arrow} onClick={ () => removeItem(index)} className="arrow"/>
                                <img src={dustbin} onClick={ () => deleteItem(index)} className="dustbin"/>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="container">
                    <h2>Things I Have Done</h2>
                    {doneItems.map((item, index) => {
                        return (
                            <div className="item">
                            <div className="itemText">
                                <p key={index} >{index+1}</p>
                                <p><input type="text" defaultValue={item} disabled={textEdit} id={item}/></p>
                            </div>
                            <div className="itemImage">
                            <img src={dustbin} onClick={ () => deleteItemDone(index)} className="dustbin"/>
                            </div>
                        </div>
                        )
                    })}
            </div>
        </div>
    </div>
    )
}

export default Todo;