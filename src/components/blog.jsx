import { data } from "./data"
import "../App.css"
import { Card } from "./card"

export const Blog = () => {

    
   console.log(data);
    return (
        <div>
        <div className="outer_div">
            {
                data.map((element) => (
                    
                            <Card
                            title={element.title}
                            key={element.id}
                            description={element.desc}
                            image = {element.image}
                            />
                )
                )

            }
        </div>
        </div>
    )


}