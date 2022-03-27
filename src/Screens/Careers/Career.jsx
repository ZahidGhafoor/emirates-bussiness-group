import React from 'react'
import "./Career.scss"

import career from "../../Assets/career.jpg"
const Career = () => {
    return (
        <div className="careers__container">
            <div className="career__heading">Careers</div>

            <div className="que1">
                <div className="que__heading">Why work at ERG?</div>
                <div className="text">Emirates Business Group is the perfect platform for ambitious employees to realize themselves and truly excel in reaching their goals and future aspirations. Our business environment and corporate ethics enable EBG personnel to achieve their own success through application of corporate policy and realization of its targets.</div>
            </div>


            <div className="que1">
                <div className="que__heading">Vacancies for Professionals</div>
                <div className="text">We value our staff at EBG and want to ensure that we employ the best and the most talented individuals. We look for enthusiastic, energetic and flexible team players who will enjoy the excitement and challenges of working for a very successful and rapidly growing organization.</div>
            </div>

            <div className="emiratisation">
                <div className="car__heading">Emiratisation</div>
                <div className="emi__bottom">
                <div className="left">
                    <img src={career} alt="" className="emirat__img" />
                </div>
                <div className="right">
                    <div className="upper">
                        “It is my duty as the leader of the young people of this country to encourage them to work and to exert “themselves in order to raise their own standards and to be of service to the country. The individual who is healthy and of a sound mind and body but who does not work commits a crime against himself and society.”
                    </div>
                    <div className="bottom">- SHEIKH ZAYED AL NAHYAN -
</div>
                </div>
                </div>
            
            </div>

            <div className="devlopment">
                <div className="car__heading">“Youth Development”</div>

                <div className="paras">
                    <div className="para1">One of the company’s main pillars is giving back and contributing to the Emirati community. Hence, we were keen to create Internship and Training programs that revolve around building successful coming generations that would benefit the UAE in the most efficient manner. </div>
                    <div className="para1">We offer real opportunities for those who are really interested in having a business experience with us. We at EBG, believe that it is our commitment and duty to invest in our social community as it’s an essential part of our business strategy. </div>
                    <div className="para1">Developing such programs is EBG’s way of giving back to the UAE and contributing to the country’s National Agenda, helping to fulfill UAE’s vision of nationalization and assisting the progress of the nation towards a brighter future.</div>
                </div>

            </div>


            <div className="que1">
                <div className="que__heading">Weleef Graduate Internship</div>
                <div className="textt">Weleef is an Arabic word that has deep roots in the Emirati culture and it means Apprentice. Due to its significance and profound meaning, EBG’s management has launched the “Weleef” internship program for Emirati nationals, focusing on the development of young Emirati university graduates and training them in a variety of corporate departments.</div>
            </div>


            <div className="que1">
                <div className="que__heading">Mureed Summer Program</div>
                <div className="textt">EBG’s training and internship opportunities even extend to Emirati’s youth in schools all over the UAE. Over the course of summer, “Mureed”, meaning he who yearns to learn over a period of time, is a training program dedicated to develop the skills of young nationals between the ages of 15 to 18, as EBG views that this is a crucial age for learning various skills and developing a successful character. Giving such an experience to UAE’s youth is a great method to involve the upcoming generation in country development initiatives, allowing them to take part in the country’s growth.</div>
            </div>


            <div className="resume">
                <div className="res__heading">
                Interested candidates may send their CV by filling up this form below
                </div>

                <button className="res__btn">
                    SUBMIT HERE
                </button>
            </div>

        </div>
    )
}

export default Career
