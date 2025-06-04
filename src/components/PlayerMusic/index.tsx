import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

function PlayerMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const music = "/sound/EdSheerenPerfect.mp3";

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.8; // 80% do volume
        }
    }, []);

    return (
        <>
            <audio ref={audioRef} src={music} />

            <button
                onClick={togglePlay}
                style={{
                    position: "fixed",
                    bottom: "10px",
                    left: "10px",
                    width: "45px",
                    height: "45px",
                    backgroundColor: "red",
                    borderRadius: "15px",
                    color: "white",
                    border: "none",
                    display: "flex",
                    zIndex: 1000,
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    opacity: 0.8,
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget.style.backgroundColor = "#cc0000");
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget.style.backgroundColor = "red");
                }}
            >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>
        </>
    );
}

export default PlayerMusic;
