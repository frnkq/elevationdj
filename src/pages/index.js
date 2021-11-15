import { useRouter } from "next/dist/client/router";
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json());

function HomePage() {
    const playlistPlaceholder = "Playlist";
    const totalKmsPlaceholder = "KMs";
    const kmsPerHourPlaceholder = "KMs/h";

    let playlist = null;
    let totalKms = null;
    let kmsPerHour = null;

    const sortPlaylist = async () => {
        const res = await fetch('/api/analyzer/getMapVector');
        const vector = await res.json();
        console.log(vector);
    }

    const uploadMap = ()=>{
        alert("not implemented");
    }

    const onInputCapture = (e) => {
        const inputPlaceholder = e.nativeEvent.target.placeholder;
        const inputValue = e.nativeEvent.target.value;

        switch (inputPlaceholder) {
            case playlistPlaceholder:
                playlist = inputValue;
                break;
            case totalKmsPlaceholder:
                totalKms = inputValue;
                break;
            case kmsPerHourPlaceholder:
                kmsPerHour = inputValue;
                break;
        }

    }

    return <>
        <div className="flex flex-column p-5 grid text-center">
            <div className="my-6 text-xl">
                <p>Mapa de elevación</p>
                <input onClick={uploadMap} className="rounded border-4 border-purple-400 p-2 mt-2" type="file"></input>
            </div>
            <div className="my-6 text-xl">
                <p>Playlist</p>
                <input onInputCapture={onInputCapture} className="rounded border-4 border-purple-400 p-2 mt-2" type="text" placeholder={playlistPlaceholder}></input>
            </div>
            <div className="my-6 text-xl">
                <p>Total Kilometros</p>
                <input onInputCapture={onInputCapture} className="rounded border-4 border-purple-400 p-2 mt-2" type="number" placeholder={totalKmsPlaceholder}></input>
            </div>
            <div className="my-6 text-xl">
                <p>Kilometros por hora</p>
                <input onInputCapture={onInputCapture} className="rounded border-4 border-purple-400 p-2 mt-2" type="number" placeholder={kmsPerHourPlaceholder}></input>
            </div>
            <div className="my-6 text-xl">
                <button className="py-2 px-3 bg-purple-700 disabled:opacity-50 rounded text-2xl" onClick={sortPlaylist} >Ordenar playlist</button>
            </div>
        </div>
    </>

}

export default HomePage
