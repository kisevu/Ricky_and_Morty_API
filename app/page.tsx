import Locations from "./locations/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-7xl font-bold py-8">Rick & Morty</h1>
      <Locations />
    </main>
  );
}
