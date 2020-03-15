import React from 'react';
import styles from './Skill.module.css';
import s from './Skill.module.css';


function Skill() {
    function ListItem(props) {
        console.log(props)
        let text = props.value === "Демократ" ? s.an : "";
        return <p className={text + ' ' + s.dif}>{props.value}</p>;
    }

    function QualitiesList(props) {
        const qualities = props.qualities;
        return (
            <div>
                {qualities.map((quality, i) =>
                    <ListItem key={i}
                              value={quality}/>
                )}
            </div>
        );
    }

    const qualities = ["Оптимист", "Демократ", "Пофигист"];

    return (

        <div id="mapDiv">
            <QualitiesList qualities={qualities}/>

        </div>


    );
}

export default Skill;
