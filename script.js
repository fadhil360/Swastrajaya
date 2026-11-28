
/* =================================
   CONFIGURATION
================================= */

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = "gemini-3.5-flash-lite";
const TTS_API="https://eyes-independently-army-definition.trycloudflare.com"
const API_URL =
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

import { personalities } from "./Character/personality.js";
const DEFAULT_PERSONALITY = `
PERAN DAN PERILAKU:

- Selalu berperan sebagai karakter yang sedang aktif.
- Jangan mengaku sebagai AI, chatbot, atau asisten virtual.
- Perlakukan pengguna sebagai seseorang yang sedang berbicara langsung dengan karakter.
- Tanggapi pertanyaan secara alami dan relevan.
- Jangan terus-menerus membicarakan lore karakter jika topik tidak berkaitan dengannya.
- Boleh membahas teknologi, kehidupan sehari-hari, permainan, hiburan, dan berbagai topik modern.
- Ketika tidak mengetahui sesuatu, akui ketidaktahuan dengan tetap mempertahankan karakter.
- Ingat informasi yang diberikan pengguna dan gunakan kembali dalam percakapan berikutnya.
- Jangan selalu menyetujui pendapat pengguna. Boleh memberikan bantahan sesuai kepribadian karakter.

RESPONSE LENGTH AND TTS RULES:

- Setiap respons maksimal satu paragraf.
- Usahakan respons singkat, idealnya 1 sampai 3 kalimat.
- Jangan melebihi satu paragraf, termasuk ketika menjelaskan topik kompleks.
- Jangan gunakan bullet points, numbered lists, heading, atau line breaks.
- Prioritaskan informasi yang paling relevan.
- Jangan menggunakan tawa tertulis, efek suara, atau teks yang terdengar tidak alami ketika dibacakan TTS.
- Gunakan Bahasa Indonesia yang alami dan cocok untuk percakapan lisan.

ATURAN UTAMA:

- Selalu pertahankan identitas, kepribadian, dan gaya bicara karakter yang sedang aktif.
- Apa pun topiknya, SELALU balas dalam Bahasa Indonesia.
`;
// Character configuration
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

let activeCharacter = CHARACTERS.rama;
window.getActiveCharacter = () => activeCharacter;

/* =================================
   DOM ELEMENTS
================================= */

const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micButton = document.getElementById("mic-button");


/* =================================
   CONVERSATION STORAGE
================================= */

const STORAGE_KEY = "gemini-character-chats";

function loadSavedChats() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error("Failed to load chats:", error);
        return [];
    }
}

let chats = loadSavedChats();
let currentChatId = null;
let conversation = [];
let isGenerating = false;


// Save conversations
function saveChats() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(chats)
        );
    } catch (error) {
        console.error("Failed to save chats:", error);
    }
}


// Save current conversation
function saveCurrentChat() {
    if (conversation.length === 0) return;

    let chat = chats.find(
        item => item.id === currentChatId
    );

    if (!chat) {
        chat = {
            id: currentChatId,
            characterId: activeCharacter.id,
            title: "New Conversation",
            messages: [],
            updatedAt: Date.now()
        };

        chats.unshift(chat);
    }

    // Always associate the conversation with its character
    chat.characterId = activeCharacter.id;

    chat.messages = conversation.map(message => ({
        role: message.role,
        parts: message.parts.map(part => ({ ...part }))
    }));

    const firstMessage = conversation.find(
        message => message.role === "user"
    );

    if (firstMessage) {
        chat.title = firstMessage.parts[0].text.slice(0, 35);
    }

    chat.updatedAt = Date.now();

    chats.sort((a, b) => b.updatedAt - a.updatedAt);

    saveChats();
}



// Restore most recent conversation
function restoreLastConversation() {
    const latestChat = chats.find(
        chat => chat.characterId === activeCharacter.id
    );

    if (!latestChat) {
        currentChatId = null;
        conversation = [];
        console.log("No previous conversation for", activeCharacter.name);
        return;
    }

    currentChatId = latestChat.id;

    conversation = latestChat.messages.map(message => ({
        role: message.role,
        parts: message.parts.map(part => ({ ...part }))
    }));

    console.log("Restored conversation for:", activeCharacter.name);
}
window.selectCharacter = (characterId) => {
    const character = CHARACTERS[characterId];

    if (!character) {
        console.error("Unknown character:", characterId);
        return;
    }

    // Save the previous character's conversation
    saveCurrentChat();

    activeCharacter = character;

    // Load this character's latest conversation
    restoreLastConversation();

    console.log("Active character:", activeCharacter.name);
};

/* =================================
   GEMINI API
================================= */

async function sendMessage() {

    const text = userInput.value.trim();

    if (!text || isGenerating) return;

    if (!API_KEY) {
        alert("Gemini API key is missing. Check your .env file.");
        return;
    }

    if (!currentChatId) {
        currentChatId = Date.now();
    }

    // Add user message to conversation context
    conversation.push({
        role: "user",
        parts: [{ text }]
    });

    userInput.value = "";
    userInput.style.height = "auto";

    setThinking(true);
    setLoading(true);

    console.log("User:", text);

    saveCurrentChat();

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": API_KEY
            },

            body: JSON.stringify({

                systemInstruction: {
                    parts: [
                        {
                            text: activeCharacter.personality + "\n\n" + DEFAULT_PERSONALITY
                        }
                    ]
                },

                contents: conversation,

                generationConfig: {
                    temperature: 0.9,
                    maxOutputTokens: 2048
                }
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error?.message || "Gemini API request failed."
            );
        }

        const aiResponse = data.candidates?.[0]?.content?.parts
            ?.map(part => part.text || "")
            .join("")
            .trim();

        if (!aiResponse) {
            throw new Error("Gemini returned an empty response.");
        }

        // Save AI response to conversation context
        conversation.push({
            role: "model",
            parts: [{ text: aiResponse }]
        });

        saveCurrentChat();

        console.log(`${activeCharacter.name}:`, aiResponse);
        geminiLog.addEntry("response", aiResponse);
        // Automatically speak the response
        await speakText(aiResponse);

    } catch (error) {

        console.error("Gemini Error:", error);
        geminiLog.addEntry("error", error.message);
        // Remove failed user message from conversation context
        if (conversation.length > 0 &&
            conversation[conversation.length - 1].role === "user") {
            conversation.pop();
        }

        saveCurrentChat();

        alert("Gemini Error: " + error.message);

    } finally {
        setThinking(false);
        setLoading(false);
        userInput.focus();
    }
}


/* =================================
   INPUT CONTROLS
================================= */

function setLoading(state) {

    isGenerating = state;

    sendBtn.disabled = state;
    userInput.disabled = state;
}


// Send button
sendBtn.addEventListener("click", sendMessage);


// Enter to send, Shift + Enter for newline
userInput.addEventListener("keydown", event => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();
        sendMessage();
        
    }
});


// Auto resize textarea
userInput.addEventListener("input", () => {

    userInput.style.height = "auto";

    userInput.style.height =
        Math.min(userInput.scrollHeight, 180) + "px";
});


/* =================================
   VOICE INPUT
================================= */

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (micButton && SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "id-ID";
    recognition.continuous = true;
    recognition.interimResults = true;

    let isRecording = false;
    let originalInput = "";

    micButton.addEventListener("click", () => {

        if (!isRecording) {

            originalInput = userInput.value;

            try {
                recognition.start();
            } catch (error) {
                console.error("Could not start recognition:", error);
            }

        } else {
            recognition.stop();
        }
    });

    recognition.onstart = () => {

        isRecording = true;

        micButton.classList.add("recording");
        micButton.textContent = "⏹";
        micButton.title = "Stop voice input";
    };


    recognition.onresult = (event) => {

        let transcript = "";
        let previousSegment = "";

        // Read all recognition results
        for (let i = 0; i < event.results.length; i++) {

            let segment = event.results[i][0].transcript.trim();

            if (!segment) continue;

            // Normalize text for duplicate comparison
            const normalize = text =>
                text.toLowerCase()
                    .replace(/[.,!?;:]/g, "")
                    .replace(/\s+/g, " ")
                    .trim();

            const current = normalize(segment);
            const previous = normalize(transcript);

            // Skip an identical repeated sentence
            if (current === previousSegment) {
                continue;
            }

            // Skip a segment already included in the transcript
            if (previous.includes(current)) {
                continue;
            }

            // Remove overlapping words between segments
            const previousWords = transcript.trim().split(/\s+/);
            const currentWords = segment.split(/\s+/);

            let overlap = 0;

            for (
                let j = Math.min(previousWords.length, currentWords.length);
                j > 0;
                j--
            ) {
                const end = previousWords.slice(-j).join(" ");
                const start = currentWords.slice(0, j).join(" ");

                if (normalize(end) === normalize(start)) {
                    overlap = j;
                    break;
                }
            }

            transcript +=
                (transcript ? " " : "") +
                currentWords.slice(overlap).join(" ");

            previousSegment = current;
        }

        userInput.value =
            originalInput +
            (originalInput && transcript ? " " : "") +
            transcript;

        userInput.style.height = "auto";
        userInput.style.height =
            Math.min(userInput.scrollHeight, 180) + "px";

        console.log("Recognition results:", event.results);
        console.log("Clean transcript:", transcript);
    };


    recognition.onend = () => {

        isRecording = false;

        micButton.classList.remove("recording");
        micButton.textContent = "🎤";
        micButton.title = "Voice to text";
    };

    recognition.onerror = event => {

        console.error("Speech recognition error:", event.error);

        if (event.error === "not-allowed") {
            alert("Please allow microphone access in Chrome.");
        } else if (event.error === "no-speech") {
            console.log("No speech detected.");
        }
    };

} else if (micButton) {

    micButton.disabled = true;
    micButton.title =
        "Speech recognition is not supported by this browser";
}

/* =================================
   POCKET TTS TEXT TO SPEECH
================================= */

async function speakText(text) {
    let audioUrl = null;
    window.setBgmVolume?.(0.08);
    try {
        const formData = new FormData();
        formData.append("text", text);

        // Load the active character's voice sample
        const voiceResponse = await fetch(activeCharacter.voiceSample);

        if (!voiceResponse.ok) {
            throw new Error("Failed to load character voice sample.");
        }

        const voiceBlob = await voiceResponse.blob();

        formData.append(
            "voice_wav",
            voiceBlob,
            "voice.wav"
        );

        const response = await fetch(`${TTS_API.replace(/\/+$/, "")}/tts`, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Pocket TTS error ${response.status}: ${errorText}`);
        }

        const audioBlob = await response.blob();
        audioUrl = URL.createObjectURL(audioBlob);

        const audio = new Audio(audioUrl);

        const audioContext = new AudioContext();
        const source = audioContext.createMediaElementSource(audio);
        const gainNode = audioContext.createGain();

        // Increase amplification
        gainNode.gain.value = 2.0; // 2x volume

        source.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Start talking animation
        if (window.setAvatarTalking) {
            window.setAvatarTalking(true);
        }
        await audioContext.resume();
        // Wait until playback finishes
        await new Promise((resolve, reject) => {
            audio.onended = resolve;

            audio.onerror = () => {
                reject(new Error("Audio playback failed."));
            };
            
            audio.play().catch(reject);
        });

    } catch (error) {
        console.error("Pocket TTS error:", error);

    } finally {
        window.setBgmVolume?.(0.2);

        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
        }
    }
}

function setThinking(isThinking) {
    console.log("setThinking called:", isThinking);

    const input = document.getElementById("userInput");

    if (!input) {
        console.error("userInput element not found!");
        return;
    }

    input.disabled = isThinking;
    input.placeholder = isThinking
        ? "Sedang berpikir..."
        : "Ask something...";

    sendBtn.disabled = isThinking;
    micButton.disabled = isThinking;

    console.log("Current placeholder:", input.placeholder);

    window.setAvatarThinking?.(isThinking);
}
/* =================================
   INITIALIZATION
================================= */

restoreLastConversation();

console.log("AR chatbot initialized.");
console.log("Character:", CHARACTERS.name);
console.log("Saved conversations:", chats.length);

/* =================================
   GEMINI RESULT LOG UI
================================= */

function createGeminiLogUI() {
    const toggleButton = document.getElementById("geminiLogToggle");
    const overlay = document.getElementById("geminiLogOverlay");
    const closeButton = document.getElementById("geminiLogClose");
    const content = document.getElementById("geminiLogContent");

    function openLog() {
        overlay.classList.add("active");
    }

    function closeLog() {
        overlay.classList.remove("active");
    }

    toggleButton.onclick = openLog;
    closeButton.onclick = closeLog;

    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            closeLog();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeLog();
        }
    });

    return {
        addEntry(type, message) {
            const empty = content.querySelector(".gemini-log-empty");
            if (empty) empty.remove();

            const entry = document.createElement("div");
            entry.className = `gemini-log-entry ${type}`;

            const time = document.createElement("span");
            time.className = "log-time";
            time.textContent =
                `${type === "error" ? "ERROR" : "GEMINI RESPONSE"} • ${new Date().toLocaleTimeString()}`;

            const text = document.createElement("div");
            text.textContent = message;

            entry.appendChild(time);
            entry.appendChild(text);

            content.appendChild(entry);
            content.scrollTop = content.scrollHeight;
        }
    };
}

const geminiLog = createGeminiLogUI();
