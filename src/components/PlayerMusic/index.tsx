import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function PlayerMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const music = "/sound/EdSheerenPerfect.mp3";
    const silentCounter = useRef(0);
    const toastShown = useRef(false);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => {
                setIsPlaying(true);
                startAnalyser(); // iniciar detecção só após play
            });
        }
    };

    const startAnalyser = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.8;

        if (!audioContextRef.current) {
            const context = new AudioContext();
            const source = context.createMediaElementSource(audio);
            const analyser = context.createAnalyser();

            source.connect(analyser);
            analyser.connect(context.destination);

            audioContextRef.current = context;
            sourceRef.current = source;
            analyserRef.current = analyser;

            analyser.fftSize = 256;
        }

        const analyser = analyserRef.current!;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const interval = setInterval(() => {
            if (!isPlaying) return; // não checar se estiver pausado

            analyser.getByteFrequencyData(dataArray);
            const sum = dataArray.reduce((acc, val) => acc + val, 0);

            if (sum < 5) {
                silentCounter.current++;
            } else {
                silentCounter.current = 0;
                toastShown.current = false; // reset caso som volte
            }

            if (silentCounter.current >= 3 && !toastShown.current) {
                toast.warn("🔇 Som não detectado. Verifique se o volume do seu dispositivo está ativado.", {
                    position: "bottom-left",
                    autoClose: 5000,
                    theme: "dark",
                });
                toastShown.current = true;
            }
        }, 1000);

        // limpar no unmount
        return () => clearInterval(interval);
    };

    return (
        <>
            <audio ref={audioRef} src={music} />

            <button
                title={isPlaying ? "Pausar música" : "Tocar música"}
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
                    opacity: 0.85,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#cc0000";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "red";
                }}
            >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>

            <ToastContainer />
        </>
    );
}

export default PlayerMusic;
