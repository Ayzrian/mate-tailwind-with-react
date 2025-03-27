import { ShoppingListItem } from "../ShoppingListItem/ShoppingListItem";
import "./ShoppingList.scss"

export function ShoppingList({ list, onItemDelete }) {
    if (list.length === 0) {
        return <div>
            Shopping List is Empty :(
        </div>
    }

    return (
        <ul className="ShoppingList">
            {
                list.map((item) => <ShoppingListItem key={item.id} item={item} onItemDelete={onItemDelete}/> )
            }
        </ul>
    )
}