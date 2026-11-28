const APP_BASE = new URL("./", document.currentScript.src).href;
console.log("arscript.js loaded!");
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script started!");
    const scene = document.querySelector("#arScene");
    const video = document.querySelector("#avatarVideo");
    const scanButton = document.querySelector("#scanAgainButton");
    const debugLog = document.querySelector("#debugLog");
    const introAudio = document.getElementById("introAudio");
    const bgm = document.getElementById("bgm");
    bgm.volume = 0.2;
    const userInput = document.querySelector("#userInput");
    const sendBtn = document.querySelector("#sendBtn");
    const micButton = document.querySelector("#mic-button");
    const CHARACTERS = {
        rama: {
            id: "rama",
            name: "Rama",
            description: "",
            voiceSample: `Character/Suara A.wav`,
            personality: personalities.Rama,
            videos: {
                talking: `Character/Rama/Talk.mp4`,
                idle: `Character/Rama/Idle.mp4`,
                thinking: `Character/Rama/Think.mp4`
            },
            introAudio: `Character/Rama/Intro.wav`
        },
        laksmana: {
            id: "laksmana",
            name: "Laksmana",
            description: "",
            voiceSample: `Character/Suara A.wav`,
            personality: personalities.Laksmana,
            videos: {
                talking: `Character/Laksmana/Talk.mp4`,
                idle: `Character/Laksmana/Idle.mp4`,
                thinking: `Character/Laksmana/Think.mp4`
            },
            introAudio: `Character/Laksmana/Intro.ogg`
        },
        sinta: {
            id: "sinta",
            name: "Sinta",
            description: "",
            voiceSample: `Character/Suara E.wav`,
            personality: personalities.Sinta,
            videos: {
                talking: `Character/Sinta/Talk.mp4`,
                idle: `Character/Sinta/Idle.mp4`,
                thinking: `Character/Sinta/Think.mp4`
            },
            introAudio: `Character/Sinta/Intro.wav`
        },
        jatayu: {
            id: "jatayu",
            name: "Jatayu",
            description: "",
            voiceSample: `Character/Suara D.wav`,
            personality: personalities.Jatayu,
            videos: {
                talking: `Character/Jatayu/Talk.mp4`,
                idle: `Character/Jatayu/Idle.mp4`,
                thinking: `Character/Jatayu/Think.mp4`
            },
            introAudio: `Character/Jatayu/Intro.wav`
        },
        hanoman: {
            id: "hanoman",
            name: "Hanoman",
            description: "",
            voiceSample: `Character/Suara A.wav`,
            personality: personalities.Hanoman,
            videos: {
                talking: `Character/Hanoman/Talk.mp4`,
                idle: `Character/Hanoman/Idle.mp4`,
                thinking: `Character/Hanoman/Think.mp4`
            },
            introAudio: `Character/Hanoman/Intro.mp3`
        },    indrajit: {
            id: "indrajit",
            name: "Indrajit",
            description: "",
            voiceSample: `Character/Suara B.wav`,
            personality: personalities.Indrajit,
            videos: {
                talking: `Character/Indrajit/Talk.mp4`,
                idle: `Character/Indrajit/Idle.mp4`,
                thinking: `Character/Indrajit/Think.mp4`
            },
            introAudio: `Character/Indrajit/Intro.wav`
        },
        wibisana: {
            id: "wibisana",
            name: "Wibisana",
            description: "",
            voiceSample: `Character/Suara A.wav`,
            personality: personalities.Wibisana,
            videos: {
                talking: `Character/Wibisana/Talk.mp4`,
                idle: `Character/Wibisana/Idle.mp4`,
                thinking: `Character/Wibisana/Think.mp4`
            },
            introAudio: `Character/Wibisana/Intro.ogg`
        },
        kumbakarna: {
            id: "kumbakarna",
            name: "Kumbakarna",
            description: "",
            voiceSample: `Character/Suara B.wav`,
            personality: personalities.Kumbakarna,
            videos: {
                talking: `Character/Kumbakarna/Talk.mp4`,
                idle: `Character/Kumbakarna/Idle.mp4`,
                thinking: `Character/Kumbakarna/Think.mp4`
            },
            introAudio: `Character/Kumbakarna/Intro.ogg`
        },
        supranaka: {
            id: "supranaka",
            name: "Supranaka",
            description: "",
            voiceSample: `Character/Suara F.wav`,
            personality: personalities.Supranaka,
            videos: {
                talking: `Character/Supranaka/Talk.mp4`,
                idle: `Character/Supranaka/Idle.mp4`,
                thinking: `Character/Supranaka/Think.mp4`
            },
            introAudio: `Character/Supranaka/Intro.mp3`
        },
        rahwana: {
            id: "rahwana",
            name: "Rahwana",
            description: "",
            voiceSample: `Character/Suara B.wav`,
            personality: personalities.Rahwana,
            videos: {
                talking: `Character/Rahwana/Talk.mp4`,
                idle: `Character/Rahwana/Idle.mp4`,
                thinking: `Character/Rahwana/Think.mp4`
            },
            introAudio: `Character/Rahwana/Intro.wav`
        },
        subali: {
            id: "subali",
            name: "Subali",
            description: "",
            voiceSample: `Character/Suara B.wav`,
            personality: personalities.Subali,
            videos: {
                talking: `Character/Subali/Talk.mp4`,
                idle: `Character/Subali/Idle.mp4`,
                thinking: `Character/Subali/Think.mp4`
            },
            introAudio: `Character/Subali/Intro.ogg`
        },
        sugriwa: {
            id: "sugriwa",
            name: "Sugriwa",
            description: "",
            voiceSample: `Character/Suara B.wav`,
            personality: personalities.Sugriwa,
            videos: {
                talking: `Character/Sugriwa/Talk.mp4`,
                idle: `Character/Sugriwa/Idle.mp4`,
                thinking: `Character/Sugriwa/Think.mp4`
            },
            introAudio: `Character/Sugriwa/Intro.ogg`
        },
        tara: {
            id: "tara",
            name: "Tara",
            description: "",
            voiceSample: `Character/Suara F.wav`,
            personality: personalities.Tara,
            videos: {
                talking: `Character/Tara/Talk.mp4`,
                idle: `Character/Tara/Idle.mp4`,
                thinking: `Character/Tara/Think.mp4`
            },
            introAudio: `Character/Tara/Intro.mp3`
        },
    };
    const characterList = Object.values(CHARACTERS);
    
    const TARGET_CHARACTERS = Object.fromEntries(
        characterList.map((character, index) => [
            index,
            character.id
        ])
    );
    const targetCount = characterList.length;

    for (let i = 0; i < targetCount; i++) {
        const target = document.createElement("a-entity");

        target.setAttribute("mindar-image-target", `targetIndex: ${i}`);

        scene.appendChild(target);
        console.log(`Created target ${i}:`, target);
    }
    console.log("Character List:", characterList);
    console.log("Target Characters:", TARGET_CHARACTERS);
    let targetFound = false;
    let videoActive = false;
    let currentMode = "";

    function log(message) {
        console.log("AR:", message);
        if (debugLog) debugLog.textContent = message;
    }

    function setChatEnabled(enabled) {
        userInput.disabled = !enabled;
        sendBtn.disabled = !enabled;
        micButton.disabled = !enabled;
        document.body.classList.toggle("chat-disabled", !enabled);
    }

    function getCharacter() {
        return window.getActiveCharacter?.();
    }

    async function changeVideo(mode) {
        const character = getCharacter();
        const newSource = character?.videos?.[mode];

        if (!newSource) {
            console.error("Video not configured:", mode);
            return;
        }

        if (
            currentMode === mode &&
            video.src.endsWith(newSource) &&
            !video.paused
        ) return;

        currentMode = mode;
        video.src = newSource.startsWith("http")
            ? newSource
            : new URL(newSource.replace(/^\/+/, ""), APP_BASE).href;
        video.load();

        try {
            await video.play()
            .then(() => {
                console.log("Video playback started");
            })
            .catch(error => {
                console.error("Video playback blocked:", error);
            });
            video.addEventListener("error", () => {
                console.error("Video error:", video.error);
            });

            video.addEventListener("canplay", () => {
                console.log("Video is ready to play");
            });

            video.addEventListener("loadeddata", () => {
                console.log("First video frame loaded");
            });
            
            log("Playing " + character.name + ": " + mode);
        } catch (error) {
            console.error("Video playback error:", error);
        }
    }

    window.setAvatarTalking = (isTalking) => {
        if (!videoActive) return;
        changeVideo(isTalking ? "talking" : "idle");
    };

    window.setAvatarThinking = (isThinking) => {
        if (!videoActive) return;
        changeVideo(isThinking ? "thinking" : "idle");
    };


async function activateCharacter(targetIndex, arSystem) {
    if (targetFound) return;

    const characterId = TARGET_CHARACTERS[targetIndex];

    log("Detected target index: " + targetIndex);

    if (!characterId) {
        log("No character mapped to target: " + targetIndex);
        return;
    }

    try {
        // Load character first, before pausing the scanner
        if (typeof window.selectCharacter !== "function") {
            throw new Error("selectCharacter() is not available");
        }

        window.selectCharacter(characterId);

        const character = window.getActiveCharacter?.();
        console.log("Active character:", character);
        console.log("Talking video path:", character?.videos?.talking);
        console.log("Intro audio path:", character?.introAudio);
        console.log("APP_BASE:", APP_BASE);
        if (!character) {
            throw new Error("Could not load character configuration");
        }

        log("Character loaded: " + character.name);

        targetFound = true;
        arSystem.pause(true);

        videoActive = true;
        document.body.classList.add("video-active");
        video.style.display = "block";
        scanButton.hidden = false;

        setChatEnabled(false);

        currentMode = "";
        await changeVideo("talking");

        introAudio.pause();
        introAudio.currentTime = 0;
        introAudio.src = character.introAudio.startsWith("http")
            ? character.introAudio
            : new URL(
                character.introAudio.replace(/^\/+/, ""),
                APP_BASE
            ).href;
        introAudio.load();

        await introAudio.play();

        log("Playing introduction: " + character.name);

    } catch (error) {
        console.error("Character activation error:", error);
        log("Activation error: " + error.message);

        targetFound = false;
        videoActive = false;
        video.style.display = "none";

        document.body.classList.remove("video-active");

        arSystem.unpause();
    }
}


    introAudio.addEventListener("ended", async () => {
        if (!videoActive) return;

        await changeVideo("idle");
        setChatEnabled(true);

        bgm.currentTime = 0;

        try {
            await bgm.play();
            log("Introduction finished. Chat enabled.");
        } catch (error) {
            console.error("BGM playback error:", error);
        }
    });

    function scanAgain() {
        setChatEnabled(false);

        introAudio.pause();
        introAudio.currentTime = 0;

        bgm.pause();
        bgm.currentTime = 0;

        video.pause();
        video.style.display = "none";

        document.body.classList.remove("video-active");

        videoActive = false;
        targetFound = false;
        currentMode = "";

        scanButton.hidden = true;

        const arSystem = scene.systems["mindar-image-system"];

        if (arSystem) {
            arSystem.unpause();
        }

        log("Scanning for another target...");
    }

    scene.addEventListener("loaded", () => {
        const arSystem = scene.systems["mindar-image-system"];

        if (!arSystem) {
            log("MindAR system not found");
            return;
        }

        const targets = document.querySelectorAll(
            "[mindar-image-target]"
        );

        targets.forEach(target => {
            const component = target.components["mindar-image-target"];

            if (!component) {
                console.error("MindAR target component not initialized:", target);
                return;
            }

            const targetIndex = Number(component.data.targetIndex);

            console.log("Registered target:", targetIndex);

            target.addEventListener("targetFound", () => {
                console.log("Target found:", targetIndex);
                activateCharacter(targetIndex, arSystem);
            });
        });

        log("Camera ready. Scan a character target.");
    });

    scanButton.addEventListener("click", scanAgain);

    scanButton.hidden = true;
    setChatEnabled(false);
});
