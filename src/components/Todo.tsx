import * as React from 'react';
import {useState, useEffect} from 'react';
import {TodoItem} from './TodoItem';
import { title } from 'process';

interface todoTitle{
    title : string
}

interface todoItem{
    idx : number,
    title : string,
    isDelete : boolean,
    onDelete? : Function
}

interface todoItemList{
    items : todoItem[]
}

export  function  TodoList () {
    const [todoTitle, setTodoTitle] = useState<todoTitle>({
        title :""// "할일을 입력하세요"
    })

    const [todoItem, setTodoItem] = useState<todoItem>({
        idx : 0,
        title : "초기값",
        isDelete  : false
    })


    const [todoItemList, setTodoItemList] = useState<todoItemList>({
        items :  [todoItem]
    })

    const onSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        setTodoItem({
            idx : todoItem.idx+1,
            title : todoTitle.title,
            isDelete : false
        })
    }

    useEffect(() => {
            setTodoTitle({
             title:""//"할 일을 입력해 주세요"
            })
            setTodoItemList(
                {
                    items  : todoItemList.items.concat(todoItem),
                }
            )
        }, [todoItem]
    )

    const handleInput= (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setTodoTitle(
            {title : value}
        )
    }

    const onDelete = (idx  : number) =>  {
        let itemArr:Array<todoItem> = []
        const  deleteTodoList = todoItemList.items.map(
            item => {
                let temp: todoItem = {
                    idx: item.idx,
                    title: item.title,
                    isDelete: item.idx === idx ? true : item.isDelete
                }

                if(itemArr.length<1){
                    itemArr = [temp]
                }else{
                    itemArr = itemArr.concat(temp)
                }
            }
        )

        setTodoItemList({
            items : itemArr
        })
    }
    
    const ResultTodoLists = todoItemList.items.map(
        (data, idx) => (
            <React.Fragment key={idx}>
                <TodoItem 
                idx={data.idx}
                title = {data.title}
                isDelete = {data.isDelete}
                onDelete = {onDelete}
                ></TodoItem>
            </React.Fragment>
        )
    )

    return(
        <div>
            <h2>할일</h2>
            <div>
                <form onSubmit={onSubmit}>
                    <input type='text' name='content' value={todoTitle.title} placeholder={"할일 입력해"} onChange={handleInput} />
                    <button type='submit'>추가</button>
                </form>
            </div>
            <div>
                {ResultTodoLists}
            </div>
        </div>
    )




}