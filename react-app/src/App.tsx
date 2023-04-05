import { useState } from "react";
import Alert from "./components/Alert";
import NewButton from "./components/Button";
import ListGroup from "./components/ListGroup"

function App() {

  let items = ["Dhaka", "Gazipur", "Uttara", "Konabari", "Savar"];
  // let items =[]
  const hendleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisible, setAlertVisivility] = useState(false);
 

  

  return (
    <div>

      {alertVisible && <Alert onClose={()=>setAlertVisivility(false)}> This is a alert</Alert>}

      <NewButton color="info" onClick={() => setAlertVisivility(true) }>
        click here
      </NewButton>

      <ListGroup items={items} heading={"Cities"} onSelectItem={hendleSelectItem} />

    </div>
  )
}

export default App





//  {/* <Alert text="sazzad"/> */}
//  <Alert>
//  sazzadul alam <span> shawon</span>
// </Alert>
// <ListGroup items={items} heading = {"Cities"} onSelectItem={hendleSelectItem}/>

// <NewButton color="info" onClick={() => console.log('clicked')}>
//  click here
// </NewButton>
