import { useState } from "react"
import Artlist from "./components/ArtList"
import { useEffect } from "react"

function ArtsSection() {
    const [arts, setArts] = useState([])

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/art")
            .then((res) => res.json())
            .then((data) => setArts(data))
    }, [])

    return (
        <section>
            <h2>Arts Section</h2>
            <div className="scroll-container">
                <Artlist arts={arts} />
            </div>
        </section>
    )
}

export default ArtsSection
