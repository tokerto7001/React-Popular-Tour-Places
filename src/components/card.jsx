import { useState } from "react"

export const Card = ({title, image, description}) => {

    const [visible, setVisible] = useState(false)

    const handleMouseOver = () => {
        setVisible(true)
        
    }
    const handleMouseLeave = () => {
        setVisible(false)
    }
    
    console.log("rerender");
    return (

        <div className="card"   >
            <div className="card_title">
                <h2>{title}</h2>
            </div>
            <div className="card-body" onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave} >
                <div className="image_div"
                >
                    <img className="card_image"
                        alt={title}
                        src={image}
                    />
                </div>
                <div  className={visible ? "card_description_visible" : "card_description"} style={{ fontSize: "0.8em" }} >
                    {description}
                </div>
            </div>
        </div>
        
    )
}