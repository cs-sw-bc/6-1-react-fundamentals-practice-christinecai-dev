export function MovieBanner({title,bannerImage}){
    return(
        <div style={{position: "relative", marginBottom: 16, borderRadius: 12, overflow: "hidden"}}>
            <img src={bannerImage} alt={`${title} banner`} style={{width: "100%", height: 260, objectFit: "cover"}}/>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, background: "rgba(0,0,0,0.55)" }}>
                <h1 style={{margin: 0, color: "white"}}>{title}</h1>
            </div>
        </div>
    );

}