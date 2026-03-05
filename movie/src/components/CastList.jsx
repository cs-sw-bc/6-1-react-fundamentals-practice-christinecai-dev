import {CastCard} from "./CastCard";

export function CastList(){
    return(
      <div style={{ background: "#fff", padding: 16, borderRadius: 12, border: "1px solid #eee" }}>
        <h2 style={{ marginTop: 0 }}>Cast</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CastCard
            actorName="Matthew McConaughey"
            characterName="Cooper"
            actorImage="https://commons.wikimedia.org/wiki/Special:FilePath/Matthew_McConaughey_2019_%2848648344772%29_%28cropped%29.jpg"
          />

          <CastCard
            actorName="Anne Hathaway"
            characterName="Dr. Amelia Brand"
            actorImage="https://commons.wikimedia.org/wiki/Special:FilePath/Anne_Hathaway_2019_%28cropped%29.jpg"
          />

          <CastCard
            actorName="Jessica Chastain"
            characterName="Murph"
            actorImage="https://commons.wikimedia.org/wiki/Special:FilePath/Jessica_chastain_Cannes_2017_%28cropped%29.jpg"
          />
        </div>
      </div>
    );
}
