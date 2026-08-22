import "../styles/Game.css";

function Game({ CARDS, onChange }) {
  return (
    <div className="Game">
      {CARDS.map((general) => (
        //It loops through your array of cards one by one
        <div
          key={general.id}
          className="GameCard"
          onClick={() => onChange(general.id)}
          /*key={general.id}: This is a hidden tag for React. Because the cards shuffle constantly, 
          React uses this unique ID to track which card moved where, instead of destroying and rebuilding 
          the card from scratch.onClick={() => onChange(general.id)}: This listens for a user click. When clicked, it runs your 
          onChange function and passes up the specific ID of the clicked general so the game knows which card you chose. */
        >
          {/* Fallback background color if image fails to load */}
          <div className="CardImageContainer">
            <img src={general.image} alt={general.name} className="CardImage" />
          </div>
           {/*src={general.image}: The URL or file path where the general's picture is stored.alt={general.name}: 
           Text that describes the image. If the image fails to 
           load, or if a visually impaired person uses a screen reader, this text displays/reads the general's name instead. */}
          
          {/*Displays the text name of the general at the bottom of the card */}
          <div className="CardLabel">
         <span className="Name">{general.name}</span>
          </div>
        </div>
       ))}
    </div>
  );
}

export default Game;