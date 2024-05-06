import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {

    // let items = ['delhi', 'mumbai', 'chennai', 'banglore', 'kerela']
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <Fragment>
            <h1>{heading}</h1>
            {items.length == 0 && <p>no items found</p>}
            <ul className="list-group">
                {items.map((item, index, ) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                    key={item} 
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    }
                    }>{item}</li>
                ))}
        </ul>
        </Fragment >
    );
}

export default ListGroup;