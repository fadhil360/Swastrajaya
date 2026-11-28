const APP_BASE = new URL("./", document.currentScript.src).href;
import { characters } from "../../script.js";
document.addEventListener("DOMContentLoaded", () => {
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

    const characterList = Object.values(characters);

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
    }
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
