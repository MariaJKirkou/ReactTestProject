import Card from './Card.jsx'
function App() {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
      <Card image="/marre.png" name="Marias Code" description="I love to eat, play PlayStation and code" className="card-maria" />
      <Card image="/gamergirl.jpg" name="GAMER GIRL" description="MY FAVOURITE HOBBY" className="card-gamer" />
      <Card image="/womaneat.jpg" name="EATING GIRL" description="MY OTHER FAVOURITE HOBBY" className="card-eating" />
    </div>
  );
}

export default App;