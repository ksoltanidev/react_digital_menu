import React, { useState, useRef, useContext } from "react";
import { CursorContext } from "../cursorContext/cursorContext";
import styles from './Menu.module.scss';

import Losange from '../losange/losange';
import ThreeScene from "../threeScene/ThreeScene";



function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [, setCursor] = useContext(CursorContext);
    const menuButtonRef = useRef(null);

    function getMenuOpenClass(state) {
        if (state) return styles.menuOpen;
        else return styles.menuClose;
    }
    
    function getSceneOpenClass(state) {
        if (state) return styles.sceneOpen;
        else return styles.sceneClose;
    }

    function getContentOpenClass(state) {
        if (state) return styles.buttonOpen;
        else return styles.buttonClose;
    }

    function getClassOpen(state){
        if (state) return styles.openClass;
        else return styles.closeClass;
    }

    const toggleCursor = () => {
        const boundingBox =  menuButtonRef.current.getBoundingClientRect();
/*         console.log("LEFT " + menuButtonRef.current.getBoundingClientRect().left);
        console.log("TOP " + menuButtonRef.current.getBoundingClientRect().top);
        console.log("C LEFT " + (boundingBox.left + boundingBox.width/2));
        console.log("C TOP " + (boundingBox.top + boundingBox.height/2));
        
        console.log("C width " + boundingBox.width);
        console.log("C width " + boundingBox.height);
        console.log(boundingBox); */
        setCursor(({ active }) => ({
            active: {
                value: !(active.value),
                x: boundingBox.left + boundingBox.width/2,
                y: boundingBox.top + boundingBox.height/2,
            }
        }));
    };

    return (
        <div className={styles.menuContainer}>
            <div className={[styles.menu, getMenuOpenClass(menuOpen)].join(' ')}>
            </div>
            <div className={styles.content}>
                <div className={[styles.menuButton, getContentOpenClass(menuOpen)].join(' ')}
                onClick={() => setMenuOpen(!menuOpen)}
                onMouseEnter={toggleCursor}
                onMouseLeave={toggleCursor}
                ref={menuButtonRef}>
                    <Losange />
                </div>
                <ul className={[styles.menuItems, getClassOpen(menuOpen)].join(' ')}>
                    <li><div>A propos de moi</div></li>
                    <li><div>Mes Projets</div></li>
                    <li><div>Infos et Contact</div></li>
                    <li><div>FreeStyle</div></li>
                </ul>
            </div>
            <div className={[styles.sceneContainer, getSceneOpenClass(menuOpen)].join(' ')}>
            <ThreeScene />
            </div>
        </div>
    );
}

export default Menu;
