export function RatingsBox({rating, review}){
    return(
        <div style={{ background: "#0b1220", color: "white", padding: 16, borderRadius: 12, marginBottom: 16 }}>
            <h2 style={{ marginTop: 0 }}>Rating</h2> 
            <p style={{ margin: "8px 0", fontSize: 18, fontWeight: "bold" }}>IMDB: {rating} / 10</p>
            <p style={{ margin: 0, color: "#cbd5e1" }}>{review}</p>
        </div>
    );
}