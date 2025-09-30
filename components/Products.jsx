'use client'

import { useState } from "react"
import Portal from "./Portal"
import { useProducts } from "@/context/ProductContext"

export default function Products(){
    const [portalImage, setPortalImage] = useState(null)

    const { handleIncrementProduct, cart } = useProducts()
    console.log(cart)

    const stickers_priceid = ["CSS_HTML_Javascript_price_id", "Docker_price_id", "Firebase_price_id", "Nextjs_price_id",
        "Nodejs_price_id", "Postgresql_price_id", "Reactjs_price_id"]

    const stickerDescriptions = {
        CSS_HTML_Javascript: "Core web technologies for structure, styling, interactivity.",
        Docker: "Platform for containerizing, deploying and scaling applications",
        Firebase: "Cloud platform for databases, authentication, and app backend.",
        NextJS: "React-based framework for server-side rendering and static-sites.",
        NodeJS: "JavaScript runtime for building scalable backend applications.",
        PostgreSQL: "Robust open-source database with advanced querying",
        ReactJS: "Javascript library for building interactive user interfaces"
    }    
    const stickers = Object.keys(stickerDescriptions)

    return(
        <>
           {portalImage && (
            <Portal handClosePortal={() => {setPortalImage(null)}}>
                <div className="portal-content">
                    <img className="img-display" src={`med_res/${portalImage}.jpeg`}
                    alt={`${portalImage}-high-res`} />
                </div>
            </Portal>
           )}

           <div className="section-container">
            <div className="section-header">
                <h2>Shop Our Selection</h2>
                <p>From organization to accessorization</p>
            </div>

            <div className="planner-container">
                <div>
                    <button onClick={() => {
                        setPortalImage('planner')
                    }} className="img-button">
                        <img src="low_res/planner.jpeg" alt="high-res-planner" />
                    </button>
                </div>
                <div className="planner-info">
                    <p className="text-large planner-header">
                        Medieval Dragon Month Planner
                    </p>
                    <h3><span>$</span>14.99</h3>
                    <p>Step into a realm of fantasy and organization with our <strong>Medieval Dragon Month Planner</strong>! This high-resolution PNG asset combines the fierce elegance of dragons with intricate medieval designs to create a planner that's not only functional but also a work of art. Whether you&apos;re jotting down quests, planning battles, or just scheduling your weekly grocery run, this planner is your ultimate companion.</p>
                    <ul>
                        <li><strong>Epic Dragon Artwork:</strong> Stunning hand-drawn dragon motifs and medieval-inspired borders make every month feel legendary.
                        </li>
                        <li>
                            <strong>Fully Printable:</strong> Designed at ultra-high resolution, it&apos;s perfect for printing on any size paper, from A4 to poster-sized displays.
                        </li>
                    </ul>
                    <div className="purchase-btns">
                        <button onClick={() => {
                            const plannerPriceId = "planner_price_id"
                            const planner_data = { 
                                "name" : "Medieval Dragon Month Planner",
                                "description" : "Step into a realm of fantasy and organization with our Medieval Dragon Month Planner! This high-resolution PNG asset combines the fierce elegance of dragons with intricate medieval designs to create a planner that's not only functional but also a work of art. Whether you are jotting down quests, planning battles, or just scheduling your weekly grocery run, this planner is your ultimate companion.",
                                "image_name" : "planner",
                                "image_url" : "low_res/planner.jpeg",
                                "priceId" : plannerPriceId,
                                "price_amount" : 14.99
                            }
                            handleIncrementProduct(plannerPriceId, 1, planner_data)
                        }} >Add to cart</button>
                    </div>
                </div>
            </div>
           </div>


           <div className="section-container"></div>
            <div className="section-header">
                <h2>Or Collect Your Favorite Tech</h2>
                <p>Choose from our custom designed tech logos</p>
            </div>
            <div className="sticker-container">
                {stickers.map((sticker, stickerIndex) => {
                    return (
                        <div key={stickerIndex} className="sticker-card">
                            <button onClick={() => {
                        setPortalImage(sticker)
                    }} className="img-button">
                                <img src={`low_res/${sticker}.jpeg`} alt={`${sticker}-low-res`} />
                            </button>
                            <div className="sticker-info">
                                <p className="text-medium">{sticker.replaceAll('_', ' ')} sticker.png</p>
                                <p>{stickerDescriptions[sticker]}</p>
                                <h4><span>$</span>5.99</h4>
                                <button onClick={() => {
                            const stickerPriceId = stickers_priceid[stickerIndex]
                            const sticker_data = { 
                                "name" : sticker.replaceAll('_', ' ') + " " + "sticker.png",
                                "description" : stickerDescriptions[sticker],
                                "image_name" : sticker,
                                "image_url" : `low_res/${sticker}.jpeg`,
                                "priceId" : stickerPriceId,
                                "price_amount" : 5.99                          
                            }
                            handleIncrementProduct(stickerPriceId, 1, sticker_data)
                        }}>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}