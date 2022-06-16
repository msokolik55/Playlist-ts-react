import { useEffect, useState } from "react";
import "./App.css";

interface ISong {
	name: string;
	url: string;
}

function App() {
	//#region Static Data
	const songs: ISong[] = [
		{
			name: "Coldplay - The Scientist",
			url: "https://res.cloudinary.com/dvwayyj5d/video/upload/v1617727983/Coldplay_-_The_Scientist_jbyuef.mp3",
		},
		{
			name: "Dog",
			url: "https://res.cloudinary.com/demo/video/upload/dog.mp3",
		},
	];
	//#endregion

	//#region State
	const [idx, setIdx] = useState(0);
	const [audio, setAudio] = useState(new Audio(songs[idx].url));

	const [isPlaying, setIsPlaying] = useState(false);
	//#endregion

	//#region Effects
	useEffect(() => {
		audio.play();
		setIsPlaying(true);
	}, [audio]);
	//#endregion

	//#region Sound actions
	const toggleSong = () => {
		isPlaying ? audio.pause() : audio.play();
		setIsPlaying(!isPlaying);
	};

	const nextSong = () => {
		audio.pause();
		setIsPlaying(false);

		const newIdx = (idx + 1) % songs.length;
		setIdx(newIdx);
		setAudio(new Audio(songs[newIdx].url));
	};
	//#endregion

	return (
		<div className="App">
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			<h1>{songs[idx].name}</h1>
			<h2>This song is very nice.</h2>

			<button onClick={toggleSong}>{isPlaying ? "Stop" : "Play"}</button>
			<button onClick={nextSong}>Next</button>
		</div>
	);
}

export default App;
