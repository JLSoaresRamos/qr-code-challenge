import React from "react"

export default function Card() {
    return(
        <div className="w-fit mx-4 max-w-sm h-fit bg-white rounded-2xl px-6 pt-6 pb-10 font-Outfit">
            <img 
                src="../images/image-qr-code.png" 
                alt="QRCode"
                className="rounded-xl w-fit mx-auto" 
            />
            <section className="text-center mt-8">
                <h1 className="font-bold mb-4 text-2xl text-[#1f3251] text-balance">
                    Improve your front-end skills by building projects
                </h1>
                <p className="text-xl md:text-base mx-5 text-[#7b879d]">
                    Scan the QR code to visit Frontend Mentor and take
                    your coding skills to the next level
                </p>
            </section>
        </div>
    ) 
}