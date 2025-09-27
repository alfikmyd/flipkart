import { useEffect, useState } from "react";

function MobProcess(){
    const [processor, setProcessor] = useState([]);

    useEffect(() => {
        fetch("/Processor.json")
            .then(res => res.json())
            .then(data => setProcessor(data));
    },[]);


    return(
        <>
            <div id="procViolet">
                <span>Which Processor are you looking for ?</span>

                <div className="mobProsName">
                    {processor.map((item,index) => (
                        <div key={index} className="prosEach">
                            <span>{item.processorName}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default MobProcess;