import { data } from "./data"
import "../App.css"
import { Card } from "./card"

export const Blog = () => {

    
   console.log("rerender");
    return (
        <div>
        <div className="outer_div">
            {
                data.map((element) => {
                    return <Card
                            title = {element.title}
                            image = {element.image}
                            description = {element.desc}
                            />
                })

            }
        </div>
        </div>
    )


}