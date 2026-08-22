import '../styles/Scorecard.css';

/*This component builds the HUD (Heads-Up Display) or 
control panel at the top of your game. It displays the game's title, instructions, and your active scoring statistics */

function Scorecard({bestScore, currScore}) {
    /* It accepts two pieces of data (props) from the parent (App): bestScore and currScore.
     Every time your score updates in the background, 
    this component automatically receives the new numbers and refreshes the screen */
    return (
       <div className='Header'>
        <div className='Title'>
        <h1 className='GameTitle'>Operation: Memory</h1>
        <p className='GameInstructions'>
        Review the dossiers. Click a commander to earn a point, but do not
        click the same general twice, or operation fails  
        </p>
        </div>

        {/* It renders the top-left text block of the screen. It establishes the game's military theme, 
        lays out the rules for the user, and sets up structural classes (GameTitle, GameInstructions) for easy styling */}
        
        <div className='Scoreboard'>
        <div className='Scorebox'>
       <span className='Scorelabel'>CURRENT SCORE</span>
       <span className='Value'>{currScore}</span>
        </div>
    {/* This box tracks the player's immediate progress. 
       {currScore} injects the active point count on the screen, updating in real-time with every successful unique click.*/}

       <div className='Scorebox Best'>
        <span className='Scorelabel'>BEST SCORE</span>
        <span className='Value'>{bestScore}</span>
       </div>
        </div>
        </div>
        //This box displays the record score achieved during the current play session. Notice the class name 'Scorebox Best'—adding that extra 
        // Best keyword allows
        //  a web designer to style this specific box with a unique highlight color (like neon green) to make the high score pop out
    );
}

export default Scorecard;