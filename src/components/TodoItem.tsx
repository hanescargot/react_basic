import * as React from 'react';
 
interface IList {
    idx: number,
    title: string,
    isDelete: boolean,
    onDelete: Function,
}
 
export function TodoItem(props: IList){

    const handleDelete = () => {
        props.onDelete(props.idx)
    }
 
    return(
        <div>
            {props.idx !== 0 && !props.isDelete && (
                <div>
                    {props.title}  
                    <button onClick={handleDelete}>
                        DEL
                    </button>
                </div>
            )}
        </div>
    )
}