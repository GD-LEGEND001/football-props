import Image from "next/image";

import PlayersList from "./components/playersList";

export default function Home() {
  return (
    <main style={{ padding: 20, textAlign: "center" }}>
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </main>
  );
}
