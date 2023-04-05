import { useState } from "react"; //for hook

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    const getMessege = () => {
        return items.length === 0 && <p> No item Found </p>; // render content dynamicly
    };

    const [SelectedIndex, SetSelectedIndex] = useState(-1); // which is i want to select that one will be active

    return (
        <>
            <h1> {heading} </h1>
            {getMessege()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        onClick={() => {
                            SetSelectedIndex(index);
                            onSelectItem(item);
                        }}
                        className={
                            SelectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                    >
                        {" "}
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;

// if (items.length === 0)
// return <p> No item Found</p>

// const handleClick = (event: MouseEvent) => console.log(event);   //event handler

{
    /* <li className="list-group-item">A second item</li> */
}

// -------------------------------------------------------------------------------------------------------------------

// // import { Fragment } from "react";
// // import { MouseEvent } from "react";

// import { useState } from "react";  //for hook

// function ListGroup() {
//   // const items = [
//   let items = ["Dhaka", "Gazipur", "Uttara", "Konabari", "Savar"];

//   // items=[]

//   const getMessege = () => {
//     // return  items.length === 0 ? <p> No item Found </p> : null;
//     return items.length === 0 && <p> No item Found </p>; // render content dynamicly
//   };

//   const [SelectedIndex, SetSelectedIndex] = useState(-1); // which is i want to select that one will be active

//   return (
//     <>
//       <h1> List </h1>
//       {getMessege()}
//       <ul className="list-group">
//         {/* { items.map((item, index)=> <li key={item} onClick={() => console.log(item, index)} className="list-group-item"> {item}</li>)} */}
//         {/* { items.map((item, index)=> <li key={item} onClick={(event) => console.log(event)} className="list-group-item"> {item}</li>)} */}
//         {/* { items.map((item, index)=> <li key={item} onClick={handleClick} className="list-group-item"> {item}</li>)} */}
//         {items.map((item, index) => (
//           <li
//             key={item}
//             onClick={() => SetSelectedIndex(index)}
//             className={
//               SelectedIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//           >
//             {" "}
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;
