export function CastCard({actorName, characterName, actorImage}){
    return(
        <div style={{ width: 240, border: "1px solid #eee", borderRadius: 12, overflow: "hidden" }}>
            <img src={actorImage} alt={actorName} style={{ width: "100%", height: 180, objectFit: "cover" }} />
            <div style={{ padding: 12 }}>
                 <h3 style={{ margin: "0 0 6px 0" }}>{actorName}</h3>
                 <p style={{ margin: 0, color: "#555" }}>as {characterName}</p>
            </div>
        </div>
    );
}