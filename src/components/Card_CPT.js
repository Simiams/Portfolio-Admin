import React, {Component} from 'react';

class Card_CPT extends Component {
    render() {
        this.s
        this.props.profil = {}
        return (

            <div className={"card"}>
                <div className="id">
                    <div className="idContent">
                        <div className="head">
                            <h3>caca caca</h3>
                            <h3>pipi</h3>
                        </div>
                        <div className="image" style={{
                            background: `url(${"/bg.jpeg"}) repeat scroll center`
                        }}>
                            <img src="/pdp.png" alt="profil pic"/>
                        </div>
                    </div>
                </div>

                <div className="skills" id={"skills"}>
                    <ul>
                        <li>
                            <div className={"addSkill cardSkill"}>
                                <span>Ajouter une competence</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="signature">
                    <p>From SimonConvert</p>
                </div>

            </div>

        );
    }
}

export default Card_CPT;
