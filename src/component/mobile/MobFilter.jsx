

function Filt() {


    const price = [
        {label: "Rs. 20000 and Below"},
        {label: "Rs. 20000-Rs. 40000"},
        {label: "Rs. 40000-Rs. 50000"},
        {label: "Rs. 50000-Rs. 60000"},
        {label: "Rs. 60000-Rs. 75000"},
        {label: "Rs. 75000 and Above"}
    ]
    const brand = [
        {label: "HP"},{label: "ASUS"}, {label: "Lenovo"},
        {label: "DELL"},{label: 'MSI'},{label: "Acer"},{label:"Apple"}
    ]
    const type = [
        {label: "Gaming Laptop"},{label:'2 in 1 Laptop'},
        {label: "Laptop"},{label: "Chromebook"},
        {label: "Creator Laptop"}
    ]
    const processor = [
        {label:"Core i5"},{label:"Core i3"},{label: "Core i7"},
        {label:"Core i9"},{label: "Ryzen 7 Quad Core"},
        {label: "M1"},{label:"Ryzen 5 Quad Core"}
    ]
    const generation =[
        {label:"13th Gen"},{label:"12th Gen"},{label: "11th Gen"},
        {label: "10th Gen"},{label: "8th Gen"},
        {label: "14th Gen"},{label:"7th Gen"}
    ]
    const ram = [
        {label: "8 GB"},{label:"16 GB"},{label:"32 GB"},
        {label:"6 GB"},{label:"18 GB"},{label:"36 GB"},{label:"64 GB"}
    ]
    const ssd =[
        {label: "512 GB"},{label:"256 GB"},{label:"1 TB"},
        {label: "128 GB"},{label:"8 GB"},{label:"4 TB"}
    ]
    const screen =[
        {label:"Below 12 inch"},{label:"14 inch - 14.9 inch"},
        {label:"15 inch - 15.9 inch"},{label:"16 inch - 17.9 inch"},
        {label:"Above 20 inch"}
    ]
    const os = [
        {label:"Windows 11 Home"},{label:"Windows 11"},
        {label:"Chrome"},{label: "Mac OS"},{label:""},{label:"DOS"},
        {label:"Android"},{label:"Windows 10"}
    ]
    const weight = [
        {label: "1.2 KG or Below"},{label: "1.2 KG to 1.5 KG"},
        {label: "1.6 KG to 1.8 KG"},{label:"1.9 KG to 2.1 KG"},
        {label:"Above 2.6 KG"}
    ]
    const proBrand = [
        {label:"Intel"},{label:"Apple"},
        {label:"Snapdragon"},{label:"MediaTek"},
        {label:"Qualcomm"},{label:"AMD"}
    ]
    const usage = [
        {label:"Student"},{label:"Business"},
        {label:"Gaming"},{label:"Home/Office"},
        {label:"Everyday Use, Office, Student"}
    ]
    const graphics = [
        {label:"4 GB"},{label:"Integrated Graphics Card"},
        {label:"6 GB"},{label:"8 GB"}
    ]
    const features = [
        {label:"MS Office"},{label:"Full HD Display"},
        {label:"No Optical Disk Drive"}
    ]

    return (
        <>
        <div id="smallFilt">
            <div id="filtHead">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
                <span>Filters</span>
                </div>

                <div>
                    <span>Clear Filters</span>
                </div>
            </div>

            <div className="mobfilters">
                <div className="mobFiltHead">
                    <div><span>Price</span></div>
                    <div><span>Brand</span></div>
                    <div><span>Type</span></div>
                    <div><span>Processor</span></div>
                    <div><span>RAM Capacity</span></div>
                    <div><span>SSD Capacity</span></div>
                    <div><span>Screen Size</span> </div>
                    <div><span>Operating System</span></div>
                    <div><span>Discount</span></div>
                    <div><span>Customer Ratings</span></div>
                    <div><span>Weight</span></div>
                    <div><span>Processor Generation</span></div>
                    <div><span>Touch Screen</span></div>
                    <div><span>Processor Brand</span></div>
                    <div><span>Usage</span></div>
                    <div><span>Dedicated Graphics Memory</span></div>
                    <div><span>Features</span></div>
                    <div><span>Storage Type</span></div>
                    <div><span>Graphics Memory Type</span></div>
                    <div><span>Graphics Processor Name</span></div>
                    <div><span>Hard Disk Capacity</span></div>
                    <div><span>Ram Type</span> </div>
                    <div><span>Availability</span></div>
                    <div><span>GST Invoice Available</span></div>
                    <div><span>Offers</span></div>
                </div>


                <div></div>

            </div>

            </div>
        </>
    )
}


