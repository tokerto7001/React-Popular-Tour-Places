import { data } from "./data"
import "../App.css"
import { useEffect, useState } from "react"

export const Blog = () => {

    const [id,setId] = useState("")
    const [visible, setVisible] = useState(false)

    const handleMouseOver = () => {
        setVisible(true)
        
    }
    const handleMouseLeave = () => {
        setVisible(false)
    }
    const handle = (e) => {
        setId(e.target.id)
    }
   
    return (
        <div>
        <div className="outer_div">
            {
                data.map((element, index) => {
                    return (

                        <div className="card" id={element.id} onMouseOver={handle} >
                            <div className="card_title">
                                <h2>{element.title}</h2>
                            </div>
                            <div className="card-body" onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} id={element.id} >
                                <div className="image_div"
                                 id={element.id}   
                                >
                                    <img className="card_image"
                                        alt={element.title}
                                        src={element.image}
                                        id={element.id}
                                        
                                    />
                                </div>
                                <p id={element.id} className= {visible && id == element.id ? "card_description_visible" : "card_description"} style={{fontSize:"0.8em"}} >
                                    {element.desc}
                                </p>
                            </div>
                        </div>

                    )

                })
            }
        </div>
        </div>
    )


}