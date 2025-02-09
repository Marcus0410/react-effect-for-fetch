import { useEffect } from "react"
import { useState } from "react"

function AdviceSection() {
    const [advice, setAdvice] = useState(null)
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then((res) => res.json())
            .then((data) => setAdvice(data.slip.advice))
    }, [])

    function getMoreAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then((res) => res.json())
            .then((data) => setAdvice(data.slip.advice))
    }

    function saveToFavourites() {
        setFavourites([...favourites, advice])
    }

    return (
        <section>
            <h2>Advice Section</h2>
            <section className="adivce-slip">
                <h3>Some Advice</h3>
                <p>{advice}</p>
                <p></p>
                <button onClick={getMoreAdvice}>Get More Advice</button>
                <button onClick={saveToFavourites}>Save to Favourties</button>
            </section>
            <section className="favourtite-slips-list">
                <h3>Favourite Advice Slips</h3>
                <ul>
                    {favourites && favourites.map((advice, index) =>
                        <li key={index}>{advice}</li>
                    )}
                </ul>
            </section>
        </section>
    )
}

export default AdviceSection
