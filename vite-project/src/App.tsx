import ListGroup from "./components/ListGroup";

function App(){
  let items = ['delhi', 'mumbai', 'chennai', 'banglore', 'kerela']
  const handleSelectItem=(item:string)=>{
    console.log(item);
    
  }
  return <div><ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}/></div>
}

export default App;