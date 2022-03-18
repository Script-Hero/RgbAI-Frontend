import React from 'react';
import './AboutPage.css';
import {ReactComponent as Logo} from '.././left-arrow.svg';
import { Link } from "react-router-dom";

export default class AboutPage extends React.Component {

   
    render(){
        return (
        <div id="aboutPage">
            <div id="backArrowContainer">
                <Link to='/'><Logo id = 'back-arrow'/></Link>
            </div>

            <div id="textContainer">

                <h1 className="header">General</h1>
                <ul class="text">
                    <li>Your goal is to create a visually appealing color palette composed of 4 colors.</li>
                    <li>You'll do this by increasing your pallete's score as much as possible.</li>
                    <li>The first color you are given is a "prompt" color, which you cannot change. The other 3 colors, however, you can change.</li>
                    <li>The "Calculate" button gives your palette a score from our AI.</li>
                    <li>The "Adjust" button will slightly adjust your colors in a way that improves its score.</li>
                </ul>


                <h1 className="header">Wdym by Color Palette?</h1>
                <ul className="text">
                    <li>Color palettes should be 4 colors that go together in a way that is both visually interesting and harmonious.</li>
                    <li>If colors are too similar, then your pallete is boring. Too different and conflicting, and your palette becomes harsh.</li>
                    <li>Think like an eyeshadow palette or an outfit's color scheme. There is variety in the colors, but each color ultimately looks nice next to the others.</li>
                </ul>

                <h1 className="header">How to Use the AI</h1>
                <ul className="text">
                    <li>Start with your own 3 colors and hit "Calculate" to see the evaluation.</li>
                    <li>Make adjustments to your colors and hit "Calculate" each time to see the effect on the score.</li>
                    <li>If you get stuck or are not making progress, use the "Adjust" button. However, only hit "Adjust" once between each of your own, manual adjustments.</li>
                    <li>The "Adjust" button usually has difficulty making improvements at low scores, but can more easily make changes as score increases. </li>
                </ul>


                <h1 className="header">What your Score Means</h1>
                <ul className="text">
                    <li>The score you are given is not strictly a measure of the quality of your color palette. Your score is the AI's confidence that your color palette follows color theory.</li>    
                    <li>For example, very simple and common patterns have extremely high scores, not because they're "better", but because the AI has an easier time feeling confident that the palette follows color theory.</li>
                    <li>Usually, palettes of scores 85% and above are of about the same visual quality, and increases in the score from there is usually just making the combination even more obvious or recognizable to the AI.</li>
                    <li>You can earn very high scores on the same prompt color with different types of color sets. There is no one right answer to get to a high score, even for the same given prompt color.</li>
                </ul>    
            </div>
        </div>
        );
    }
}