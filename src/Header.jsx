
// Header-komponenten som innehåller navigationsmenyn
function Header() {
    return (
      <header> 
        {/* Titel för webbplatsen */}
        <h1>My test-Website</h1>  
  
        {/* Navigationsmeny */}
        <nav>
          <ul>
            {/* Lista med länkar till olika sidor */}
            <li><a href="#">Home</a></li>       {/* Länk till startsidan */}
            <li><a href="#">About</a></li>      {/* Länk till "Om oss"-sidan */}
            <li><a href="#">Service</a></li>    {/* Länk till tjänster */}
            <li><a href="#">Contact</a></li>    {/* Länk till kontaktsidan */}
          </ul>
        </nav>
  
        {/* Horisontell linje för visuell avskiljning */}
        <hr />
      </header>
    );
  }
  
  // Exporterar Header-komponenten så att den kan användas i andra filer
  export default Header