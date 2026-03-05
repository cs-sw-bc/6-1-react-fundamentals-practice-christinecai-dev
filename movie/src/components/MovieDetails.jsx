export function MovieDetails({description, year}){
    return(
        <div style={{ background: "#f6f6f6", padding: 16, borderRadius: 12, marginBottom: 16 }}>
            <h2 style={{ marginTop: 0 }}>Details</h2>
            <p style={{ margin: "8px 0" }}>{description}</p>
            <p style={{ margin: 0, fontWeight: "bold" }}>Release Year: {year}</p>
        </div>
    );
}