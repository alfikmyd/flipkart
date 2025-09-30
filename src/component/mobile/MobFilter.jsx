import { useState } from "react"

function Filt() {

    const [selectedFilter, setSelectedFilter] = useState(null)
    const [color, setColor] = useState("")

    const price = [
        { label: "Rs. 20000 and Below" },
        { label: "Rs. 20000-Rs. 40000" },
        { label: "Rs. 40000-Rs. 50000" },
        { label: "Rs. 50000-Rs. 60000" },
        { label: "Rs. 60000-Rs. 75000" },
        { label: "Rs. 75000 and Above" }
    ]
    const brand = [
        { label: "HP" }, { label: "ASUS" }, { label: "Lenovo" },
        { label: "DELL" }, { label: 'MSI' }, { label: "Acer" }, { label: "Apple" }
    ]
    const type = [
        { label: "Gaming Laptop" }, { label: '2 in 1 Laptop' },
        { label: "Laptop" }, { label: "Chromebook" },
        { label: "Creator Laptop" }
    ]
    const processor = [
        { label: "Core i5" }, { label: "Core i3" }, { label: "Core i7" },
        { label: "Core i9" }, { label: "Ryzen 7 Quad Core" },
        { label: "M1" }, { label: "Ryzen 5 Quad Core" }
    ]
    const generation = [
        { label: "13th Gen" }, { label: "12th Gen" }, { label: "11th Gen" },
        { label: "10th Gen" }, { label: "8th Gen" },
        { label: "14th Gen" }, { label: "7th Gen" }
    ]
    const ram = [
        { label: "8 GB" }, { label: "16 GB" }, { label: "32 GB" },
        { label: "6 GB" }, { label: "18 GB" }, { label: "36 GB" }, { label: "64 GB" }
    ]
    const ssd = [
        { label: "512 GB" }, { label: "256 GB" }, { label: "1 TB" },
        { label: "128 GB" }, { label: "8 GB" }, { label: "4 TB" }
    ]
    const screen = [
        { label: "Below 12 inch" }, { label: "14 inch - 14.9 inch" },
        { label: "15 inch - 15.9 inch" }, { label: "16 inch - 17.9 inch" },
        { label: "Above 20 inch" }
    ]
    const os = [
        { label: "Windows 11 Home" }, { label: "Windows 11" },
        { label: "Chrome" }, { label: "Mac OS" }, { label: "DOS" },
        { label: "Android" }, { label: "Windows 10" }
    ]
    const weight = [
        { label: "1.2 KG or Below" }, { label: "1.2 KG to 1.5 KG" },
        { label: "1.6 KG to 1.8 KG" }, { label: "1.9 KG to 2.1 KG" },
        { label: "Above 2.6 KG" }
    ]
    const proBrand = [
        { label: "Intel" }, { label: "Apple" },
        { label: "Snapdragon" }, { label: "MediaTek" },
        { label: "Qualcomm" }, { label: "AMD" }
    ]
    const usage = [
        { label: "Student" }, { label: "Business" },
        { label: "Gaming" }, { label: "Home/Office" },
        { label: "Everyday Use, Office, Student" }
    ]
    const graphics = [
        { label: "4 GB" }, { label: "Integrated Graphics Card" },
        { label: "6 GB" }, { label: "8 GB" }
    ]
    const features = [
        { label: "MS Office" }, { label: "Full HD Display" },
        { label: "No Optical Disk Drive" }
    ]
    const discount = [
        { label: "50% or more" }, { label: "40% or more" },
        { label: "30% or more" }, { label: "20% or more" },
        { label: "10% or more" }
    ]
    const customer = [
        { label: "4★ & above" }, { label: "3★ & above" },
        { label: "2★ & above" }, { label: "1★ & above" }
    ]
    const touch = [
        { label: "Yes" }, { label: "No" }
    ]
    const storage = [
        { label: "SSD" }, { label: "eMMC" }
    ]
    const ramType = [
        { label: "DDR4" }, { label: "LPDDR4X" },
        { label: "LPDDR4" }
    ]
    const availability = [
        { label: "Include Out of Stock" }
    ]

    
    return (
        <>
            <div id="smallFilt">
                <div id="filtHead">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                        <span style={{ marginLeft: "19px" }}>Filters</span>
                    </div>

                    <div className="mobClearFilt">
                        <span>Clear Filters</span>
                    </div>
                </div>

                <div className="mobFilters">
                    <div className="mobFiltHead">
                        <div onClick={() => setSelectedFilter("price")}
                            style={selectedFilter === "price" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Price</span></div>
                        <div onClick={() => setSelectedFilter("brand")}
                            style={selectedFilter === "brand" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Brand</span></div>
                        <div onClick={() => setSelectedFilter("type")}
                            style={selectedFilter === "type" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Type</span></div>
                        <div onClick={() => setSelectedFilter("processor")}
                            style={selectedFilter === "processor" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Processor</span></div>
                        <div onClick={() => setSelectedFilter("ram")}
                            style={selectedFilter === "ram" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>RAM Capacity</span></div>
                        <div onClick={() => setSelectedFilter("ssd")}
                            style={selectedFilter === "ssd" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>SSD Capacity</span></div>
                        <div onClick={() => setSelectedFilter("screen")}
                            style={selectedFilter === "screen" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Screen Size</span> </div>
                        <div onClick={() => setSelectedFilter("os")}
                            style={selectedFilter === "os" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Operating System</span></div>
                        <div onClick={() => setSelectedFilter("discount")}
                            style={selectedFilter === "discount" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Discount</span></div>
                        <div onClick={() => setSelectedFilter("customer")}
                            style={selectedFilter === "customer" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Customer Ratings</span></div>
                        <div onClick={() => setSelectedFilter("weight")}
                            style={selectedFilter === "weight" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Weight</span></div>
                        <div onClick={() => setSelectedFilter("generation")}
                            style={selectedFilter === "generation" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Processor Generation</span></div>
                        <div onClick={() => setSelectedFilter("touch")}
                            style={selectedFilter === "touch" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Touch Screen</span></div>
                        <div onClick={() => setSelectedFilter("proBrand")}
                            style={selectedFilter === "proBrand" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Processor Brand</span></div>
                        <div onClick={() => setSelectedFilter("usage")}
                            style={selectedFilter === "usage" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Usage</span></div>
                        <div onClick={() => setSelectedFilter("graphics")}
                            style={selectedFilter === "graphics" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Dedicated Graphics Memory</span></div>
                        <div onClick={() => setSelectedFilter("features")}
                            style={selectedFilter === "features" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Features</span></div>
                        <div onClick={() => setSelectedFilter("storage")}
                            style={selectedFilter === "storage" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Storage Type</span></div>
                        <div onClick={() => setSelectedFilter("ramType")}
                            style={selectedFilter === "ramType" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Ram Type</span> </div>
                        <div onClick={() => setSelectedFilter("availability")}
                            style={selectedFilter === "availability" ? { backgroundColor: "white", color: "#2874f0" } : {}}
                        ><span>Availability</span></div>

                    </div>


                    <div id="rightFilter">
                        {selectedFilter === "price" && (
                            <div className="mobPrice">
                                {price.map((p) => (
                                    <label key={p.label}>
                                        <input type="checkbox" />
                                        {p.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "brand" && (
                            <div className="mobBrand">
                                {brand.map((b) => (
                                    <label key={b.label}>
                                        <input type="checkbox" />
                                        {b.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "discount" && (
                            <div className="mobDiscount">
                                {discount.map((d) => (
                                    <label key={d.label}>
                                        <input type="checkbox" />
                                        {d.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "type" && (
                            <div className="mobType">
                                {type.map((t) => (
                                    <label key={t.label}>
                                        <input type="checkbox" />
                                        {t.label}
                                    </label>
                                ))}
                            </div>
                        )}


                        {selectedFilter === "processor" && (
                            <div className="mobProcessor">
                                {processor.map((t) => (
                                    <label key={t.label}>
                                        <input type="checkbox" />
                                        {t.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "generation" && (
                            <div className="mobGeneration">
                                {generation.map((t) => (
                                    <label key={t.label}>
                                        <input type="checkbox" />
                                        {t.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "touch" && (
                            <div className="mobTouch">
                                <span style={{ fontSize: "12px", color: "#878787" }}>Popular Filters</span>
                                {touch.map((t) => (
                                    <label key={t.label}>
                                        <input type="checkbox" />
                                        {t.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "ram" && (
                            <div className="mobRam">
                                {ram.map((r) => (
                                    <label key={r.label}>
                                        <input type="checkbox" />
                                        {r.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "ssd" && (
                            <div className="mobSsd">
                                {ssd.map((s) => (
                                    <label key={s.label}>
                                        <input type="checkbox" />
                                        {s.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "screen" && (
                            <div className="mobscreen">
                                {screen.map((s) => (
                                    <label key={s.label} >
                                        <input type="checkbox" />
                                        {s.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "os" && (
                            <div className="mobOs">
                                {os.map((o) => (
                                    <label key={o.label}>
                                        <input type="checkbox" />
                                        {o.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "weight" && (
                            <div className="mobWeight">
                                {weight.map((w) => (
                                    <label key={w.map}>
                                        <input type="checkbox" />
                                        {w.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "proBrand" && (
                            <div className="mobProBrand">
                                {proBrand.map((p) => (
                                    <label key={p.label}>
                                        <input type="checkbox" />
                                        {p.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "usage" && (
                            <div className="mobUsage">
                                {usage.map((u) => (
                                    <label key={u.label}>
                                        <input type="checkbox" />
                                        {u.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "storage" && (
                            <div className="mobStorage">
                                {storage.map((s) => (
                                    <label key={s.label}>
                                        <input type="checkbox" />
                                        {s.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "ramType" && (
                            <div className="mobRamType">
                                {ramType.map((r) => (
                                    <label key={r.label}>
                                        <input type="checkbox" />
                                        {r.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "graphics" && (
                            <div className="mobGraphics">
                                {graphics.map((g) => (
                                    <label key={g.label}>
                                        <input type="checkbox" />
                                        {g.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "features" && (
                            <div className="mobFeature">
                                {features.map((f) => (
                                    <label key={f.label}>
                                        <input type="checkbox" />
                                        {f.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "customer" && (
                            <div className="mobCustomer">
                                {customer.map((c) => (
                                    <label key={c.label}>
                                        <input type="checkbox" />
                                        {c.label}
                                    </label>
                                ))}
                            </div>
                        )}

                        {selectedFilter === "availability" && (
                            <div className="mobAvailable">
                                {availability.map((a) => (
                                    <label key={a.label}>
                                        <input type="checkbox" />
                                        {a.label}
                                    </label>
                                ))}
                            </div>
                        )}


                    </div>

                </div>

                <div id="mobFooter">
                    <div className="mobFootCount">
                        <span style={{ fontSize: "16px" }}>2,175</span>
                        <span style={{ fontSize: "12px", color: "#878778" }}>products found</span>
                    </div>

                    <div className="mobFiltApply">
                        <button>Apply</button>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Filt;